import type { AnswerValue, Level, Mode, Question, Response } from './types';
import { LEVELS } from './types';

export class SubmissionGate {
  private locked=false;
  tryLock():boolean { if(this.locked)return false;this.locked=true;return true; }
  reset():void { this.locked=false; }
}

export const SCORING:Record<Level,{base:number;maxSpeedBonus:number}> = {
  '5':{base:100,maxSpeedBonus:45},'4':{base:130,maxSpeedBonus:50},'3':{base:165,maxSpeedBonus:55},
  pre2:{base:210,maxSpeedBonus:60},'2':{base:260,maxSpeedBonus:65},pre1:{base:320,maxSpeedBonus:70},'1':{base:390,maxSpeedBonus:75}
};
export function scoreAnswer(
  level: Level,
  credit: number,
  elapsedMs: number,
  limitMs = 120_000
): number {
  if (credit <= 0) return 0;

  const { base, maxSpeedBonus } = SCORING[level];
  const speed = Math.max(0, Math.min(1, 1 - elapsedMs / limitMs));

  const fullScore = base + Math.round(maxSpeedBonus * speed);

  return Math.round(fullScore * credit);
}
export function normalizeJapanese(value:string):string {
  return value.normalize('NFKC').toLocaleLowerCase('ja-JP').trim().replace(/[\s　]+/g,'').replace(/[。、，,.!！?？「」『』:：;；]/g,'');
}
export function answerCredit(
  question: Question,
  answer: AnswerValue
): number {
  if (answer === null) return 0;

  if (question.mode !== 'vocabulary-ja') {
    return answer === question.answer ? 1 : 0;
  }

  const normalized = normalizeJapanese(String(answer));

  if (
    question.accepted.some(
      a => normalizeJapanese(a) === normalized
    )
  ) {
    return 1;
  }

  for (const partial of question.partialAnswers ?? []) {
    if (
      partial.answers.some(
        a => normalizeJapanese(a) === normalized
      )
    ) {
      return Math.max(0, Math.min(1, partial.credit));
    }
  }

  return 0;
}
export function checkAnswer(question:Question,answer:AnswerValue):boolean {
  if(answer===null) return false;
  return question.mode==='vocabulary-ja' ? question.accepted.some(a=>normalizeJapanese(a)===normalizeJapanese(String(answer))) : answer===question.answer;
}
export function answerCredit(
  question: Question,
  answer: AnswerValue
): number {
  if (answer === null) return 0;

  if (question.mode !== 'vocabulary-ja') {
    return answer === question.answer ? 1 : 0;
  }

  const normalized = normalizeJapanese(String(answer));

  
export function selectGameQuestions(bank:Question[],mode:Mode,random=Math.random):Question[] {
  const chosen:Question[]=[];
  for(const level of LEVELS){
    const pool=bank.filter(q=>q.active&&q.level===level&&q.mode===mode);
    if(pool.length<2) throw new Error(`${level}/${mode} needs at least 2 active questions`);
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    chosen.push(...pool.slice(0,2));
  }
  return chosen;
}
export function responseFor(
  q: Question,
  answer: AnswerValue,
  elapsedMs: number
): Response {
  const credit = answerCredit(q, answer);
  const correct = credit === 1;

  return {
    questionId: q.id,
    answer,
    correct,
    elapsedMs,
    points: scoreAnswer(q.level, credit, elapsedMs),
  };
}
export function rankResults<T extends {score:number;correct:number;avgMs:number}>(results:T[]):T[] {
  return [...results].sort((a,b)=>b.score-a.score||b.correct-a.correct||a.avgMs-b.avgMs);
}
export function rankOf<T extends {id?:string;score:number;correct:number;avgMs:number}>(results:T[],target:T):number {
  const sorted=rankResults(results),at=sorted.findIndex(row=>row===target||row.id!==undefined&&row.id===target.id);
  if(at<0)return 0;
  const first=sorted.findIndex(row=>row.score===target.score&&row.correct===target.correct&&row.avgMs===target.avgMs);
  return first+1;
}
export function jstDate(iso:string|Date):string {
  const d=typeof iso==='string'?new Date(iso):iso;
  return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(d);
}
export function dailyResults(results:import('./types').Result[],now=new Date()):import('./types').Result[] {
  const today=jstDate(now);
  return results.filter(r=>jstDate(r.createdAt)===today);
}
