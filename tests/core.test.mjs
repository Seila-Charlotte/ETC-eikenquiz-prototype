import test from 'node:test';
import assert from 'node:assert/strict';
import { questionBank } from '../src/data/questions.ts';
import { LEVELS, MODE_LABEL } from '../src/core/types.ts';
import { checkAnswer, dailyResults, jstDate, normalizeJapanese, rankOf, rankResults, scoreAnswer, selectGameQuestions, SubmissionGate } from '../src/core/game.ts';
import { validateBank } from '../src/core/validation.ts';

test('two usable seeds exist in every level and mode pool',()=>{
  for(const level of LEVELS) for(const mode of Object.keys(MODE_LABEL)) {
    const expected=level==='5'&&mode==='vocabulary-mc'?0:2;
    assert.equal(questionBank.filter(q=>q.active&&q.level===level&&q.mode===mode).length,expected,`${level}/${mode}`);
  }
});
for(const mode of Object.keys(MODE_LABEL).filter(m=>m!=='vocabulary-mc')) test(`${mode} selects fourteen distinct questions, two per level`,()=>{
  const selected=selectGameQuestions(questionBank,mode,()=>0.37);
  assert.equal(selected.length,14);assert.equal(new Set(selected.map(q=>q.id)).size,14);
  for(const level of LEVELS) assert.equal(selected.filter(q=>q.level===level).length,2);
});
test('vocabulary multiple-choice waits for the replacement Grade 5 pool',()=>assert.throws(()=>selectGameQuestions(questionBank,'vocabulary-mc'),/5\/vocabulary-mc needs at least 2 active questions/));
test('selection fails when a pool is short',()=>assert.throws(()=>selectGameQuestions(questionBank.filter(q=>q.id!=='reading-5-001'),'reading')));
test('difficulty weight and speed bonus increase correct answer score',()=>{
  assert.ok(scoreAnswer('1',true,0)>scoreAnswer('5',true,0));assert.ok(scoreAnswer('5',true,0)>scoreAnswer('5',true,110000));
});
test('incorrect and timed out answers score zero',()=>{assert.equal(scoreAnswer('1',false,0),0);assert.equal(scoreAnswer('pre1',false,120000),0);});
test('timeout and submission racing through the same gate can only record once',()=>{
  const gate=new SubmissionGate();assert.equal(gate.tryLock(),true);assert.equal(gate.tryLock(),false);gate.reset();assert.equal(gate.tryLock(),true);
});
test('Japanese input normalization removes harmless spacing and punctuation',()=>assert.equal(normalizeJapanese('  到着　する。 '),'到着する'));
test('all accepted Japanese translations are recognized and others rejected',()=>{
  const q=questionBank.find(x=>x.mode==='vocabulary-ja');assert.ok(q);assert.equal(checkAnswer(q,' 到着する。 '),true);assert.equal(checkAnswer(q,'着く'),true);assert.equal(checkAnswer(q,'到着した'),false);
});
test('seed bank validation passes and full-bank mode reports 45-item deficits',()=>{
  assert.deepEqual(validateBank(questionBank),[]);assert.ok(validateBank(questionBank,true).some(i=>i.message.includes('必要数 45')));
  assert.ok(validateBank([...questionBank,questionBank[0]]).some(i=>i.message==='重複したID'));
});
test('leaderboard ranking uses score, correct count, then fastest time',()=>{
  const ranked=rankResults([{score:10,correct:5,avgMs:20},{score:10,correct:6,avgMs:80},{score:10,correct:6,avgMs:30}]);assert.deepEqual(ranked.map(x=>x.avgMs),[30,80,20]);
});
test('exact ties share a rank',()=>{
  const a={id:'a',score:8,correct:7,avgMs:42000},b={id:'b',score:8,correct:7,avgMs:42000},c={id:'c',score:7,correct:7,avgMs:39000};assert.equal(rankOf([a,b,c],b),1);assert.equal(rankOf([a,b,c],c),3);
});
test('daily filter follows the Asia/Tokyo midnight boundary',()=>{
  assert.equal(jstDate('2026-10-05T14:59:59Z'),'2026-10-05');assert.equal(jstDate('2026-10-05T15:00:00Z'),'2026-10-06');
  const rows=[{createdAt:'2026-10-05T14:59:00Z'},{createdAt:'2026-10-05T15:00:00Z'}];assert.equal(dailyResults(rows,new Date('2026-10-05T15:00:02Z')).length,1);
});
