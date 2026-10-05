export const LEVELS = ['5','4','3','pre2','2','pre1','1'] as const;
export type Level = typeof LEVELS[number];
export type Mode = 'vocabulary-mc'|'vocabulary-ja'|'reading'|'conversation';
export type QuestionBase = { id:string; level:Level; mode:Mode; active:boolean };
export type ChoiceQuestion = QuestionBase & { mode:'vocabulary-mc'|'reading'|'conversation'; prompt:string; passage?:string; dialogue?:string; choices:[string,string,string,string]; answer:number; explanation?:string };
export type JapaneseQuestion = QuestionBase & {
  mode: 'vocabulary-ja';
  prompt: string;
  accepted: string[];
  partialAnswers?: {
    answers: string[];
    credit: number;
  }[];
  explanation?: string;
};
export type Question = ChoiceQuestion|JapaneseQuestion;
export type AnswerValue = number|string|null;
export type Response = { questionId:string; answer:AnswerValue; correct:boolean; elapsedMs:number; points:number };
export type Result = { id:string; name:string; mode:Mode; score:number; correct:number; avgMs:number; createdAt:string; responses?:Response[] };
export const LEVEL_LABEL:Record<Level,string> = { '5':'英検5級','4':'英検4級','3':'英検3級','pre2':'英検準2級','2':'英検2級','pre1':'英検準1級','1':'英検1級' };
export const MODE_LABEL:Record<Mode,string> = {'vocabulary-mc':'単語・選択式','vocabulary-ja':'単語・日本語訳',reading:'読解',conversation:'会話'};
