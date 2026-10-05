-- Run this once in the Supabase SQL Editor to enable a shared leaderboard.
create extension if not exists pgcrypto;
create table if not exists public.quiz_results (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null unique,
  name text not null check (char_length(name) between 1 and 16),
  mode text not null check (mode in ('vocabulary-mc','vocabulary-ja','reading','conversation')),
  score integer not null check (score >= 0),
  correct integer not null check (correct between 0 and 14),
  avg_ms integer not null check (avg_ms between 0 and 120000),
  created_at timestamptz not null default now()
);
create index if not exists quiz_results_daily_idx on public.quiz_results (mode, created_at desc, score desc, correct desc, avg_ms asc);
alter table public.quiz_results enable row level security;
create policy "public can read leaderboard" on public.quiz_results for select using (true);
revoke insert, update, delete on public.quiz_results from anon, authenticated;
create table if not exists public.quiz_responses (
  id bigint generated always as identity primary key,
  result_id uuid not null references public.quiz_results(id) on delete cascade,
  question_id text not null,
  is_correct boolean not null,
  elapsed_ms integer not null check (elapsed_ms between 0 and 120000),
  points integer not null check (points >= 0)
);
alter table public.quiz_responses enable row level security;
revoke all on public.quiz_responses from anon, authenticated;
create function public.submit_quiz_result(p_session_id uuid,p_name text,p_mode text,p_score integer,p_correct integer,p_avg_ms integer,p_responses jsonb)
returns uuid language plpgsql security definer set search_path = public as $$
declare new_id uuid; r jsonb; response_count integer:=0; calculated_score integer:=0; calculated_correct integer:=0; calculated_ms integer:=0; lvl text; base_points integer; speed_points integer; question_id text; expected_prefix text; seen_ids text[]:=array[]::text[]; seen_levels text[]:=array[]::text[];
begin
  if p_mode not in ('vocabulary-mc','vocabulary-ja','reading','conversation') then raise exception 'invalid mode'; end if;
  if char_length(btrim(p_name)) not between 1 and 16 or p_name ~ '[<>[:cntrl:]]' then raise exception 'invalid name'; end if;
  if jsonb_typeof(p_responses)<>'array' or jsonb_array_length(p_responses)<>14 then raise exception 'expected 14 answers'; end if;
  for r in select * from jsonb_array_elements(p_responses) loop
    response_count:=response_count+1;
    question_id:=r->>'questionId';
    if question_id is null or question_id=any(seen_ids) then raise exception 'missing or repeated question'; end if;
    seen_ids:=array_append(seen_ids,question_id);
    expected_prefix:=case p_mode when 'vocabulary-mc' then 'vocab-mc-' when 'vocabulary-ja' then 'vocab-ja-' when 'reading' then 'reading-' when 'conversation' then 'conversation-' end;
    if left(question_id,char_length(expected_prefix))<>expected_prefix then raise exception 'question does not match mode'; end if;
    lvl:=substring(question_id from '-(5|4|3|pre2|2|pre1|1)-');
    if lvl is null then raise exception 'invalid question level'; end if;
    seen_levels:=array_append(seen_levels,lvl);
    if coalesce((r->>'elapsedMs')::integer,-1) not between 0 and 120000 then raise exception 'invalid elapsed time'; end if;
    if coalesce((r->>'points')::integer,-1)<0 then raise exception 'invalid points'; end if;
    if (r->>'correct')::boolean then
      base_points:=case lvl when '5' then 100 when '4' then 130 when '3' then 165 when 'pre2' then 210 when '2' then 260 when 'pre1' then 320 when '1' then 390 else null end;
      if base_points is null then raise exception 'invalid question'; end if;
      speed_points:=case lvl when '5' then 45 when '4' then 50 when '3' then 55 when 'pre2' then 60 when '2' then 65 when 'pre1' then 70 when '1' then 75 end;
      if (r->>'points')::integer<>base_points+round(speed_points * greatest(0,least(1,1-(r->>'elapsedMs')::numeric/120000))) then raise exception 'score mismatch'; end if;
      calculated_correct:=calculated_correct+1; calculated_score:=calculated_score+(r->>'points')::integer;
    elsif (r->>'points')::integer<>0 then raise exception 'incorrect answers must score zero'; end if;
    calculated_ms:=calculated_ms+(r->>'elapsedMs')::integer;
  end loop;
  foreach lvl in array array['5','4','3','pre2','2','pre1','1'] loop
    if (select count(*) from unnest(seen_levels) as level_rows(level) where level_rows.level=lvl)<>2 then raise exception 'expected two questions at each level'; end if;
  end loop;
  if calculated_score<>p_score or calculated_correct<>p_correct or round(calculated_ms::numeric/14)::integer<>p_avg_ms then raise exception 'result mismatch'; end if;
  insert into quiz_results(id,session_id,name,mode,score,correct,avg_ms) values(p_session_id,p_session_id,btrim(p_name),p_mode,p_score,p_correct,p_avg_ms) returning id into new_id;
  for r in select * from jsonb_array_elements(p_responses) loop
    insert into quiz_responses(result_id,question_id,is_correct,elapsed_ms,points) values(new_id,r->>'questionId',(r->>'correct')::boolean,(r->>'elapsedMs')::integer,(r->>'points')::integer);
  end loop;
  return new_id;
end $$;
revoke all on function public.submit_quiz_result(uuid,text,text,integer,integer,integer,jsonb) from public;
grant execute on function public.submit_quiz_result(uuid,text,text,integer,integer,integer,jsonb) to anon, authenticated;
