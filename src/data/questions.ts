import type { Question, Level } from '../core/types';
const levels:Level[]=['5','4','3','pre2','2','pre1','1'];
const vocabs:[string,string[],string,number,string][]=[
['quiet',['quiet','empty','narrow','simple'],'The library is a ( ____ ) place where people can study.',0,'quiet'],
['prepare',['prepare','repair','compare','provide'],'Mika needs to ( ____ ) for her history test tonight.',0,'prepare'],
['discover',['discover','decide','deliver','divide'],'The children hope to ( ____ ) a new walking path in the forest.',0,'discover'],
['avoid',['avoid','allow','afford','accept'],'To stay focused, I try to ( ____ ) checking my phone while studying.',0,'avoid'],
['contribute',['contribute','compete','complain','convince'],'Each student can ( ____ ) an idea to the class project.',0,'contribute'],
['reliable',['reliable','ordinary','temporary','curious'],'We chose a ( ____ ) guide who knew the mountain trails well.',0,'reliable'],
['substantial',['substantial','artificial','sufficient','sensitive'],'The new library received a ( ____ ) donation that funded several reading rooms.',0,'substantial'],
['compelling',['compelling','convenient','cautious','consistent'],'Her ( ____ ) argument persuaded the committee to reconsider the plan.',0,'compelling'],
['mitigate',['mitigate','maintain','maximize','monitor'],'Planting trees can help ( ____ ) the effects of summer heat in cities.',0,'mitigate'],
['ambiguous',['ambiguous','abundant','arbitrary','anonymous'],'The instructions were ( ____ ), so the volunteers were unsure which entrance to use.',0,'ambiguous'],
['underscore',['underscore','overlook','withdraw','anticipate'],'The report uses several examples to ( ____ ) the value of early education.',0,'underscore'],
['resilient',['resilient','reluctant','redundant','relevant'],'A ( ____ ) community can recover more quickly after a natural disaster.',0,'resilient'],
];
const ja:[string,string,string[]][]=[
['arrive','arrive',['到着する','着く']],['careful','careful',['注意深い','気をつける']],['improve','improve',['改善する','上達する']],['perhaps','perhaps',['たぶん','おそらく']],['ordinary','ordinary',['普通の','ありふれた']],['encourage','encourage',['励ます','勇気づける']],['efficient','efficient',['効率的な','能率のよい']],['concern','concern',['懸念','心配','関係する']],['interpret','interpret',['解釈する','通訳する']],['demand','demand',['需要','要求する']],['inevitable','inevitable',['避けられない','必然の']],['allocate','allocate',['割り当てる','配分する']],['coherent','coherent',['筋の通った','首尾一貫した']],['obsolete','obsolete',['時代遅れの','廃れた']]
];
type Passage=[string,string,string,string,string,string,string];
const reading:Passage[]=[
['On Sunday, Ken and his sister visited their grandmother. They made lunch together and played a card game.','What did Ken do with his sister?','They cooked lunch.','They watched a film.','They went shopping.','They cleaned the garden.','They cooked lunch.'],
['Mina has a small garden behind her house. She grows tomatoes in summer and gives some to her neighbors. This year, she is also planting flowers to attract butterflies.','Why is Mina planting flowers?','To attract butterflies.','To sell them at a market.','To make her garden smaller.','To give them to her teacher.','To attract butterflies.'],
['The town library will close early this Thursday for building repairs. Visitors may return books through the slot beside the main entrance. Regular hours will resume on Friday morning.','How can visitors return books on Thursday?','By using the slot near the entrance.','By leaving them at the school.','By mailing them on Friday.','By calling the library staff.','By using the slot near the entrance.'],
['Aki joined a cooking club because she wanted to learn recipes from other countries. At first, she found it difficult to follow instructions in English. Her club members began sharing illustrated recipe cards, and now Aki enjoys teaching the group dishes from her hometown.','What helped Aki take part more easily?','Illustrated recipe cards.','A new cooking textbook.','Extra English lessons at school.','A visit to a restaurant.','Illustrated recipe cards.'],
['A coastal village created a walking route through its wetlands. Local guides explain how the marshes reduce the force of storm waves and provide shelter for migratory birds. Since the route opened, small businesses have reported more visitors, while the village limits group sizes to protect wildlife.','Why does the village limit group sizes?','To reduce disturbance to wildlife.','To shorten the route for local guides.','To make the wetlands easier to drain.','To encourage visitors to drive.','To reduce disturbance to wildlife.'],
['Many schools are introducing repair workshops where students fix everyday objects instead of replacing them. The workshops teach practical skills, but organizers say their broader aim is to change how students think about resources. When young people see that a broken item can be useful again, they may become more careful about what they discard.','What broader change do organizers hope to encourage?','More thoughtful use of resources.','Greater interest in buying new tools.','Less time spent on practical classes.','More competition between schools.','More thoughtful use of resources.'],
['Researchers studying urban heat have found that small parks can cool nearby streets, though their effect depends on tree cover and water availability. A city that funded several pocket parks found measurable cooling on shaded streets, but little change where buildings blocked airflow. The results suggest that green space works best as part of a wider design strategy.','What do the findings suggest about pocket parks?','Their impact depends partly on surrounding design.','They cool every street equally.','They work only when placed far from buildings.','Their main purpose should be recreation.','Their impact depends partly on surrounding design.'],
['The spread of digital archives has made historical records easier to consult, yet access alone does not guarantee understanding. Documents may reflect the assumptions of those who created them, while others were never preserved. Historians therefore compare records from different sources and examine what is missing as carefully as what survives. Such scrutiny does not eliminate uncertainty; it makes the limits of an interpretation clearer.','Why do historians examine what is missing from an archive?','To recognize how gaps may shape an interpretation.','To prove that preserved documents are inaccurate.','To avoid comparing records from different sources.','To replace written records with digital tools.','To recognize how gaps may shape an interpretation.'],
['Some cities have experimented with congestion charges to reduce traffic in busy centers. Early evaluations often focus on vehicle counts, but a decline in cars does not by itself reveal whether residents benefit. If reliable public transport is unavailable, the charge may simply burden workers who cannot alter their travel times. Policymakers must therefore assess changes in air quality and access to jobs alongside traffic data.','What does the passage imply policymakers should do?','Evaluate several effects, including access to work.','Set charges before reviewing public transport.','Measure success only by counting vehicles.','Apply the same policy to every neighborhood.','Evaluate several effects, including access to work.'],
['When an institution adopts a new technology, efficiency is often cited as its chief advantage. Yet the measurable time saved in one task may be offset by the unrecorded labor required to maintain the system, train staff, and correct errors. A sound evaluation must consider not only the tool’s immediate output but also the distribution of its costs and the resilience of the processes surrounding it.','What is the central point of the passage?','Technology assessments should include indirect costs and system resilience.','New technologies invariably make institutions less efficient.','Training staff matters more than measuring any outcomes.','Maintenance costs can always be predicted precisely.','Technology assessments should include indirect costs and system resilience.'],
['A regional museum digitized thousands of handwritten letters describing migration a century ago. Searchable text has helped researchers notice patterns that would have been difficult to find by reading each letter individually. However, handwriting recognition is less reliable when ink has faded or writers used unusual spellings. The museum therefore keeps photographs of the originals beside the searchable versions, allowing scholars to verify uncertain readings.','Why does the museum keep images of the original letters?','So researchers can check uncertain text transcriptions.','So it can stop using handwriting recognition.','So visitors can learn how to write in old styles.','So it can avoid preserving the paper originals.','So researchers can check uncertain text transcriptions.'],
['In some farming regions, growers are testing crops that can tolerate longer dry periods. Such varieties may protect harvests when rainfall becomes unpredictable, but they are not a complete response to water shortages. Farmers still need healthy soil, careful irrigation, and access to local forecasts. Researchers argue that combining these measures reduces risk more reliably than expecting a single new seed to solve the problem.','What do researchers recommend?','Combining several approaches to reduce agricultural risk.','Replacing local forecasts with drought-resistant crops.','Growing only one crop across a large region.','Increasing irrigation regardless of soil conditions.','Combining several approaches to reduce agricultural risk.'],
['Public debates about historical monuments often become framed as a choice between preservation and removal. Yet communities have also experimented with adding plaques, creating nearby exhibits, or commissioning works that explain perspectives once excluded from public spaces. These approaches do not settle every disagreement, but they can make the history surrounding a monument more visible and invite continuing discussion.','What is one effect of adding context around a monument?','It can bring overlooked perspectives into public discussion.','It guarantees that communities will agree about the past.','It prevents people from visiting the monument.','It replaces the need for historical research.','It can bring overlooked perspectives into public discussion.'],
['When a scientific result is difficult to reproduce, public discussion may treat the failure as evidence that the original work was worthless. Researchers, however, view replication as a way to learn which findings are robust and which depend on a particular method or sample. A revised account can be more useful than the original claim because it describes both what evidence supports and where uncertainty remains.','How do researchers view replication?','As a tool for testing the reliability and limits of findings.','As a way to ensure every study reaches the same result.','As a process that eliminates uncertainty from science.','As evidence that the first researchers acted carelessly.','As a tool for testing the reliability and limits of findings.'],
];
type Dialogue=[string,string,string,string,string,string,string];
const conversations:Dialogue[]=[
['A: Good morning, Emi.','B: ( ____ )','Good morning, Mr. Lee.','It is on the desk.','I went by bus.','At half past six.','Good morning, Mr. Lee.'],
['A: Would you like some orange juice?','B: ( ____ )','Yes, please. Thank you.','It is very sunny today.','I finished my homework.','We are in the classroom.','Yes, please. Thank you.'],
['A: Did you enjoy the school concert?','B: ( ____ )','Yes, especially the final song.','I will bring my notebook.','The music room is upstairs.','It starts at three o’clock.','Yes, especially the final song.'],
['A: I cannot find the history section in this bookshop.','B: ( ____ )','It is on the second floor, near the stairs.','I read history every evening.','The book was quite expensive.','We should meet after lunch.','It is on the second floor, near the stairs.'],
['A: You seem disappointed about the exchange trip.','B: ( ____ )','I was looking forward to it, but it was postponed.','I packed everything last week.','The exchange student likes music.','I can speak a little French.','I was looking forward to it, but it was postponed.'],
['A: The team is split over which design to use.','B: ( ____ )','Could we compare how each one meets the project goals?','I submitted the form on Monday.','The printer is out of paper again.','We should leave before the doors close.','Could we compare how each one meets the project goals?'],
['A: I hear the council may remove the old market stalls.','B: ( ____ )','That is understandable, but they should consult the vendors first.','I bought some apples there yesterday.','The meeting ended before noon.','It was designed by a local architect.','That is understandable, but they should consult the vendors first.'],
['A: The committee has received strong objections to the proposal.','B: ( ____ )','Then it would be prudent to address their concerns before proceeding.','The proposal was printed on recycled paper.','I have never served on a committee.','Proceedings usually begin at nine.','Then it would be prudent to address their concerns before proceeding.'],
['A: The data support our conclusion, but only under specific conditions.','B: ( ____ )','We should qualify the claim so readers do not overgeneralize it.','The conclusion was written in blue ink.','I prefer working in the morning.','Those conditions were quite comfortable.','We should qualify the claim so readers do not overgeneralize it.'],
['A: The new policy appears to have reduced delays, although staff report more paperwork.','B: ( ____ )','We ought to weigh the benefit against the administrative burden.','The paperwork was delivered yesterday.','Delays are common during the winter.','I would rather work at the front desk.','We ought to weigh the benefit against the administrative burden.'],
['A: The archive’s search tool found a possible match, but the handwriting is faint.','B: ( ____ )','Let us compare it with the page image before treating it as certain.','The archive is closed on public holidays.','I learned to write cursive in primary school.','The search tool was released last month.','Let us compare it with the page image before treating it as certain.'],
['A: The pilot program lowered energy use, but it also required frequent maintenance.','B: ( ____ )','We should include those ongoing costs in the next evaluation.','The building has a large meeting room.','Energy prices changed last spring.','I can repair a bicycle tire.','We should include those ongoing costs in the next evaluation.'],
['A: Some residents want the statue removed, while others argue it should remain.','B: ( ____ )','Perhaps a public exhibit could explain the history and the competing views.','The statue was made from local stone.','I visited the exhibit after school.','Residents receive their bills by mail.','Perhaps a public exhibit could explain the history and the competing views.'],
['A: The second trial did not reproduce the first result.','B: ( ____ )','That gives us a reason to examine which conditions may have affected it.','The laboratory is beside the main library.','I repeated the instructions to the group.','The first report appeared in a journal.','That gives us a reason to examine which conditions may have affected it.'],
];

