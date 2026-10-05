import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Mode, Result, Response } from './types';
import { dailyResults, rankResults } from './game';
const url=import.meta.env.VITE_SUPABASE_URL as string|undefined;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string|undefined;
export const supabase:SupabaseClient|null=url&&key?createClient(url,key):null;
const CACHE='kotoba-quest-leaderboard-cache-v1';
function localRead():Result[]{try{return JSON.parse(localStorage.getItem(CACHE)||'[]') as Result[]}catch{return [];}}
export async function saveResult(result:Result,responses:Response[]):Promise<void>{
  if(supabase){const {error}=await supabase.rpc('submit_quiz_result',{p_session_id:result.id,p_name:result.name,p_mode:result.mode,p_score:result.score,p_correct:result.correct,p_avg_ms:result.avgMs,p_responses:responses});if(error)throw error;}
  else {const all=localRead();all.push({...result,responses});localStorage.setItem(CACHE,JSON.stringify(all.slice(-5000)));}
}
export async function getToday(mode:Mode):Promise<Result[]>{
  if(supabase){const now=new Date(),date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);const start=new Date(`${date}T00:00:00+09:00`),end=new Date(start.getTime()+86_400_000);const {data,error}=await supabase.from('quiz_results').select('id,name,mode,score,correct,avg_ms,created_at').eq('mode',mode).gte('created_at',start.toISOString()).lt('created_at',end.toISOString()).order('score',{ascending:false}).order('correct',{ascending:false}).order('avg_ms',{ascending:true}).limit(250);if(error)throw error;return (data||[]).map((x:any)=>({id:x.id,name:x.name,mode:x.mode,score:x.score,correct:x.correct,avgMs:x.avg_ms,createdAt:x.created_at} as Result));}
  return rankResults(dailyResults(localRead().filter(r=>r.mode===mode)));
}
export const sharedLeaderboardAvailable=Boolean(supabase);
