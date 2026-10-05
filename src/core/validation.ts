import { LEVELS, type Mode, type Question } from './types';
export const MODES:Mode[]=['vocabulary-mc','vocabulary-ja','reading','conversation'];
export type BankIssue={id?:string;message:string};
export function validateBank(bank:Question[],full=false):BankIssue[] {
  const issues:BankIssue[]=[],ids=new Set<string>(),texts=new Set<string>();
  for(const q of bank){
    if(ids.has(q.id)) issues.push({id:q.id,message:'重複したID'}); ids.add(q.id);
    if(!LEVELS.includes(q.level)) issues.push({id:q.id,message:'無効な級'});
    if(!MODES.includes(q.mode)) issues.push({id:q.id,message:'無効なモード'});
    const body=('passage' in q?q.passage+' ':'')+('dialogue' in q?q.dialogue+' ':'')+q.prompt;
    const normalized=body.trim().toLocaleLowerCase(); if(texts.has(normalized)) issues.push({id:q.id,message:'設問テキストが重複'}); texts.add(normalized);
    if(!q.prompt?.trim()) issues.push({id:q.id,message:'設問が空です'});
    if(q.mode==='vocabulary-ja'&&(!q.accepted.length||q.accepted.some(x=>!x.trim()))) issues.push({id:q.id,message:'許容訳が必要です'});
    if(q.mode==='vocabulary-mc'||q.mode==='reading'||q.mode==='conversation'){
      if(q.choices.length!==4||q.choices.some(x=>!x.trim())) issues.push({id:q.id,message:'選択肢は4つ必要です'});
      if(!Number.isInteger(q.answer)||q.answer<0||q.answer>3) issues.push({id:q.id,message:'正解は1つ必要です'});
      if(q.mode==='reading'&&!q.passage?.trim()) issues.push({id:q.id,message:'本文が必要です'});
      if(q.mode==='conversation'&&!q.dialogue?.trim()) issues.push({id:q.id,message:'会話文が必要です'});
    }
  }
  for(const level of LEVELS) for(const mode of MODES){
    const count=bank.filter(q=>q.active&&q.level===level&&q.mode===mode).length;
    if(!full&&level==='5'&&mode==='vocabulary-mc'&&count===0) continue;
    const valid=full?count===45:count>=2;
    if(!valid) issues.push({message:`${level}/${mode}: 有効問題数 ${count}（必要数 ${full?'45':'2+'}）`});
  }
  return issues;
}