type Grade5VocabMcQuestion = {
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  answer: number;
  explanation: string;
};

const grade5VocabMc: Grade5VocabMcQuestion[] = [
  {
    id: 'vocab-mc-5-001',
    prompt: 'A: What do you want to drink?\nB: I want some ( ____ ), please.',
    choices: ['water', 'bread', 'music', 'tennis'],
    answer: 0,
    explanation: 'water',
  },
  {
    id: 'vocab-mc-5-002',
    prompt: 'My sister likes animals. She has a white ( ____ ).',
    choices: ['desk', 'cat', 'bus', 'book'],
    answer: 1,
    explanation: 'cat',
  },
  {
    id: 'vocab-mc-5-003',
    prompt: 'Ken goes to school by ( ____ ) every morning.',
    choices: ['kitchen', 'soccer', 'bus', 'lunch'],
    answer: 2,
    explanation: 'bus',
  },
  {
    id: 'vocab-mc-5-004',
    prompt: 'A: Where is Mom?\nB: She is cooking dinner in the ( ____ ).',
    choices: ['library', 'park', 'classroom', 'kitchen'],
    answer: 3,
    explanation: 'kitchen',
  },
  {
    id: 'vocab-mc-5-005',
    prompt: 'I am very ( ____ ). I want something to eat.',
    choices: ['hungry', 'tall', 'sunny', 'young'],
    answer: 0,
    explanation: 'hungry',
  },
  {
    id: 'vocab-mc-5-006',
    prompt: 'A: What ( ____ ) do you like?\nB: I like blue.',
    choices: ['sport', 'color', 'animal', 'food'],
    answer: 1,
    explanation: 'color',
  },
  {
    id: 'vocab-mc-5-007',
    prompt: 'My father is a doctor. He works at a ( ____ ).',
    choices: ['station', 'restaurant', 'hospital', 'park'],
    answer: 2,
    explanation: 'hospital',
  },
  {
    id: 'vocab-mc-5-008',
    prompt: 'A: Is this your pencil?\nB: No. My pencil is ( ____ ) my bag.',
    choices: ['from', 'after', 'with', 'in'],
    answer: 3,
    explanation: 'in',
  },
  {
    id: 'vocab-mc-5-009',
    prompt: 'Lisa can ( ____ ) the piano very well.',
    choices: ['play', 'eat', 'read', 'open'],
    answer: 0,
    explanation: 'play',
  },
  {
    id: 'vocab-mc-5-010',
    prompt: 'We have English class ( ____ ) Monday.',
    choices: ['at', 'on', 'to', 'of'],
    answer: 1,
    explanation: 'on',
  },
  {
    id: 'vocab-mc-5-011',
    prompt: 'A: How is the weather today?\nB: It is ( ____ ). Let\'s go to the park.',
    choices: ['hungry', 'busy', 'sunny', 'short'],
    answer: 2,
    explanation: 'sunny',
  },
  {
    id: 'vocab-mc-5-012',
    prompt: 'Please ( ____ ) the window. It is cold outside.',
    choices: ['sing', 'walk', 'study', 'close'],
    answer: 3,
    explanation: 'close',
  },
  {
    id: 'vocab-mc-5-013',
    prompt: 'My birthday is in ( ____ ). It is the first month of the year.',
    choices: ['January', 'Sunday', 'morning', 'winter'],
    answer: 0,
    explanation: 'January',
  },
  {
    id: 'vocab-mc-5-014',
    prompt: 'A: Where can I borrow this book?\nB: At the ( ____ ).',
    choices: ['pool', 'library', 'station', 'hospital'],
    answer: 1,
    explanation: 'library',
  },
  {
    id: 'vocab-mc-5-015',
    prompt: 'My brother and I ( ____ ) soccer after school.',
    choices: ['drink', 'speak', 'play', 'cook'],
    answer: 2,
    explanation: 'play',
  },
  {
    id: 'vocab-mc-5-016',
    prompt: 'A: What time do you get up?\nB: ( ____ ) seven o\'clock.',
    choices: ['On', 'For', 'From', 'At'],
    answer: 3,
    explanation: 'At',
  },
  {
    id: 'vocab-mc-5-017',
    prompt: 'This box is very ( ____ ). I cannot carry it.',
    choices: ['heavy', 'clean', 'kind', 'fast'],
    answer: 0,
    explanation: 'heavy',
  },
  {
    id: 'vocab-mc-5-018',
    prompt: 'My mother buys bread and milk at the ( ____ ).',
    choices: ['school', 'supermarket', 'library', 'hospital'],
    answer: 1,
    explanation: 'supermarket',
  },
  {
    id: 'vocab-mc-5-019',
    prompt: 'A: Can you ( ____ ) English?\nB: Yes, a little.',
    choices: ['swim', 'make', 'speak', 'watch'],
    answer: 2,
    explanation: 'speak',
  },
  {
    id: 'vocab-mc-5-020',
    prompt: 'I wash my ( ____ ) before dinner.',
    choices: ['books', 'shoes', 'desks', 'hands'],
    answer: 3,
    explanation: 'hands',
  },
  {
    id: 'vocab-mc-5-021',
    prompt: 'A: ( ____ ) is that girl?\nB: She is my sister.',
    choices: ['Who', 'When', 'How', 'Where'],
    answer: 0,
    explanation: 'Who',
  },
  {
    id: 'vocab-mc-5-022',
    prompt: 'I usually eat ( ____ ) in the morning.',
    choices: ['dinner', 'breakfast', 'homework', 'soccer'],
    answer: 1,
    explanation: 'breakfast',
  },
  {
    id: 'vocab-mc-5-023',
    prompt: 'A: Do you like music?\nB: Yes. I ( ____ ) to music every day.',
    choices: ['look', 'read', 'listen', 'see'],
    answer: 2,
    explanation: 'listen',
  },
  {
    id: 'vocab-mc-5-024',
    prompt: 'There are seven ( ____ ) in a week.',
    choices: ['months', 'years', 'hours', 'days'],
    answer: 3,
    explanation: 'days',
  },
  {
    id: 'vocab-mc-5-025',
    prompt: 'A: Where is your dog?\nB: It is ( ____ ) the table.',
    choices: ['under', 'summer', 'happy', 'every'],
    answer: 0,
    explanation: 'under',
  },
  {
    id: 'vocab-mc-5-026',
    prompt: 'My grandmother lives in a small ( ____ ) near the sea.',
    choices: ['apple', 'house', 'teacher', 'Monday'],
    answer: 1,
    explanation: 'house',
  },
  {
    id: 'vocab-mc-5-027',
    prompt: 'A: What are you doing?\nB: I am ( ____ ) a book.',
    choices: ['drinking', 'opening', 'reading', 'swimming'],
    answer: 2,
    explanation: 'reading',
  },
  {
    id: 'vocab-mc-5-028',
    prompt: 'It is very hot today. I want a ( ____ ) drink.',
    choices: ['long', 'old', 'high', 'cold'],
    answer: 3,
    explanation: 'cold',
  },
  {
    id: 'vocab-mc-5-029',
    prompt: 'My school starts at eight in the ( ____ ).',
    choices: ['morning', 'night', 'evening', 'afternoon'],
    answer: 0,
    explanation: 'morning',
  },
  {
    id: 'vocab-mc-5-030',
    prompt: 'A: How many ( ____ ) do you have?\nB: Two. Tom and Jack.',
    choices: ['milk', 'brothers', 'rice', 'weather'],
    answer: 1,
    explanation: 'brothers',
  },
  {
    id: 'vocab-mc-5-031',
    prompt: 'Mr. Brown ( ____ ) English at our school.',
    choices: ['drinks', 'swims', 'teaches', 'sleeps'],
    answer: 2,
    explanation: 'teaches',
  },
  {
    id: 'vocab-mc-5-032',
    prompt: 'A: Let\'s go to the park.\nB: Sorry, I have a lot of ( ____ ) today.',
    choices: ['weather', 'breakfast', 'tennis', 'homework'],
    answer: 3,
    explanation: 'homework',
  },
  {
    id: 'vocab-mc-5-033',
    prompt: 'I like summer because I can ( ____ ) in the sea.',
    choices: ['swim', 'draw', 'read', 'cook'],
    answer: 0,
    explanation: 'swim',
  },
  {
    id: 'vocab-mc-5-034',
    prompt: 'A: Where can we take the train?\nB: At the ( ____ ).',
    choices: ['kitchen', 'station', 'classroom', 'garden'],
    answer: 1,
    explanation: 'station',
  },
  {
    id: 'vocab-mc-5-035',
    prompt: 'My grandfather is seventy years ( ____ ).',
    choices: ['tall', 'long', 'old', 'big'],
    answer: 2,
    explanation: 'old',
  },
  {
    id: 'vocab-mc-5-036',
    prompt: 'A: Do you ( ____ ) TV after dinner?\nB: Yes, sometimes.',
    choices: ['eat', 'talk', 'listen', 'watch'],
    answer: 3,
    explanation: 'watch',
  },
  {
    id: 'vocab-mc-5-037',
    prompt: 'A: What is your favorite ( ____ )?\nB: Basketball.',
    choices: ['sport', 'month', 'fruit', 'color'],
    answer: 0,
    explanation: 'sport',
  },
  {
    id: 'vocab-mc-5-038',
    prompt: 'I have a new bike. I ( ____ ) it to school every day.',
    choices: ['read', 'ride', 'wash', 'sing'],
    answer: 1,
    explanation: 'ride',
  },
  {
    id: 'vocab-mc-5-039',
    prompt: 'A: Where is Amy?\nB: She is ( ____ ) her room now.',
    choices: ['eating', 'playing', 'cleaning', 'drinking'],
    answer: 2,
    explanation: 'cleaning',
  },
  {
    id: 'vocab-mc-5-040',
    prompt: 'My family eats dinner ( ____ ) six thirty.',
    choices: ['from', 'of', 'by', 'at'],
    answer: 3,
    explanation: 'at',
  },
  {
    id: 'vocab-mc-5-041',
    prompt: 'A: Is your father at home?\nB: No. He is at ( ____ ).',
    choices: ['work', 'apple', 'summer', 'music'],
    answer: 0,
    explanation: 'work',
  },
  {
    id: 'vocab-mc-5-042',
    prompt: 'It is raining. Take your ( ____ ) with you.',
    choices: ['dictionary', 'umbrella', 'sandwich', 'camera'],
    answer: 1,
    explanation: 'umbrella',
  },
  {
    id: 'vocab-mc-5-043',
    prompt: 'A: Can your sister ( ____ ) a bike?\nB: Yes, she can.',
    choices: ['eat', 'wash', 'ride', 'read'],
    answer: 2,
    explanation: 'ride',
  },
  {
    id: 'vocab-mc-5-044',
    prompt: 'Tom is from Canada, but he lives ( ____ ) Japan now.',
    choices: ['to', 'of', 'on', 'in'],
    answer: 3,
    explanation: 'in',
  },
  {
    id: 'vocab-mc-5-045',
    prompt: 'A: What do you want for lunch?\nB: A ( ____ ), please.',
    choices: ['sandwich', 'pencil', 'station', 'teacher'],
    answer: 0,
    explanation: 'sandwich',
  },
];
type Grade5VocabJaQuestion = {
  id: string;
  prompt: string;
  accepted: string[];
  partialAnswers?: {
    answers: string[];
    credit: number;
  }[];
  explanation: string;
};

