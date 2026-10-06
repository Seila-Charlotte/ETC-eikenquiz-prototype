import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, Clock3, Crown, Gamepad2, Globe2, Languages, Medal, RotateCcw, Sparkles, Trophy, X } from 'lucide-react';
import { normalizeJapanese, rankOf, responseFor, selectGameQuestions, SubmissionGate } from '../core/game';
import { LEVEL_LABEL, MODE_LABEL, type AnswerValue, type Level, type Mode, type PlayType, type Question, type Response, type Result } from '../core/types';
import { getToday, saveResult } from '../core/leaderboard';
import { questionBank } from '../data/questions';

type Screen='play-type'|'home'|'category'|'quiz'|'result'|'leaderboard';
const MODES:Mode[]=['vocabulary-mc','vocabulary-ja','reading','conversation'];
const ICONS=[BookOpen,Languages,Globe2,Gamepad2];
const CLOCK=120_000;
function cleanName(value:string){return value.replace(/[<>\u0000-\u001f]/g,'').replace(/\s+/g,' ').trim().slice(0,16);}
function App(){
  const [playType, setPlayType] = useState<PlayType | null>(null);
 const [teamName, setTeamName] = useState('');
 const [members, setMembers] = useState<string[]>(['', '']);
 const [screen,setScreen]=useState<Screen>('play-type'),[guest,setGuest]=useState(''),[mode,setMode]=useState<Mode|null>(null),[items,setItems]=useState<Question[]>([]),[index,setIndex]=useState(0),[responses,setResponses]=useState<Response[]>([]),[answer,setAnswer]=useState<AnswerValue>(null),[remaining,setRemaining]=useState(120),[feedback,setFeedback]=useState<Response|null>(null),[result,setResult]=useState<Result|null>(null),[dailyRank,setDailyRank]=useState<number|null>(null),[board,setBoard]=useState<Result[]>([]),[boardMode,setBoardMode]=useState<Mode>('vocabulary-mc'),[loadingBoard,setLoadingBoard]=useState(false),[saveError,setSaveError]=useState('');
 const begun=useRef(0),gate=useRef(new SubmissionGate()),done=useRef(false),timer=useRef<number|undefined>(undefined),next=useRef<number|undefined>(undefined),answerInput=useRef<HTMLInputElement>(null);
 const current=items[index],score=responses.reduce((a,r)=>a+r.points,0);
 useEffect(()=>{if(screen!=='quiz'||feedback)return;setRemaining(120);begun.current=Date.now();gate.current.reset();setAnswer(null);timer.current=window.setInterval(()=>{const left=Math.max(0,CLOCK-(Date.now()-begun.current));setRemaining(Math.ceil(left/1000));if(left<=0){clearInterval(timer.current);submit(null,true);}},200);return()=>clearInterval(timer.current);},[screen,index]);
 useEffect(()=>()=>{clearInterval(timer.current);clearTimeout(next.current);},[]);
 const pickMode=(m:Mode)=>{setMode(m);setScreen('category');};
 function startQuiz(m:Mode){try{const selected=selectGameQuestions(questionBank,m);setMode(m);setItems(selected);setIndex(0);setResponses([]);setFeedback(null);setResult(null);setSaveError('');done.current=false;setScreen('quiz');}catch(e){alert(e instanceof Error&&e.message.startsWith('5/vocabulary-mc')?'英検5級の単語・選択式は、問題入れ替え中です。':'問題データを読み込めませんでした。');console.error(e);}}
 function submit(value:AnswerValue,timedOut=false){if(!gate.current.tryLock()||!current||!mode)return;clearInterval(timer.current);const elapsed=timedOut?CLOCK:Math.min(CLOCK,Date.now()-begun.current);const response=responseFor(current,value,elapsed);const updated=[...responses,response];setResponses(updated);setFeedback(response);next.current=window.setTimeout(()=>{setFeedback(null);if(index+1<items.length){setIndex(index+1);return;}void finish(updated);},1050);}
 async function finish(all:Response[]){if(done.current)return;done.current=true;const total=all.reduce((n,r)=>n+r.points,0),correct=all.filter(r=>r.correct).length,avg=Math.round(all.reduce((n,r)=>n+r.elapsedMs,0)/all.length);const completed: Result = {
  id: crypto.randomUUID(),
  name: playType === 'team' ? teamName : guest,
  playType: playType!,
  members: playType === 'team'
    ? members.filter(m => m.trim())
    : undefined,
  mode: mode!,
  score: total,
  correct,
  avgMs: avg,
  createdAt: new Date().toISOString(),
  responses: all
};setResult(completed);setDailyRank(null);setScreen('result');try{await saveResult(completed,all);const today=await getToday(mode!);setDailyRank(rankOf(today,completed));}catch(e){console.error(e);setSaveError('ランキングに記録できませんでした。係の人に声をかけてください。');} }
 async function showBoard(m=mode||'vocabulary-mc'){setBoardMode(m);setScreen('leaderboard');setLoadingBoard(true);try{setBoard(await getToday(m));}catch(e){console.error(e);setBoard([]);setSaveError('ランキングを読み込めませんでした。');}finally{setLoadingBoard(false);}}
 const modeSummary=(m:Mode)=>m==='vocabulary-mc'?'英検でよく出る単語・熟語にチャレンジ！':m==='reading'?'英文を読んで、内容について答えよう。':'会話の流れに合う返答を選ぼう。';
  function submitEnabled(){if(answer===null)return;submit(answer);}
 return <div className="app-shell"><header className="topbar"><button className="brand" onClick={()=>setScreen('home')}><span className="brand-icon"><Sparkles size={20}/></span><span>ことば<span className="brand-pop">クエスト</span></span></button><div className="top-right"><button className="mini-link" onClick={()=>void showBoard(boardMode)}><Trophy size={17}/> ランキング</button></div></header>
 <main className="main-content">
   {screen === 'play-type' && (
  <section className="section-screen">
    <div className="section-heading">
      <div className="eyebrow centered">PLAY STYLE</div>
      <h2>遊び方を選んでください</h2>
    
    </div>

    <div className="mode-grid">
      <button
        className="mode-card sky"
        onClick={() => {
          setPlayType('individual');
          setScreen('home');
        }}
      >
        <span className="mode-icon">👤</span>
        <button
  className="mode-card lavender"
  onClick={() => {
    setPlayType('team');
    setScreen('home');
  }}
>
  <span className="mode-icon">👥</span>
  <span className="mode-card-title">チームモード</span>
  <span className="mode-card-desc">みんなで協力</span>
  <span className="mode-card-arrow">
    <ArrowRight size={19}/>
  </span>
</button>

    </div>
  </section>
)}

{screen === 'home' && (
  <section className="hero home-card">
    <div className="hero-left">
      <div className="eyebrow">
        <span>英語クイズ</span>
        <i/>
      </div>

      <h1>
        英語クイズに<br/>
        <span>参加しよう</span>
      </h1>

      <p className="hero-description">
        英検5級から1級までの問題に挑戦できます。
      </p>

      {playType === 'individual' ? (
        <div className="name-field">
          <label htmlFor="guest">参加者名</label>

          <div className="input-wrap">
            <span>✦</span>
            <input
              id="guest"
              value={guest}
              onChange={e => setGuest(cleanName(e.target.value))}
              maxLength={16}
              placeholder="名前を入力してね"
            />
            <small>{guest.length}/16</small>
          </div>
        </div>
      ) : (
        <div className="name-field">
          <label htmlFor="team-name">チーム名</label>

          <div className="input-wrap">
            <span>✦</span>
            <input
              id="team-name"
              value={teamName}
              onChange={e => setTeamName(cleanName(e.target.value))}
              maxLength={16}
              placeholder="チーム名を入力してね"
            />
            <small>{teamName.length}/16</small>
          </div>

          <label>メンバー</label>

          {members.map((member, i) => (
            <div className="input-wrap" key={i}>
              <span>👤</span>
              <input
                value={member}
                onChange={e => {
                  const updated = [...members];
                  updated[i] = cleanName(e.target.value);
                  setMembers(updated);
                }}
                maxLength={16}
                placeholder={`メンバー${i + 1}`}
              />
            </div>
          ))}

          <button
            type="button"
            className="secondary-button"
            onClick={() => setMembers([...members, ''])}
          >
            ＋ メンバーを追加
          </button>
        </div>
      )}

      <button
        className="primary-button start-button"
        disabled={
          playType === 'individual'
            ? !guest.trim()
            : !teamName.trim() ||
              members.filter(m => m.trim()).length < 2
        }
        onClick={() => setScreen('category')}
      >
        スタート <ArrowRight size={20}/>
      </button>

      <div className="privacy-note">
        ゲスト参加 · 登録なしですぐ遊べるよ
      </div>
    </div>

    <div className="hero-art">
      <div className="sunburst"/>
      <div className="floating f-star">✦</div>
      <div className="floating f-plus">✚</div>
      <div className="floating f-dot">✦</div>

      <div className="book-stack">
        <div className="book book-back">
          <span>ABC</span>
        </div>
        <div className="book book-mid">
          <span>WORDS</span>
        </div>
        <div className="book book-front">
          <span className="book-star">✦</span>
          <strong>ENGLISH</strong>
        </div>
        <div className="pencil"/>
      </div>
    </div>

    <div className="hero-bottom">
      <span>● 7つのレベル</span>
      <span>● 14問チャレンジ</span>
      <span>● 1問ずつランダム出題</span>
    </div>
  </section>
)}
 {screen==='category'&&<section className="section-screen"><button className="back-link" onClick={()=>setScreen('home')}><ArrowLeft size={17}/> もどる</button><div className="section-heading"><div className="eyebrow centered">モード選択</div><h2>モードを選んでください</h2><p>好きなジャンルを選んでね。全14問にチャレンジ！</p></div><div className="mode-grid">{(['vocabulary-mc','reading','conversation'] as Mode[]).map((m,i)=>{const Icon=ICONS[i===0?0:i+1];const colors=['coral','sky','lavender'];return <button key={m} className={`mode-card ${colors[i]}`} onClick={()=>m==='vocabulary-mc'?pickMode(m):startQuiz(m)}><span className="mode-icon"><Icon size={26}/></span><span className="mode-card-title">{m==='vocabulary-mc'?'単語':MODE_LABEL[m]}</span><span className="mode-card-desc">{modeSummary(m)}</span><span className="mode-card-arrow"><ArrowRight size={19}/></span>{m==='vocabulary-mc'&&<span className="tiny-label">単語</span>}</button>})}</div><div className="category-footer"><span className="spark-dot">✦</span> どのモードも、英検5級から1級まで各2問ずつ出題されるよ！</div></section>}
 {screen==='category'&&(mode==='vocabulary-mc'||mode==='vocabulary-ja')&&<div className="submode-overlay"><div className="submode-modal"><button className="modal-close" onClick={()=>setMode(null)}><X size={20}/></button><span className="modal-icon"><Languages size={26}/></span><h3>単語</h3><p>どちらの遊び方にする？</p><div className="submode-options"><button onClick={()=>startQuiz('vocabulary-mc')}><b>選択式</b><small>4つの選択肢から答えよう</small><ArrowRight size={18}/></button><button onClick={()=>startQuiz('vocabulary-ja')}><b>日本語訳</b><small>意味を入力して答えよう</small><ArrowRight size={18}/></button></div></div></div>}
 {screen==='quiz'&&current&&<section className="quiz-screen"><div className="quiz-header"><div><span className="mode-pill">{MODE_LABEL[mode!]}</span><span className="question-count">問題 <b>{index+1}</b> / 14</span></div><div className={`timer ${remaining<=20?'urgent':''}`}><Clock3 size={17}/><b>{Math.floor(remaining/60)}:{String(remaining%60).padStart(2,'0')}</b><span>残り時間</span></div></div><div className="progress-track"><div className="progress-value" style={{width:`${((index+(feedback?1:0))/14)*100}%`}}/></div><div className="quiz-level-row"><div className="level-token"><span>LEVEL</span><b>{LEVEL_LABEL[current.level]}</b></div><div className="score-chip"><Sparkles size={16}/><span>スコア</span><b>{score.toLocaleString()} pt</b></div></div><article className="question-card" key={current.id}><div className="question-kicker"><span>QUESTION {String(index+1).padStart(2,'0')}</span><span>{mode==='vocabulary-ja'?'TYPE YOUR ANSWER':'CHOOSE THE BEST ANSWER'}</span></div>{current.mode==='reading'&&<div className="passage">{current.passage}</div>}{current.mode==='conversation'&&<div className="dialogue">{current.dialogue}</div>}<h2 className={`prompt ${current.mode==='vocabulary-ja'?'word-prompt':''}`}>{current.prompt}</h2>{current.mode==='vocabulary-ja'?<div className="japanese-answer"><label>この単語の意味を日本語で入力してください。</label><input ref={answerInput} autoFocus value={typeof answer==='string'?answer:''} onChange={e=>setAnswer(normalizeJapanese(e.target.value))} onKeyDown={e=>e.key==='Enter'&&submitEnabled()} placeholder="日本語で入力" disabled={!!feedback}/></div>:<div className="choices">{current.choices.map((c,i)=><button key={i} disabled={!!feedback} onClick={()=>setAnswer(i)} className={`choice ${answer===i?'selected':''} ${feedback&&i===current.answer?'correct-option':''} ${feedback&&answer===i&&!feedback.correct?'wrong-option':''}`}><span className="choice-letter">{String.fromCharCode(65+i)}</span><span>{c}</span>{feedback&&i===current.answer&&<Check size={18}/>}</button>)}</div>}<div className="question-bottom">{feedback?<div className={`feedback ${feedback.correct?'good':'bad'}`}>{feedback.correct?<><Check size={19}/> 正解！ <strong>+{feedback.points} pt</strong></>:<><X size={19}/> {remaining===0?'時間切れ！':'おしい！'} <span>正解をチェックしてね</span></>}</div>:<button className="primary-button answer-button" disabled={answer===null} onClick={submitEnabled}>{current.mode==='vocabulary-ja'?'答えを決定':'この答えにする'}<ArrowRight size={18}/></button>}<div className="score-total"><small>いまのスコア</small><b>{score.toLocaleString()} <i>pt</i></b></div></div></article><div className="quiz-level-track">{(['5','4','3','pre2','2','pre1','1'] as Level[]).map((l,i)=><div key={l} className={current.level===l?'active':''}><span>{i+1}</span><small>{LEVEL_LABEL[l].replace('英検','')}</small></div>)}</div></section>}
 {screen==='result'&&result&&<section className="result-screen"><div className="result-banner"><div className="confetti confetti-one">✦</div><div className="confetti confetti-two">●</div><span className="result-medal"><Trophy size={32}/></span><p>QUIZ RESULT</p><h2>クイズ終了</h2><div className="result-name">{result.name} さん、おつかれさま！</div><div className="result-score">{result.score.toLocaleString()} <small>pt</small></div><div className="result-mode">{MODE_LABEL[result.mode]} · 今日のチャレンジ</div><div className="rank-badge">{dailyRank===null?"きょうの順位を集計中…":<>きょうの順位 <b>{dailyRank}位</b></>}</div></div><div className="result-stats"><div><span>正解数</span><b>{result.correct}<small> / 14 問</small></b></div><div><span>正答率</span><b>{Math.round(result.correct/14*100)}<small>%</small></b></div><div><span>平均回答時間</span><b>{(result.avgMs/1000).toFixed(1)}<small> 秒</small></b></div></div><div className="level-results"><div className="result-section-title"><h3>レベル別の結果</h3><span>LEVEL PROGRESS</span></div><div className="level-result-grid">{(['5','4','3','pre2','2','pre1','1'] as Level[]).map(l=>{const rows=result.responses?.filter(r=>questionBank.find(q=>q.id===r.questionId)?.level===l)||[];return <div key={l} className="level-result"><span>{LEVEL_LABEL[l]}</span><b>{rows.filter(r=>r.correct).length}<small> / 2</small></b><div className="mini-track"><i style={{width:`${rows.filter(r=>r.correct).length*50}%`}}/></div></div>})}</div></div>{saveError&&<div className="error-note">{saveError}</div>}<div className="result-actions"><button className="primary-button" onClick={()=>void showBoard(result.mode)}>ランキングを見る <Trophy size={19}/></button><button className="secondary-button" onClick={()=>{setMode(null);setScreen('home');}}>最初に戻る <RotateCcw size={17}/></button></div></section>}
 {screen==='leaderboard'&&<section className="leaderboard-screen"><button className="back-link" onClick={()=>setScreen(result?'result':'home')}><ArrowLeft size={17}/> もどる</button><div className="section-heading"><div className="eyebrow centered">DAILY RANKING</div><h2>きょうのランキング <span>🏆</span></h2><p>本日のランキングです。</p></div><div className="board-tabs">{MODES.map(m=><button key={m} className={boardMode===m?'active':''} onClick={()=>void showBoard(m)}>{MODE_LABEL[m]}</button>)}</div><div className="leaderboard-card"><div className="board-date">{new Intl.DateTimeFormat('ja-JP',{timeZone:'Asia/Tokyo',year:'numeric',month:'long',day:'numeric'}).format(new Date())} · 0:00 にリセット</div>{loadingBoard?<div className="empty-board">ランキングを読み込み中…</div>:board.length===0?<div className="empty-board"><span>🌱</span><b>まだ冒険者はいないみたい</b><p>最初のランキングに名前をのせよう！</p></div>:<div className="board-rows">{board.slice(0,20).map((r)=><div key={r.id} className={`board-row rank-${rankOf(board,r)}`}><div className="rank-mark">{rankOf(board,r)===1?<Crown size={20}/>:rankOf(board,r)<4?<Medal size={20}/>:String(rankOf(board,r))}</div><div className="rank-name">{r.name}</div><div className="rank-detail">{r.correct}/14 正解</div><b className="rank-points">{r.score.toLocaleString()} <small>pt</small></b></div>)}</div>}</div><button className="secondary-button board-home" onClick={()=>{setMode(null);setScreen('home');}}>最初に戻る <RotateCcw size={17}/></button></section>}
 </main><footer className="footer"><span>ことばクエスト</span><span>英検レベルに合わせたオリジナル問題</span></footer></div>;
}
export default App;
