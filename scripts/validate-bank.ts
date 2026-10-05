import { questionBank } from '../src/data/questions';
import { validateBank } from '../src/core/validation';
declare const process:{argv:string[];exit(code?:number):never};
const full=process.argv.includes('--full');
const issues=validateBank(questionBank,full);
if(issues.length){console.error(`${issues.length}件の問題があります:`);for(const issue of issues)console.error(`${issue.id?`[${issue.id}] `:''}${issue.message}`);process.exit(1);}
console.log(`${full?'Full':'Seed'} bank validation passed (${questionBank.filter(q=>q.active).length} active questions).${full?'':' Grade 5 vocabulary multiple-choice is reserved for replacement.'}`);