const grade5VocabJa: Grade5VocabJaQuestion[] = [
  {
    id: 'vocab-ja-5-001',
    prompt: 'morning',
    accepted: ['朝', 'あさ', '午前', 'ごぜん'],
    explanation: 'morning：朝、午前',
  },
  {
    id: 'vocab-ja-5-002',
    prompt: 'library',
    accepted: ['図書館', 'としょかん'],
    explanation: 'library：図書館',
  },
  {
    id: 'vocab-ja-5-003',
    prompt: 'beautiful',
    accepted: ['美しい', 'うつくしい', 'きれいな', '綺麗な'],
    partialAnswers: [
      { answers: ['きれい', '綺麗'], credit: 0.8 },
    ],
    explanation: 'beautiful：美しい、きれいな',
  },
  {
    id: 'vocab-ja-5-004',
    prompt: 'teacher',
    accepted: ['先生', '教師', 'せんせい', 'きょうし'],
    explanation: 'teacher：先生、教師',
  },
  {
    id: 'vocab-ja-5-005',
    prompt: 'usually',
    accepted: ['大抵', 'たいてい', '普通は', 'ふつうは', '通常は', 'つうじょうは'],
    partialAnswers: [
      { answers: ['普通', 'ふつう', '通常'], credit: 0.7 },
    ],
    explanation: 'usually：たいてい、普通は',
  },
  {
    id: 'vocab-ja-5-006',
    prompt: 'hospital',
    accepted: ['病院', 'びょういん'],
    explanation: 'hospital：病院',
  },
  {
    id: 'vocab-ja-5-007',
    prompt: 'to swim',
    accepted: ['泳ぐ', 'およぐ'],
    explanation: 'to swim：泳ぐ',
  },
  {
    id: 'vocab-ja-5-008',
    prompt: 'window',
    accepted: ['窓', 'まど'],
    explanation: 'window：窓',
  },
  {
    id: 'vocab-ja-5-009',
    prompt: 'hungry',
    accepted: ['お腹がすいた', 'お腹が空いた','おなかが空いた', 'おなかがすいた', 'くうふくの', '空腹の', 'くうふくな', '空腹な'],
    partialAnswers: [ 
      { answers: ['空腹', 'お腹がすく', 'おなかがすく'], credit: 0.8 },
    ],
    explanation: 'hungry：お腹がすいた、空腹の',
  },
  {
    id: 'vocab-ja-5-010',
    prompt: 'station',
    accepted: ['駅', 'えき'],
    explanation: 'station：駅',
  },
  {
    id: 'vocab-ja-5-011',
    prompt: 'to listen',
    accepted: ['聞く', '聴く', 'きく'],
    explanation: 'to listen：聞く、聴く',
  },
  {
    id: 'vocab-ja-5-012',
    prompt: 'Saturday',
    accepted: ['土曜日', 'どようび', 'どよう', '土曜'],
    partialAnswers: [
      { answers: ['土'], credit: 0.5 },
    ],
    explanation: 'Saturday：土曜日',
  },
  {
    id: 'vocab-ja-5-013',
    prompt: 'family',
    accepted: ['家族', 'かぞく'],
    explanation: 'family：家族',
  },
  {
    id: 'vocab-ja-5-014',
    prompt: 'to study',
    accepted: ['勉強する', 'べんきょうする', '学ぶ', 'まなぶ'],
    partialAnswers: [
      { answers: ['勉強', 'べんきょう', 'がくしゅう', '学習'], credit: 0.7 },
    ],
    explanation: 'to study：勉強する、学ぶ',
  },
  {
    id: 'vocab-ja-5-015',
    prompt: 'summer',
    accepted: ['夏', 'なつ'],
    explanation: 'summer：夏',
  },
  {
    id: 'vocab-ja-5-016',
    prompt: 'difficult',
    accepted: ['難しい', 'むずかしい'],
    explanation: 'difficult：難しい',
  },
  {
    id: 'vocab-ja-5-017',
    prompt: 'breakfast',
    accepted: ['朝食', '朝ご飯', '朝ごはん', 'あさごはん', 'ちょうしょく'],
    explanation: 'breakfast：朝食、朝ご飯',
  },
  {
    id: 'vocab-ja-5-018',
    prompt: 'to speak',
    accepted: ['話す', 'しゃべる', '喋る', 'はなす'],
    explanation: 'to speak：話す',
  },
  {
    id: 'vocab-ja-5-019',
    prompt: 'country',
    accepted: ['国', 'くに'],
    explanation: 'country：国',
  },
  {
    id: 'vocab-ja-5-020',
    prompt: 'sometimes',
    accepted: ['時々', 'ときどき', 'たまに'],
    explanation: 'sometimes：時々、たまに',
  },
  {
    id: 'vocab-ja-5-021',
    prompt: 'homework',
    accepted: ['宿題', 'しゅくだい'],
    explanation: 'homework：宿題',
  },
  {
    id: 'vocab-ja-5-022',
    prompt: 'to open',
    accepted: ['開ける', '開く', 'ひらく', 'あける'],
    explanation: 'to open：開ける、開く',
  },
  {
    id: 'vocab-ja-5-023',
    prompt: 'friend',
    accepted: ['友達', '友だち', '友人', 'ゆうじん', 'ともだち', 'おともだち', 'お友達', '友', 'お友だち', 'おとも達'],
    explanation: 'friend：友達、友人',
  },
  {
    id: 'vocab-ja-5-024',
    prompt: 'Sunday',
    accepted: ['日曜日', '日曜', 'にちようび', 'にちよう'],
    partialAnswers: [
      { answers: ['日'], credit: 0.5 },
    ],
    explanation: 'Sunday：日曜日',
  },
  {
    id: 'vocab-ja-5-025',
    prompt: 'to write',
    accepted: ['書く', 'かく'],
    explanation: 'to write：(文字を) 書く',
  },
  {
    id: 'vocab-ja-5-026',
    prompt: 'school',
    accepted: ['学校', 'がっこう'],
    explanation: 'school：学校',
  },
  {
    id: 'vocab-ja-5-027',
    prompt: 'early',
    accepted: ['早く', '早い', '早めに', 'はやく', 'はやい', 'はやめに'],
    partialAnswers: [
      { answers: ['早め'], credit: 0.8 },
    ],
    explanation: 'early：早く、早い',
  },
  {
    id: 'vocab-ja-5-028',
    prompt: 'mother',
    accepted: ['母', 'はは', '母親', 'ははおや', '母上', 'ははうえ', '母さん', 'かあさん', 'お母さん', 'おかあさん'],
    explanation: 'mother：母、お母さん',
  },
  {
    id: 'vocab-ja-5-029',
    prompt: 'to watch',
    accepted: ['見る', '観る', 'みる'],
    explanation: 'to watch：見る、観る',
  },
  {
    id: 'vocab-ja-5-030',
    prompt: 'afternoon',
    accepted: ['午後', 'ごご'],
    explanation: 'afternoon：午後',
  },
  {
    id: 'vocab-ja-5-031',
    prompt: 'interesting',
    accepted: ['面白い', 'おもしろい', '興味深い', 'きょうみぶかい'],
    explanation: 'interesting：面白い、興味深い',
  },
  {
    id: 'vocab-ja-5-032',
    prompt: 'brother',
    accepted: ['兄', 'あに', 'お兄ちゃん', 'お兄さん', 'おにいちゃん', '弟', 'おとうと', '兄弟', 'きょうだい'],
    explanation: 'brother：兄、弟、兄弟',
  },
  {
    id: 'vocab-ja-5-033',
    prompt: 'to buy',
    accepted: ['買う', 'かう', '購入する', 'こうにゅうする'],
    partialAnswers: [
      { answers: ['買い物する'], credit: 0.8 },
    ],
    explanation: 'to buy：買う、購入する',
  },
  {
    id: 'vocab-ja-5-034',
    prompt: 'weather',
    accepted: ['天気', 'てんき', '天候', 'てんこう'],
    explanation: 'weather：天気、天候',
  },
  {
    id: 'vocab-ja-5-035',
    prompt: 'always',
    accepted: ['いつも', '常に', 'つねに'],
    explanation: 'always：いつも、常に',
  },
  {
    id: 'vocab-ja-5-036',
    prompt: 'classroom',
    accepted: ['教室', 'きょうしつ'],
    explanation: 'classroom：教室',
  },
  {
    id: 'vocab-ja-5-037',
    prompt: 'to help',
    accepted: ['助ける', 'たすける', '手伝う', 'てつだう'],
    explanation: 'to help：助ける、手伝う',
  },
  {
    id: 'vocab-ja-5-038',
    prompt: 'evening',
    accepted: ['夕方', 'ゆうがた', '晩', 'ばん', '夜', 'よる'],
    explanation: 'evening：夕方、晩',
  },
  {
    id: 'vocab-ja-5-039',
    prompt: 'favorite',
    accepted: ['一番好きな', 'いちばん好きな', 'いちばんすきな', 'お気に入りの', 'おきにいりの'],
    partialAnswers: [
      { answers: ['好きな', 'すきな', 'お気に入り', 'おきにいり'], credit: 0.7 },
    ],
    explanation: 'favorite：一番好きな、お気に入りの',
  },
  {
    id: 'vocab-ja-5-040',
    prompt: 'restaurant',
    accepted: ['レストラン', '飲食店', ],
    partialAnswers: [
      { answers: ['食堂'], credit: 0.7 },
    ],
    explanation: 'restaurant：レストラン、飲食店',
  },
  {
    id: 'vocab-ja-5-041',
    prompt: 'to read',
    accepted: ['読む', 'よむ'],
    explanation: 'to read：読む',
  },
  {
    id: 'vocab-ja-5-042',
    prompt: 'birthday',
    accepted: ['誕生日', 'たんじょうび', '誕じょうび', '誕生び', 'たん生日', '誕じょう日', 'たんじょう日'],
    explanation: 'birthday：誕生日',
  },
  {
    id: 'vocab-ja-5-043',
    prompt: 'to close',
    accepted: ['閉める', '閉じる', 'しめる', 'とじる'],
    explanation: 'to close：閉める、閉じる',
  },
  {
    id: 'vocab-ja-5-044',
    prompt: 'next week',
    accepted: ['来週'],
    partialAnswers: [
      { answers: ['次の週', '次週'], credit: 0.8 },
    ],
    explanation: 'next week：来週',
  },
  {
    id: 'vocab-ja-5-045',
    prompt: 'together',
    accepted: ['一緒に', 'いっしょに'],
    partialAnswers: [
      { answers: ['一緒', 'いっしょ'], credit: 0.8 },
    ],
    explanation: 'together：一緒に',
  },
];
type Grade5ConversationQuestion = {
  id: string;
  dialogue: string;
  prompt: string;
  choices: [string, string, string, string];
  answer: number;
  explanation: string;
};

const grade5Conversation: Grade5ConversationQuestion[] = [
  {
    id: 'conversation-5-001',
    dialogue: 'A: Good morning, Tom.',
    prompt: 'B: ( ____ )',
    choices: ['Good morning, Ms. Green.', 'I am ten years old.', 'It is a book.', 'At school.'],
    answer: 0,
    explanation: '「Good morning.」とあいさつされたので、「Good morning.」と返すのが自然です。',
  },
  {
    id: 'conversation-5-002',
    dialogue: 'A: How are you?',
    prompt: 'B: ( ____ )',
    choices: ['It is Monday.', 'I’m fine, thank you.', 'I like tennis.', 'Yes, I am.'],
    answer: 1,
    explanation: '「How are you?」は「元気ですか？」なので、「I’m fine, thank you.」が自然です。',
  },
  {
    id: 'conversation-5-003',
    dialogue: 'A: What is your name?',
    prompt: 'B: ( ____ )',
    choices: ['I’m twelve.', 'I’m from Japan.', 'My name is Ken.', 'I’m a student.'],
    answer: 2,
    explanation: '名前を聞かれているので、「My name is Ken.」が正解です。',
  },
  {
    id: 'conversation-5-004',
    dialogue: 'A: Thank you very much.',
    prompt: 'B: ( ____ )',
    choices: ['Good night.', 'Excuse me.', 'I’m sorry.', 'You’re welcome.'],
    answer: 3,
    explanation: '「Thank you.」への基本的な返答は「You’re welcome.」です。',
  },
  {
    id: 'conversation-5-005',
    dialogue: 'A: Do you like soccer?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, I do.', 'Yes, I am.', 'Yes, it is.', 'Yes, I can.'],
    answer: 0,
    explanation: '「Do you ...?」への肯定の返答は「Yes, I do.」です。',
  },
  {
    id: 'conversation-5-006',
    dialogue: 'A: Where is my bag?',
    prompt: 'B: ( ____ )',
    choices: ['It is blue.', 'It is under the chair.', 'It is mine.', 'It is big.'],
    answer: 1,
    explanation: '「Where」は場所を聞くので、「under the chair」が答えになります。',
  },
  {
    id: 'conversation-5-007',
    dialogue: 'A: What time is it?',
    prompt: 'B: ( ____ )',
    choices: ['It is sunny.', 'It is Sunday.', 'It is three o’clock.', 'It is mine.'],
    answer: 2,
    explanation: '時刻を聞かれているので、「It is three o’clock.」が正解です。',
  },
  {
    id: 'conversation-5-008',
    dialogue: 'A: Can you swim?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, I do.', 'Yes, I am.', 'Yes, it is.', 'Yes, I can.'],
    answer: 3,
    explanation: '「Can you ...?」への肯定の返答は「Yes, I can.」です。',
  },
  {
    id: 'conversation-5-009',
    dialogue: 'A: What do you want for lunch?',
    prompt: 'B: ( ____ )',
    choices: ['I want a sandwich.', 'I play tennis.', 'I have a sister.', 'I go to school.'],
    answer: 0,
    explanation: '昼食に何がほしいか聞かれているので、食べ物を答えるのが自然です。',
  },
  {
    id: 'conversation-5-010',
    dialogue: 'A: Whose pencil is this?',
    prompt: 'B: ( ____ )',
    choices: ['It is red.', 'It is mine.', 'It is long.', 'It is here.'],
    answer: 1,
    explanation: '「Whose」は「だれの」を聞くので、「It is mine.」が正解です。',
  },
  {
    id: 'conversation-5-011',
    dialogue: 'A: Where do you live?',
    prompt: 'B: ( ____ )',
    choices: ['I like music.', 'I am thirteen.', 'I live in Chiba.', 'I have a dog.'],
    answer: 2,
    explanation: '住んでいる場所を聞かれているので、「I live in Chiba.」が自然です。',
  },
  {
    id: 'conversation-5-012',
    dialogue: 'A: Happy birthday, Anna!',
    prompt: 'B: ( ____ )',
    choices: ['Good morning.', 'See you.', 'I’m sorry.', 'Thank you!'],
    answer: 3,
    explanation: '誕生日を祝ってもらったので、「Thank you!」と答えるのが自然です。',
  },
  {
    id: 'conversation-5-013',
    dialogue: 'A: What sport do you like?',
    prompt: 'B: ( ____ )',
    choices: ['I like basketball.', 'I have a ball.', 'I am in the park.', 'I go on Sunday.'],
    answer: 0,
    explanation: '好きなスポーツを聞かれているので、「I like basketball.」が正解です。',
  },
  {
    id: 'conversation-5-014',
    dialogue: 'A: Is this your book?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, I do.', 'Yes, it is.', 'Yes, I can.', 'Yes, I have.'],
    answer: 1,
    explanation: '「Is this ...?」への肯定の返答は「Yes, it is.」です。',
  },
  {
    id: 'conversation-5-015',
    dialogue: 'A: Who is that girl?',
    prompt: 'B: ( ____ )',
    choices: ['She is at school.', 'She is twelve.', 'She is my sister.', 'She likes cats.'],
    answer: 2,
    explanation: '「Who」は誰なのかを聞いているので、「She is my sister.」が自然です。',
  },
  {
    id: 'conversation-5-016',
    dialogue: 'A: See you tomorrow.',
    prompt: 'B: ( ____ )',
    choices: ['Good morning.', 'Thank you.', 'I’m sorry.', 'See you.'],
    answer: 3,
    explanation: '別れのあいさつ「See you tomorrow.」には「See you.」と返せます。',
  },
  {
    id: 'conversation-5-017',
    dialogue: 'A: What do you have in your bag?',
    prompt: 'B: ( ____ )',
    choices: ['I have two books.', 'It is on the desk.', 'I like my bag.', 'It is black.'],
    answer: 0,
    explanation: 'バッグの中に何があるか聞かれているので、「I have two books.」が正解です。',
  },
  {
    id: 'conversation-5-018',
    dialogue: 'A: When is your birthday?',
    prompt: 'B: ( ____ )',
    choices: ['I am eleven.', 'It is in May.', 'I like cake.', 'It is Tuesday.'],
    answer: 1,
    explanation: '誕生日がいつか聞かれているので、「It is in May.」が自然です。',
  },
  {
    id: 'conversation-5-019',
    dialogue: 'A: What is your favorite subject?',
    prompt: 'B: ( ____ )',
    choices: ['At nine o’clock.', 'In my classroom.', 'I like English best.', 'With my friend.'],
    answer: 2,
    explanation: '好きな教科を聞かれているので、「I like English best.」が正解です。',
  },
  {
    id: 'conversation-5-020',
    dialogue: 'A: Good night, Dad.',
    prompt: 'B: ( ____ )',
    choices: ['Good afternoon.', 'Hello.', 'Good morning.', 'Good night.'],
    answer: 3,
    explanation: '「Good night.」には「Good night.」と返すのが自然です。',
  },
  {
    id: 'conversation-5-021',
    dialogue: 'A: Would you like some juice?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, please.', 'Yes, I do.', 'Yes, I am.', 'Yes, it does.'],
    answer: 0,
    explanation: '飲み物を勧められて受けるときは「Yes, please.」が自然です。',
  },
  {
    id: 'conversation-5-022',
    dialogue: 'A: How old is your brother?',
    prompt: 'B: ( ____ )',
    choices: ['He is tall.', 'He is fifteen.', 'He is my brother.', 'He is at home.'],
    answer: 1,
    explanation: '年齢を聞かれているので、「He is fifteen.」が正解です。',
  },
  {
    id: 'conversation-5-023',
    dialogue: 'A: What are you doing?',
    prompt: 'B: ( ____ )',
    choices: ['I like books.', 'I have a book.', 'I’m reading a book.', 'I read every day.'],
    answer: 2,
    explanation: '今何をしているか聞かれているので、「I’m reading a book.」が自然です。',
  },
  {
    id: 'conversation-5-024',
    dialogue: 'A: I’m sorry.',
    prompt: 'B: ( ____ )',
    choices: ['Good evening.', 'Thank you.', 'Nice to meet you.', 'That’s OK.'],
    answer: 3,
    explanation: '謝られたときの基本的な返答として「That’s OK.」が使えます。',
  },
  {
    id: 'conversation-5-025',
    dialogue: 'A: What day is it today?',
    prompt: 'B: ( ____ )',
    choices: ['It is Friday.', 'It is five.', 'It is October.', 'It is cold.'],
    answer: 0,
    explanation: '曜日を聞かれているので、「It is Friday.」が正解です。',
  },
  {
    id: 'conversation-5-026',
    dialogue: 'A: How do you go to school?',
    prompt: 'B: ( ____ )',
    choices: ['At eight.', 'By bus.', 'With lunch.', 'On Monday.'],
    answer: 1,
    explanation: '学校へ行く方法を聞かれているので、「By bus.」が自然です。',
  },
  {
    id: 'conversation-5-027',
    dialogue: 'A: Where is your mother?',
    prompt: 'B: ( ____ )',
    choices: ['She likes cooking.', 'She has a car.', 'She is in the kitchen.', 'She is a teacher.'],
    answer: 2,
    explanation: '「Where」は場所を聞いているので、「She is in the kitchen.」が正解です。',
  },
  {
    id: 'conversation-5-028',
    dialogue: 'A: Let’s play tennis after school.',
    prompt: 'B: ( ____ )',
    choices: ['It is a racket.', 'I am at school.', 'It is Monday.', 'That sounds good.'],
    answer: 3,
    explanation: '誘いに賛成するときの返答として「That sounds good.」が自然です。',
  },
  {
    id: 'conversation-5-029',
    dialogue: 'A: What color is your bike?',
    prompt: 'B: ( ____ )',
    choices: ['It is blue.', 'It is new.', 'It is mine.', 'It is outside.'],
    answer: 0,
    explanation: '色を聞かれているので、「It is blue.」が正解です。',
  },
  {
    id: 'conversation-5-030',
    dialogue: 'A: Do you have any brothers?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, I am.', 'Yes, I have one.', 'Yes, I can.', 'Yes, it is.'],
    answer: 1,
    explanation: '兄弟がいるか聞かれているので、「Yes, I have one.」が自然です。',
  },
  {
    id: 'conversation-5-031',
    dialogue: 'A: What does your father do?',
    prompt: 'B: ( ____ )',
    choices: ['He is at work.', 'He likes music.', 'He is a teacher.', 'He is forty.'],
    answer: 2,
    explanation: '「What does your father do?」は職業を聞く表現なので、「He is a teacher.」が正解です。',
  },
  {
    id: 'conversation-5-032',
    dialogue: 'A: Have a nice weekend!',
    prompt: 'B: ( ____ )',
    choices: ['I’m eleven.', 'It is Saturday.', 'I have a dog.', 'Thanks. You too!'],
    answer: 3,
    explanation: '「よい週末を」と言われたので、「Thanks. You too!」が自然です。',
  },
  {
    id: 'conversation-5-033',
    dialogue: 'A: What do you do after school?',
    prompt: 'B: ( ____ )',
    choices: ['I play soccer.', 'I am a student.', 'It is after three.', 'I go by train.'],
    answer: 0,
    explanation: '放課後に何をするか聞かれているので、「I play soccer.」が正解です。',
  },
  {
    id: 'conversation-5-034',
    dialogue: 'A: How is the weather today?',
    prompt: 'B: ( ____ )',
    choices: ['It is Sunday.', 'It is sunny.', 'It is six.', 'It is summer.'],
    answer: 1,
    explanation: '天気を聞かれているので、「It is sunny.」が正解です。',
  },
  {
    id: 'conversation-5-035',
    dialogue: 'A: What is that?',
    prompt: 'B: ( ____ )',
    choices: ['Yes, it is.', 'It is there.', 'It is my new camera.', 'I like pictures.'],
    answer: 2,
    explanation: '「What is that?」は物が何かを聞いているので、「It is my new camera.」が自然です。',
  },
  {
    id: 'conversation-5-036',
    dialogue: 'A: Can I use your pen?',
    prompt: 'B: ( ____ )',
    choices: ['It is red.', 'I have two.', 'I can write.', 'Sure. Here you are.'],
    answer: 3,
    explanation: 'ペンを借りてもよいか聞かれているので、「Sure. Here you are.」が自然です。',
  },
  {
    id: 'conversation-5-037',
    dialogue: 'A: What do you want to do this Sunday?',
    prompt: 'B: ( ____ )',
    choices: ['I want to go shopping.', 'It is Sunday.', 'I went yesterday.', 'I have two bags.'],
    answer: 0,
    explanation: '日曜日に何をしたいか聞かれているので、「I want to go shopping.」が正解です。',
  },
  {
    id: 'conversation-5-038',
    dialogue: 'A: Is your sister at home?',
    prompt: 'B: ( ____ )',
    choices: ['No, she does not.', 'No, she is not.', 'No, she cannot.', 'No, she has not.'],
    answer: 1,
    explanation: '「Is your sister ...?」への否定の返答は「No, she is not.」です。',
  },
  {
    id: 'conversation-5-039',
    dialogue: 'A: Which do you like, cats or dogs?',
    prompt: 'B: ( ____ )',
    choices: ['I have two.', 'They are cute.', 'I like dogs.', 'It is my dog.'],
    answer: 2,
    explanation: '猫と犬のどちらが好きか聞かれているので、「I like dogs.」が自然です。',
  },
  {
    id: 'conversation-5-040',
    dialogue: 'A: Please open the window.',
    prompt: 'B: ( ____ )',
    choices: ['It is a window.', 'I like this room.', 'The door is blue.', 'OK.'],
    answer: 3,
    explanation: '「窓を開けてください」というお願いへの返答なので、「OK.」が自然です。',
  },
  {
    id: 'conversation-5-041',
    dialogue: 'A: Where are you going?',
    prompt: 'B: ( ____ )',
    choices: ['I’m going to the library.', 'I’m reading a book.', 'I like the library.', 'I go on Saturday.'],
    answer: 0,
    explanation: 'どこへ行くのか聞かれているので、「I’m going to the library.」が正解です。',
  },
  {
    id: 'conversation-5-042',
    dialogue: 'A: Do you want some cake?',
    prompt: 'B: ( ____ )',
    choices: ['It is a cake.', 'No, thank you.', 'I have a cake.', 'It is sweet.'],
    answer: 1,
    explanation: '食べ物を勧められて断るときは「No, thank you.」が自然です。',
  },
  {
    id: 'conversation-5-043',
    dialogue: 'A: What time do you get up?',
    prompt: 'B: ( ____ )',
    choices: ['Every morning.', 'At home.', 'At seven o’clock.', 'On my bed.'],
    answer: 2,
    explanation: '起きる時刻を聞かれているので、「At seven o’clock.」が正解です。',
  },
  {
    id: 'conversation-5-044',
    dialogue: 'A: Nice to meet you, Yuki.',
    prompt: 'B: ( ____ )',
    choices: ['Good night.', 'See you tomorrow.', 'Thank you for lunch.', 'Nice to meet you, too.'],
    answer: 3,
    explanation: '初対面のあいさつには「Nice to meet you, too.」と返すのが自然です。',
  },
  {
    id: 'conversation-5-045',
    dialogue: 'A: Why are you happy?',
    prompt: 'B: ( ____ )',
    choices: ['Because it is my birthday.', 'At my house.', 'With my sister.', 'At three o’clock.'],
    answer: 0,
    explanation: '「Why」は理由を聞くので、「Because ...」で答えるのが自然です。',
  },
];
export const questionBank: Question[] = [
  ...grade5VocabMc.map(q => ({
    ...q,
    level: '5' as const,
    mode: 'vocabulary-mc' as const,
    active: true,
  })),

    ...grade5VocabJa.map(q => ({
    ...q,
    level: '5' as const,
    mode: 'vocabulary-ja' as const,
    active: true,
  })),

  ...grade5Conversation.map(q => ({
    ...q,
    level: '5' as const,
    mode: 'conversation' as const,
    active: true,
  })),
];
function rotatedOptions(items:string[],seed:number):{choices:[string,string,string,string];answer:number}{
 const shift=seed%4,rotated=[...items.slice(shift),...items.slice(0,shift)];
 return {choices:rotated as [string,string,string,string],answer:(4-shift)%4};
}
for(let i=0;i<levels.length;i++){
 const level=levels[i],n=String(i+1).padStart(3,'0');
 // Grade 5 vocabulary multiple-choice seeds were removed for the finalized replacement bank.
 if(i>0){
  const vocabIndex=(i-1)*2;
  const [,choices,prompt,,explanation]=vocabs[vocabIndex]; questionBank.push({id:`vocab-mc-${level}-${n}`,level,mode:'vocabulary-mc',active:true,prompt,...rotatedOptions(choices,i+1),explanation});
  const [,choices2,prompt2,,explanation2]=vocabs[vocabIndex+1]; questionBank.push({id:`vocab-mc-${level}-${String(i+1).padStart(3,'0')}-b`,level,mode:'vocabulary-mc',active:true,prompt:prompt2,...rotatedOptions(choices2,i+2),explanation:explanation2});
 }
 if (i > 0) {
  const [word,meaning,accepted]=ja[i*2];
  questionBank.push({
    id:`vocab-ja-${level}-00${i+1}`,
    level,
    mode:'vocabulary-ja',
    active:true,
    prompt:word,
    accepted,
    explanation:meaning
  });

  const [word2,meaning2,accepted2]=ja[i*2+1];
  questionBank.push({
    id:`vocab-ja-${level}-00${i+1}-b`,
    level,
    mode:'vocabulary-ja',
    active:true,
    prompt:word2,
    accepted:accepted2,
    explanation:meaning2
  });
}
 for(let j=0;j<2;j++){
  const r=reading[i*2+j]; questionBank.push({id:`reading-${level}-00${j+1}`,level,mode:'reading',active:true,passage:r[0],prompt:r[1],...rotatedOptions([r[6],r[3],r[4],r[5]],i+j)});
  if (i > 0) {   const c=conversations[i*2+j];   questionBank.push({     id:`conversation-${level}-00${j+1}`,     level,     mode:'conversation',     active:true,     dialogue:c[0],     prompt:c[1],     ...rotatedOptions([c[6],c[3],c[4],c[5]],i+j+1)   }); }
 }
}

