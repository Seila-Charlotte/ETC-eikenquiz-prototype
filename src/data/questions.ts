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
type Grade5ReadingQuestion = {
  id: string;
  passage: string;
  prompt: string;
  choices: [string, string, string, string];
  answer: number;
  explanation: string;
};

const grade5Reading: Grade5ReadingQuestion[] = [
  {
    id: 'reading-5-001',
    passage: 'Ken likes animals. He has a small brown dog. Its name is Coco. Ken walks Coco every morning.',
    prompt: 'What does Ken do every morning?',
    choices: ['He walks his dog.', 'He reads a book.', 'He plays tennis.', 'He cooks breakfast.'],
    answer: 0,
    explanation: '本文の「Ken walks Coco every morning.」から、Kenは毎朝犬の散歩をするとわかります。',
  },
  {
    id: 'reading-5-002',
    passage: 'Mika gets up at seven every morning. She eats breakfast with her family. Then she goes to school by bus.',
    prompt: 'How does Mika go to school?',
    choices: ['By train.', 'By bus.', 'By bike.', 'On foot.'],
    answer: 1,
    explanation: '本文に「she goes to school by bus」とあります。',
  },
  {
    id: 'reading-5-003',
    passage: 'Tom has two sisters. Anna is twelve and Lisa is eight. Tom is ten years old.',
    prompt: 'How old is Tom?',
    choices: ['Eight.', 'Nine.', 'Ten.', 'Twelve.'],
    answer: 2,
    explanation: '本文の「Tom is ten years old.」から10歳だとわかります。',
  },
  {
    id: 'reading-5-004',
    passage: 'It is Sunday. Yuki is at the park with her father. They are playing tennis. Yuki’s mother is at home.',
    prompt: 'Where is Yuki?',
    choices: ['At school.', 'At home.', 'At a store.', 'At the park.'],
    answer: 3,
    explanation: '本文に「Yuki is at the park」とあります。',
  },
  {
    id: 'reading-5-005',
    passage: 'Amy likes music. She plays the piano after school. On Saturdays, she plays the guitar with her brother.',
    prompt: 'What does Amy play after school?',
    choices: ['The piano.', 'The guitar.', 'Soccer.', 'Tennis.'],
    answer: 0,
    explanation: '本文の「She plays the piano after school.」が答えです。',
  },
  {
    id: 'reading-5-006',
    passage: 'Hi, Ben. I have your English book. I will bring it to school tomorrow. See you! — Sam',
    prompt: 'What does Sam have?',
    choices: ['Ben’s bag.', 'Ben’s English book.', 'Ben’s lunch.', 'Ben’s pencil.'],
    answer: 1,
    explanation: 'Samは「I have your English book.」と言っています。',
  },
  {
    id: 'reading-5-007',
    passage: 'Mai’s favorite subject is science. She also likes English, but she does not like math.',
    prompt: 'What is Mai’s favorite subject?',
    choices: ['English.', 'Math.', 'Science.', 'Music.'],
    answer: 2,
    explanation: '最初の文に「Mai’s favorite subject is science.」とあります。',
  },
  {
    id: 'reading-5-008',
    passage: 'SCHOOL LIBRARY\nMonday–Friday: 8:00–5:00\nSaturday: 9:00–12:00\nSunday: Closed',
    prompt: 'When is the library closed?',
    choices: ['Monday.', 'Friday.', 'Saturday.', 'Sunday.'],
    answer: 3,
    explanation: '案内の「Sunday: Closed」から日曜日は閉館だとわかります。',
  },
  {
    id: 'reading-5-009',
    passage: 'Jack is hungry. There are apples and bananas on the table. Jack does not like bananas, so he eats an apple.',
    prompt: 'What does Jack eat?',
    choices: ['An apple.', 'A banana.', 'Bread.', 'Cake.'],
    answer: 0,
    explanation: '本文に「he eats an apple」とあります。',
  },
  {
    id: 'reading-5-010',
    passage: 'Dear Emi,\nLet’s go shopping on Saturday. I want to buy a birthday present for my mother.\n— Kate',
    prompt: 'Why does Kate want to go shopping?',
    choices: ['To buy a new bag.', 'To buy a present.', 'To meet her teacher.', 'To eat lunch.'],
    answer: 1,
    explanation: 'Kateはお母さんへの誕生日プレゼントを買いたいと言っています。',
  },
  {
    id: 'reading-5-011',
    passage: 'David gets home at four. He does his homework first. At five, he watches TV with his sister.',
    prompt: 'What does David do first after he gets home?',
    choices: ['He watches TV.', 'He eats dinner.', 'He does his homework.', 'He plays soccer.'],
    answer: 2,
    explanation: '本文の「He does his homework first.」がポイントです。',
  },
  {
    id: 'reading-5-012',
    passage: 'NOTICE\nSoccer practice is not in the park today. Please come to the school gym at 4:00.',
    prompt: 'Where is soccer practice today?',
    choices: ['At the station.', 'In the park.', 'At the library.', 'In the school gym.'],
    answer: 3,
    explanation: '案内に「come to the school gym」とあります。',
  },
  {
    id: 'reading-5-013',
    passage: 'Lucy has a cat named Mimi. Mimi is white and has blue eyes. She likes sleeping on Lucy’s bed.',
    prompt: 'What color is Mimi?',
    choices: ['White.', 'Brown.', 'Black.', 'Blue.'],
    answer: 0,
    explanation: '本文に「Mimi is white」とあります。',
  },
  {
    id: 'reading-5-014',
    passage: 'My name is Kota. I play basketball on Tuesdays and Thursdays. On Wednesdays, I study English with my friend.',
    prompt: 'What does Kota do on Wednesdays?',
    choices: ['He plays basketball.', 'He studies English.', 'He plays baseball.', 'He goes shopping.'],
    answer: 1,
    explanation: '本文に「On Wednesdays, I study English」とあります。',
  },
  {
    id: 'reading-5-015',
    passage: 'Sara wants a new notebook. She goes to a store after school. The notebook is 300 yen, and she buys it.',
    prompt: 'How much is the notebook?',
    choices: ['100 yen.', '200 yen.', '300 yen.', '400 yen.'],
    answer: 2,
    explanation: '本文に「The notebook is 300 yen」とあります。',
  },
  {
    id: 'reading-5-016',
    passage: 'Hi, Mom. I’m at the library with Keiko. We will study here until five. I will be home at six. — Hana',
    prompt: 'What time will Hana be home?',
    choices: ['At three.', 'At four.', 'At five.', 'At six.'],
    answer: 3,
    explanation: 'Hanaは「I will be home at six.」と書いています。',
  },
  {
    id: 'reading-5-017',
    passage: 'Nick likes summer because he can swim in the sea. His sister likes winter because she loves snow.',
    prompt: 'Why does Nick like summer?',
    choices: ['He can swim in the sea.', 'He can see snow.', 'He can play the piano.', 'He can study English.'],
    answer: 0,
    explanation: '本文の「because he can swim in the sea」が理由です。',
  },
  {
    id: 'reading-5-018',
    passage: 'CAFE MENU\nSandwich: 500 yen\nCake: 400 yen\nOrange juice: 300 yen\nTea: 250 yen',
    prompt: 'How much is the cake?',
    choices: ['250 yen.', '400 yen.', '500 yen.', '300 yen.'],
    answer: 1,
    explanation: 'メニューに「Cake: 400 yen」とあります。',
  },
  {
    id: 'reading-5-019',
    passage: 'Mary goes to bed at ten on school nights. On Friday and Saturday nights, she goes to bed at eleven.',
    prompt: 'What time does Mary go to bed on Saturday night?',
    choices: ['At nine.', 'At ten.', 'At eleven.', 'At twelve.'],
    answer: 2,
    explanation: '金曜日と土曜日は11時に寝ると書かれています。',
  },
  {
    id: 'reading-5-020',
    passage: 'To: Mike\nI cannot play baseball today because it is raining. Let’s play a video game at my house instead.\n— Leo',
    prompt: 'Why can’t Leo play baseball?',
    choices: ['He is tired.', 'He has homework.', 'He is at school.', 'It is raining.'],
    answer: 3,
    explanation: 'Leoは「because it is raining」と理由を説明しています。',
  },
  {
    id: 'reading-5-021',
    passage: 'Nina’s father works at a hospital. Her mother is a teacher. She teaches English at Nina’s school.',
    prompt: 'What does Nina’s mother teach?',
    choices: ['English.', 'Science.', 'Music.', 'Math.'],
    answer: 0,
    explanation: '本文に「She teaches English」とあります。',
  },
  {
    id: 'reading-5-022',
    passage: 'Hi, Lisa. Your lunch is in the kitchen. There is a sandwich and some fruit in the blue box. — Mom',
    prompt: 'Where is Lisa’s lunch?',
    choices: ['In her room.', 'In the kitchen.', 'At school.', 'In the car.'],
    answer: 1,
    explanation: 'メッセージに「Your lunch is in the kitchen.」とあります。',
  },
  {
    id: 'reading-5-023',
    passage: 'Peter has a new bike. He rides it to the park every Saturday. His friend John meets him there at ten.',
    prompt: 'Who meets Peter at the park?',
    choices: ['His father.', 'His brother.', 'John.', 'His teacher.'],
    answer: 2,
    explanation: '本文に「His friend John meets him there」とあります。',
  },
  {
    id: 'reading-5-024',
    passage: 'MUSEUM\nOpen: 10:00 a.m.–5:00 p.m.\nAdults: 800 yen\nChildren: 400 yen\nClosed on Mondays',
    prompt: 'What time does the museum open?',
    choices: ['At 5:00 a.m.', 'At 8:00 a.m.', 'At 4:00 p.m.', 'At 10:00 a.m.'],
    answer: 3,
    explanation: '案内に「Open: 10:00 a.m.–5:00 p.m.」とあります。',
  },
  {
    id: 'reading-5-025',
    passage: 'Taro and his family are going to the zoo tomorrow. Taro wants to see the elephants. His little sister wants to see the monkeys.',
    prompt: 'What does Taro want to see?',
    choices: ['The elephants.', 'The monkeys.', 'The birds.', 'The lions.'],
    answer: 0,
    explanation: '本文に「Taro wants to see the elephants.」とあります。',
  },
  {
    id: 'reading-5-026',
    passage: 'Hi, Jane. The movie starts at two, so let’s meet in front of the station at one thirty. — Emma',
    prompt: 'What time will Jane and Emma meet?',
    choices: ['At one.', 'At one thirty.', 'At two.', 'At two thirty.'],
    answer: 1,
    explanation: 'Emmaは「meet ... at one thirty」と書いています。',
  },
  {
    id: 'reading-5-027',
    passage: 'Alex is from Canada, but he lives in Japan now. He studies Japanese at school and speaks English with his parents.',
    prompt: 'What does Alex study at school?',
    choices: ['English.', 'French.', 'Japanese.', 'Chinese.'],
    answer: 2,
    explanation: '本文に「He studies Japanese at school」とあります。',
  },
  {
    id: 'reading-5-028',
    passage: 'SCHOOL MUSIC CLUB\nPractice: Tuesday and Friday\nTime: 4:00–5:30\nPlace: Music Room',
    prompt: 'Where does the music club practice?',
    choices: ['In the gym.', 'In the library.', 'In Room 4.', 'In the music room.'],
    answer: 3,
    explanation: '案内の「Place: Music Room」が答えです。',
  },
  {
    id: 'reading-5-029',
    passage: 'Emily loves cooking. On Sundays, she makes lunch with her grandmother. Today they are making curry.',
    prompt: 'Who cooks with Emily on Sundays?',
    choices: ['Her grandmother.', 'Her mother.', 'Her sister.', 'Her friend.'],
    answer: 0,
    explanation: '本文に「she makes lunch with her grandmother」とあります。',
  },
  {
    id: 'reading-5-030',
    passage: 'Dear Ken,\nThank you for the birthday present. The blue T-shirt is very nice. I will wear it to the picnic on Sunday.\n— Joe',
    prompt: 'What did Ken give Joe?',
    choices: ['A blue bag.', 'A blue T-shirt.', 'A book.', 'A soccer ball.'],
    answer: 1,
    explanation: 'Joeが「The blue T-shirt is very nice.」とプレゼントについて書いています。',
  },
  {
    id: 'reading-5-031',
    passage: 'Rina usually eats toast and eggs for breakfast. Today there are no eggs, so she eats toast and a banana.',
    prompt: 'What does Rina eat today?',
    choices: ['Eggs and a banana.', 'Eggs and toast.', 'Toast and a banana.', 'Toast and cake.'],
    answer: 2,
    explanation: '本文に「she eats toast and a banana」とあります。',
  },
  {
    id: 'reading-5-032',
    passage: 'NOTICE\nThe school bus will leave at 8:15 tomorrow morning. Please be at school by 8:00.',
    prompt: 'What time should students be at school?',
    choices: ['7:15.', '8:15.', '8:30.', '8:00.'],
    answer: 3,
    explanation: '案内に「Please be at school by 8:00.」とあります。',
  },
  {
    id: 'reading-5-033',
    passage: 'Chris wants to be a doctor. He likes science and studies it every day. His brother wants to be a cook.',
    prompt: 'What does Chris want to be?',
    choices: ['A doctor.', 'A cook.', 'A teacher.', 'A singer.'],
    answer: 0,
    explanation: '本文の最初に「Chris wants to be a doctor.」とあります。',
  },
  {
    id: 'reading-5-034',
    passage: 'To: Dad\nPlease buy some milk on your way home. We have bread, but we do not have any milk for breakfast tomorrow.\n— Aya',
    prompt: 'What does Aya want her father to buy?',
    choices: ['Bread.', 'Milk.', 'Juice.', 'Eggs.'],
    answer: 1,
    explanation: 'Ayaは「Please buy some milk」と頼んでいます。',
  },
  {
    id: 'reading-5-035',
    passage: 'Ben usually plays soccer after school, but today he has a lot of homework. He goes straight home.',
    prompt: 'Why does Ben go straight home today?',
    choices: ['He is sick.', 'It is raining.', 'He has a lot of homework.', 'He does not like soccer.'],
    answer: 2,
    explanation: '本文に「today he has a lot of homework」とあります。',
  },
  {
    id: 'reading-5-036',
    passage: 'SWIMMING POOL\nMorning: 9:00–12:00\nAfternoon: 1:00–6:00\nPlease do not eat near the pool.',
    prompt: 'What must people NOT do near the pool?',
    choices: ['Swim.', 'Talk.', 'Sit.', 'Eat.'],
    answer: 3,
    explanation: '案内の「Please do not eat near the pool.」が答えです。',
  },
  {
    id: 'reading-5-037',
    passage: 'Sophie is visiting her aunt this weekend. Her aunt lives near the sea. Sophie wants to swim and take pictures there.',
    prompt: 'Where does Sophie’s aunt live?',
    choices: ['Near the sea.', 'Near Sophie’s school.', 'In the mountains.', 'Next to a station.'],
    answer: 0,
    explanation: '本文に「Her aunt lives near the sea.」とあります。',
  },
  {
    id: 'reading-5-038',
    passage: 'Hi, Mark. I’m having a party at my house this Saturday. It starts at three. Please bring your favorite game! — Paul',
    prompt: 'When does Paul’s party start?',
    choices: ['At two.', 'At three.', 'At four.', 'At five.'],
    answer: 1,
    explanation: 'メッセージに「It starts at three.」とあります。',
  },
  {
    id: 'reading-5-039',
    passage: 'Meg has English class on Monday and Thursday. She has music class on Tuesday. Friday is her favorite day because she has art.',
    prompt: 'What class does Meg have on Tuesday?',
    choices: ['English.', 'Art.', 'Music.', 'Science.'],
    answer: 2,
    explanation: '本文に「She has music class on Tuesday.」とあります。',
  },
  {
    id: 'reading-5-040',
    passage: 'Tom is at a restaurant with his family. His father orders curry. His mother orders pasta. Tom wants a hamburger.',
    prompt: 'What does Tom want?',
    choices: ['Curry.', 'Pasta.', 'Pizza.', 'A hamburger.'],
    answer: 3,
    explanation: '本文の「Tom wants a hamburger.」が答えです。',
  },
  {
    id: 'reading-5-041',
    passage: 'Today is Amy’s birthday. Her parents give her a new camera. Amy is happy because she likes taking pictures.',
    prompt: 'Why is Amy happy?',
    choices: ['She gets a new camera.', 'She goes to school.', 'She has a new dog.', 'She plays tennis.'],
    answer: 0,
    explanation: '誕生日に新しいカメラをもらい、写真を撮るのが好きなので喜んでいます。',
  },
  {
    id: 'reading-5-042',
    passage: 'BOOKSTORE SALE\nSaturday and Sunday\nAll notebooks: 200 yen\nAll pens: 100 yen\nOpen from 10:00',
    prompt: 'How much is a notebook during the sale?',
    choices: ['100 yen.', '200 yen.', '300 yen.', '400 yen.'],
    answer: 1,
    explanation: '案内に「All notebooks: 200 yen」とあります。',
  },
  {
    id: 'reading-5-043',
    passage: 'Kevin usually walks to school with his friend. It is raining today, so his mother drives him to school.',
    prompt: 'How does Kevin go to school today?',
    choices: ['He walks.', 'He takes a train.', 'His mother drives him.', 'He rides a bike.'],
    answer: 2,
    explanation: '雨なので「his mother drives him to school」と書かれています。',
  },
  {
    id: 'reading-5-044',
    passage: 'Dear Grandma,\nWe are in Hokkaido now. It is very cold, but I am having fun. Tomorrow, we are going to see a big lake.\nLove,\nMia',
    prompt: 'What will Mia do tomorrow?',
    choices: ['Go home.', 'Go shopping.', 'Visit her school.', 'See a big lake.'],
    answer: 3,
    explanation: 'Miaは「Tomorrow, we are going to see a big lake.」と書いています。',
  },
  {
    id: 'reading-5-045',
    passage: 'Sam wants to make breakfast for his family on Sunday. He gets up early and makes eggs and toast. His parents are very happy.',
    prompt: 'Why does Sam get up early?',
    choices: ['To make breakfast.', 'To go to school.', 'To play soccer.', 'To meet his friend.'],
    answer: 0,
    explanation: '家族の朝食を作るために早く起きています。',
  },
];
type Grade4VocabMcQuestion = {
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  answer: number;
  explanation: string;
};

const grade4VocabMc: Grade4VocabMcQuestion[] = [
  {
    id: 'vocab-mc-4-001',
    prompt: 'A: Where is your father?\nB: He is making dinner in the ( ____ ).',
    choices: ['kitchen', 'station', 'garden', 'library'],
    answer: 0,
    explanation: 'kitchen：台所。夕食を作っている場所なので kitchen が正解です。',
  },
  {
    id: 'vocab-mc-4-002',
    prompt: 'Please ( ____ ) your name and phone number on this paper.',
    choices: ['sing', 'write', 'wash', 'open'],
    answer: 1,
    explanation: 'write：書く。「この紙に名前と電話番号を書いてください」という意味です。',
  },
  {
    id: 'vocab-mc-4-003',
    prompt: 'It was very hot, so Lisa opened the ( ____ ).',
    choices: ['picture', 'floor', 'window', 'question'],
    answer: 2,
    explanation: 'window：窓。暑かったので窓を開けた、という文です。',
  },
  {
    id: 'vocab-mc-4-004',
    prompt: 'My uncle works at a restaurant. He is a ( ____ ).',
    choices: ['student', 'farmer', 'doctor', 'cook'],
    answer: 3,
    explanation: 'cook：料理人。レストランで働いているという文脈に合います。',
  },
  {
    id: 'vocab-mc-4-005',
    prompt: 'A: How was the movie?\nB: It was very ( ____ ). I want to see it again.',
    choices: ['interesting', 'thirsty', 'cloudy', 'early'],
    answer: 0,
    explanation: 'interesting：おもしろい。もう一度見たいと言っているので自然です。',
  },
  {
    id: 'vocab-mc-4-006',
    prompt: 'My sister and I ( ____ ) the same bedroom.',
    choices: ['invite', 'share', 'answer', 'visit'],
    answer: 1,
    explanation: 'share：共有する。「姉妹で同じ寝室を使っている」という意味です。',
  },
  {
    id: 'vocab-mc-4-007',
    prompt: 'Ken was tired, so he went to bed ( ____ ) last night.',
    choices: ['again', 'outside', 'early', 'together'],
    answer: 2,
    explanation: 'early：早く。疲れていたので早く寝た、という流れです。',
  },
  {
    id: 'vocab-mc-4-008',
    prompt: 'A: Excuse me. How can I get to the museum?\nB: Go ( ____ ) and turn left at the bank.',
    choices: ['often', 'soon', 'really', 'straight'],
    answer: 3,
    explanation: 'straight：まっすぐに。go straight で「まっすぐ行く」です。',
  },
  {
    id: 'vocab-mc-4-009',
    prompt: 'Emma wants to be a ( ____ ) because she loves animals.',
    choices: ['vet', 'pilot', 'singer', 'driver'],
    answer: 0,
    explanation: 'vet：獣医。動物が大好きなので獣医になりたい、という意味です。',
  },
  {
    id: 'vocab-mc-4-010',
    prompt: 'A: When will the train ( ____ )?\nB: At 10:15.',
    choices: ['practice', 'arrive', 'remember', 'borrow'],
    answer: 1,
    explanation: 'arrive：到着する。電車が何時に到着するか聞いています。',
  },
  {
    id: 'vocab-mc-4-011',
    prompt: 'It is raining outside. Don’t forget your ( ____ ).',
    choices: ['camera', 'dictionary', 'umbrella', 'ticket'],
    answer: 2,
    explanation: 'umbrella：傘。雨が降っているので傘を忘れないように、という意味です。',
  },
  {
    id: 'vocab-mc-4-012',
    prompt: 'My grandmother lives in a small ( ____ ) near the mountains.',
    choices: ['language', 'season', 'subject', 'village'],
    answer: 3,
    explanation: 'village：村。「山の近くの小さな村に住んでいる」という意味です。',
  },
  {
    id: 'vocab-mc-4-013',
    prompt: 'A: Can I ( ____ ) your dictionary?\nB: Sure. Here you are.',
    choices: ['borrow', 'teach', 'send', 'build'],
    answer: 0,
    explanation: 'borrow：借りる。辞書を借りてもいいか尋ねています。',
  },
  {
    id: 'vocab-mc-4-014',
    prompt: 'We have a math test tomorrow, so I have to ( ____ ) tonight.',
    choices: ['travel', 'study', 'invite', 'carry'],
    answer: 1,
    explanation: 'study：勉強する。明日テストがあるので今夜勉強する、という意味です。',
  },
  {
    id: 'vocab-mc-4-015',
    prompt: 'This box is very ( ____ ). Can you help me carry it?',
    choices: ['famous', 'kind', 'heavy', 'quiet'],
    answer: 2,
    explanation: 'heavy：重い。運ぶのを手伝ってほしいので heavy が自然です。',
  },
  {
    id: 'vocab-mc-4-016',
    prompt: 'A: What did you do yesterday?\nB: I ( ____ ) my grandparents.',
    choices: ['stayed', 'waited', 'showed', 'visited'],
    answer: 3,
    explanation: 'visited：訪ねた。visit my grandparents で「祖父母を訪ねる」です。',
  },
  {
    id: 'vocab-mc-4-017',
    prompt: 'My brother is sick today. He has a bad ( ____ ).',
    choices: ['headache', 'holiday', 'question', 'festival'],
    answer: 0,
    explanation: 'headache：頭痛。be sick と一緒に使える体調に関する語です。',
  },
  {
    id: 'vocab-mc-4-018',
    prompt: 'A: What are you looking for?\nB: My keys. I can’t ( ____ ) them.',
    choices: ['hear', 'find', 'learn', 'meet'],
    answer: 1,
    explanation: 'find：見つける。「鍵を見つけられない」という意味です。',
  },
  {
    id: 'vocab-mc-4-019',
    prompt: 'The students are practicing for the school music ( ____ ).',
    choices: ['hospital', 'country', 'festival', 'breakfast'],
    answer: 2,
    explanation: 'festival：祭り・行事。school music festival で「学校の音楽祭」です。',
  },
  {
    id: 'vocab-mc-4-020',
    prompt: 'A: Is your new school far from your house?\nB: No. It is very ( ____ ).',
    choices: ['expensive', 'difficult', 'famous', 'near'],
    answer: 3,
    explanation: 'near：近い。far「遠い」と反対の意味です。',
  },
  {
    id: 'vocab-mc-4-021',
    prompt: 'Please ( ____ ) the door when you leave the room.',
    choices: ['close', 'cook', 'climb', 'call'],
    answer: 0,
    explanation: 'close：閉める。部屋を出るときにドアを閉める、という意味です。',
  },
  {
    id: 'vocab-mc-4-022',
    prompt: 'A: What did your mother give you for your birthday?\nB: She gave me a new ( ____ ). I take pictures with it.',
    choices: ['calendar', 'camera', 'dictionary', 'umbrella'],
    answer: 1,
    explanation: 'camera：カメラ。「それで写真を撮る」がヒントです。',
  },
  {
    id: 'vocab-mc-4-023',
    prompt: 'My family will ( ____ ) in a hotel near the beach this weekend.',
    choices: ['ask', 'bring', 'stay', 'teach'],
    answer: 2,
    explanation: 'stay：滞在する。stay in a hotel で「ホテルに泊まる」です。',
  },
  {
    id: 'vocab-mc-4-024',
    prompt: 'Mr. Brown is very ( ____ ). He always helps his students.',
    choices: ['busy', 'cold', 'young', 'kind'],
    answer: 3,
    explanation: 'kind：親切な。いつも生徒を助ける先生なので kind が自然です。',
  },
  {
    id: 'vocab-mc-4-025',
    prompt: 'A: Are you ( ____ ) this afternoon?\nB: Yes. Let’s go shopping.',
    choices: ['free', 'slow', 'dark', 'strong'],
    answer: 0,
    explanation: 'free：暇な、時間がある。「今日の午後、空いてる？」という意味です。',
  },
  {
    id: 'vocab-mc-4-026',
    prompt: 'I want to send this letter to Canada. Where is the post ( ____ )?',
    choices: ['party', 'office', 'sport', 'lesson'],
    answer: 1,
    explanation: 'post office：郵便局。手紙を送りたいという文脈です。',
  },
  {
    id: 'vocab-mc-4-027',
    prompt: 'A: Please ( ____ ) me how to use this computer.\nB: OK.',
    choices: ['move', 'catch', 'show', 'grow'],
    answer: 2,
    explanation: 'show：見せる、教える。show me how to ... で「〜のやり方を教えて」です。',
  },
  {
    id: 'vocab-mc-4-028',
    prompt: 'I was very ( ____ ) after soccer practice, so I drank two glasses of water.',
    choices: ['popular', 'different', 'ready', 'thirsty'],
    answer: 3,
    explanation: 'thirsty：のどが渇いた。水を2杯飲んだことがヒントです。',
  },
  {
    id: 'vocab-mc-4-029',
    prompt: 'There are seven days in a ( ____ ).',
    choices: ['week', 'minute', 'year', 'season'],
    answer: 0,
    explanation: 'week：週。1週間は7日です。',
  },
  {
    id: 'vocab-mc-4-030',
    prompt: 'A: Can you come to my birthday party?\nB: Yes. Thank you for the ( ____ ).',
    choices: ['question', 'invitation', 'weather', 'homework'],
    answer: 1,
    explanation: 'invitation：招待。誕生日パーティーに招待された場面です。',
  },
  {
    id: 'vocab-mc-4-031',
    prompt: 'My father usually reads the ( ____ ) before breakfast.',
    choices: ['airport', 'mountain', 'newspaper', 'medicine'],
    answer: 2,
    explanation: 'newspaper：新聞。read the newspaper で「新聞を読む」です。',
  },
  {
    id: 'vocab-mc-4-032',
    prompt: 'A: Where is Jack?\nB: He is taking a ( ____ ) in the bathroom.',
    choices: ['trip', 'walk', 'picture', 'shower'],
    answer: 3,
    explanation: 'shower：シャワー。take a shower で「シャワーを浴びる」です。',
  },
  {
    id: 'vocab-mc-4-033',
    prompt: 'I didn’t understand the question, so I ( ____ ) my teacher for help.',
    choices: ['asked', 'opened', 'washed', 'started'],
    answer: 0,
    explanation: 'asked：尋ねた、頼んだ。ask someone for help で「人に助けを求める」です。',
  },
  {
    id: 'vocab-mc-4-034',
    prompt: 'A: How often do you practice the piano?\nB: ( ____ ) a week, on Monday and Thursday.',
    choices: ['Once', 'Twice', 'First', 'Second'],
    answer: 1,
    explanation: 'twice：2回。月曜日と木曜日なので週に2回です。',
  },
  {
    id: 'vocab-mc-4-035',
    prompt: 'We took many pictures during our ( ____ ) to Kyoto.',
    choices: ['answer', 'language', 'trip', 'problem'],
    answer: 2,
    explanation: 'trip：旅行。trip to Kyoto で「京都への旅行」です。',
  },
  {
    id: 'vocab-mc-4-036',
    prompt: 'Please be ( ____ ) in the library. People are reading.',
    choices: ['hungry', 'famous', 'different', 'quiet'],
    answer: 3,
    explanation: 'quiet：静かな。図書館で読書している人がいるため静かにする、という意味です。',
  },
  {
    id: 'vocab-mc-4-037',
    prompt: 'My English teacher is from Australia, but she can ( ____ ) Japanese very well.',
    choices: ['speak', 'look', 'watch', 'listen'],
    answer: 0,
    explanation: 'speak：話す。speak Japanese で「日本語を話す」です。',
  },
  {
    id: 'vocab-mc-4-038',
    prompt: 'A: What are you doing this weekend?\nB: I’m going to ( ____ ) my room.',
    choices: ['ride', 'clean', 'wear', 'answer'],
    answer: 1,
    explanation: 'clean：掃除する。clean my room で「自分の部屋を掃除する」です。',
  },
  {
    id: 'vocab-mc-4-039',
    prompt: 'Tom is good at basketball. He is the tallest player on his ( ____ ).',
    choices: ['street', 'class', 'team', 'store'],
    answer: 2,
    explanation: 'team：チーム。basketball player が所属するものなので team が正解です。',
  },
  {
    id: 'vocab-mc-4-040',
    prompt: 'My sister was born in 2015. I was born in 2012, so I am ( ____ ) than her.',
    choices: ['shorter', 'newer', 'later', 'older'],
    answer: 3,
    explanation: 'older：より年上の。2012年生まれなので妹より年上です。',
  },
  {
    id: 'vocab-mc-4-041',
    prompt: 'A: What did you do at the beach?\nB: We ( ____ ) in the sea and played volleyball.',
    choices: ['swam', 'drew', 'wrote', 'spoke'],
    answer: 0,
    explanation: 'swam：swim の過去形。「海で泳いだ」という意味です。',
  },
  {
    id: 'vocab-mc-4-042',
    prompt: 'A: I’m going to Hokkaido next week.\nB: Have a nice ( ____ )!',
    choices: ['answer', 'trip', 'class', 'idea'],
    answer: 1,
    explanation: 'trip：旅行。Have a nice trip! は「よい旅行を！」という表現です。',
  },
  {
    id: 'vocab-mc-4-043',
    prompt: 'My mother is busy now, so I have to ( ____ ) my little brother.',
    choices: ['look at', 'look for', 'look after', 'look like'],
    answer: 2,
    explanation: 'look after：世話をする。「弟の世話をしなければならない」という意味です。',
  },
  {
    id: 'vocab-mc-4-044',
    prompt: 'A: May I speak to Mr. Green?\nB: Sorry, he is not here ( ____ ).',
    choices: ['very much', 'last year', 'every day', 'right now'],
    answer: 3,
    explanation: 'right now：今現在。「彼は今ここにいません」という意味です。',
  },
  {
    id: 'vocab-mc-4-045',
    prompt: 'A: Why were you late for school?\nB: I ( ____ ) the bus this morning.',
    choices: ['missed', 'kept', 'won', 'sold'],
    answer: 0,
    explanation: 'missed：乗り遅れた。miss the bus で「バスに乗り遅れる」です。',
  },
  ];

  type Grade4VocabJaQuestion = {
  id: string;
  prompt: string;
  accepted: string[];
  partialAnswers?: {
    answers: string[];
    credit: number;
  }[];
  explanation: string;
};

const grade4VocabJa: Grade4VocabJaQuestion[] = [
  {
    id: 'vocab-ja-4-001',
    prompt: 'to arrive',
    accepted: ['到着する', 'とうちゃくする', '着く', 'つく'],
    partialAnswers: [
      {
        answers: ['到着', 'とうちゃく'],
        credit: 0.75,
      },
    ],
    explanation: 'to arrive：到着する、着く',
  },
  {
    id: 'vocab-ja-4-002',
    prompt: 'to borrow',
    accepted: ['借りる', 'かりる'],
    partialAnswers: [
      {
        answers: ['借り', 'かり'],
        credit: 0.75,
      },
    ],
    explanation: 'to borrow：借りる',
  },
  {
    id: 'vocab-ja-4-003',
    prompt: 'to invite',
    accepted: ['招待する', 'しょうたいする', '誘う', 'さそう'],
    partialAnswers: [
      {
        answers: ['招待', 'しょうたい'],
        credit: 0.75,
      },
    ],
    explanation: 'to invite：招待する、誘う',
  },
  {
    id: 'vocab-ja-4-004',
    prompt: 'quiet',
    accepted: ['静かな', 'しずかな', '静か', 'しずか'],
    explanation: 'quiet：静かな、静か',
  },
  {
    id: 'vocab-ja-4-005',
    prompt: 'village',
    accepted: ['村', 'むら'],
    explanation: 'village：村',
  },
  {
    id: 'vocab-ja-4-006',
    prompt: 'famous',
    accepted: ['有名な', 'ゆうめいな', '有名', 'ゆうめい'],
    explanation: 'famous：有名な',
  },
  {
    id: 'vocab-ja-4-007',
    prompt: 'heavy',
    accepted: ['重い', 'おもい'],
    explanation: 'heavy：重い',
  },
  {
    id: 'vocab-ja-4-008',
    prompt: 'different',
    accepted: [
      '違う',
      'ちがう',
      '異なる',
      'ことなる',
      '違った',
      'ちがった',
      '異なった',
      'ことなった'
    ],
    explanation: 'different：違う、異なる',
  },
  {
    id: 'vocab-ja-4-009',
    prompt: 'festival',
    accepted: ['祭り', 'まつり', 'お祭り', 'おまつり', '祭典', 'さいてん'],
    explanation: 'festival：祭り、祭典',
  },
  {
    id: 'vocab-ja-4-010',
    prompt: 'thirsty',
    accepted: [
      '喉が渇いた',
      'のどがかわいた',
      '喉がかわいた',
      'のどが渇いた',
      '喉が渇いている',
      'のどがかわいている'
    ],
    partialAnswers: [
      {
        answers: [
          '喉が渇く',
          'のどがかわく',
          '喉がかわく',
          'のどが渇く'
        ],
        credit: 0.75,
      },
      {
        answers: ['渇いた', 'かわいた', '渇く', 'かわく'],
        credit: 0.5,
      },
    ],
    explanation: 'thirsty：喉が渇いた',
  },
  {
    id: 'vocab-ja-4-011',
    prompt: 'newspaper',
    accepted: ['新聞', 'しんぶん'],
    explanation: 'newspaper：新聞',
  },
  {
    id: 'vocab-ja-4-012',
    prompt: 'medicine',
    accepted: ['薬', 'くすり'],
    explanation: 'medicine：薬',
  },
  {
    id: 'vocab-ja-4-013',
    prompt: 'language',
    accepted: ['言語', 'げんご', '言葉', 'ことば'],
    explanation: 'language：言語、言葉',
  },
  {
    id: 'vocab-ja-4-014',
    prompt: 'subject',
    accepted: ['教科', 'きょうか', '科目', 'かもく'],
    explanation: 'subject：教科、科目',
  },
  {
    id: 'vocab-ja-4-015',
    prompt: 'trip',
    accepted: ['旅行', 'りょこう', '旅', 'たび'],
    explanation: 'trip：旅行、旅',
  },
  {
    id: 'vocab-ja-4-016',
    prompt: 'to stay',
    accepted: [
      '滞在する',
      'たいざいする',
      '泊まる',
      'とまる'
    ],
    partialAnswers: [
      {
        answers: ['滞在', 'たいざい'],
        credit: 0.75,
      },
    ],
    explanation: 'to stay：滞在する、泊まる',
  },
  {
    id: 'vocab-ja-4-017',
    prompt: 'to carry',
    accepted: ['運ぶ', 'はこぶ', '持ち運ぶ', 'もちはこぶ'],
    explanation: 'to carry：運ぶ、持ち運ぶ',
  },
  {
    id: 'vocab-ja-4-018',
    prompt: 'to remember',
    accepted: [
      '覚える',
      'おぼえる',
      '思い出す',
      'おもいだす'
    ],
    partialAnswers: [
      {
        answers: ['覚えている', 'おぼえている'],
        credit: 0.75,
      },
    ],
    explanation: 'to remember：覚える、思い出す',
  },
  {
    id: 'vocab-ja-4-019',
    prompt: 'to understand',
    accepted: [
      '理解する',
      'りかいする',
      '分かる',
      'わかる'
    ],
    partialAnswers: [
      {
        answers: ['理解', 'りかい'],
        credit: 0.75,
      },
    ],
    explanation: 'to understand：理解する、分かる',
  },
  {
    id: 'vocab-ja-4-020',
    prompt: 'practice',
    accepted: [
      '練習する',
      'れんしゅうする',
      '練習',
      'れんしゅう'
    ],
    explanation: 'practice：練習する、練習',
  },
  {
    id: 'vocab-ja-4-021',
    prompt: 'popular',
    accepted: [
      '人気のある',
      'にんきのある',
      '人気がある',
      'にんきがある',
      '人気な',
      'にんきな'
    ],
    partialAnswers: [
      {
        answers: ['人気', 'にんき'],
        credit: 0.75,
      },
    ],
    explanation: 'popular：人気のある',
  },
  {
    id: 'vocab-ja-4-022',
    prompt: 'weekend',
    accepted: ['週末', 'しゅうまつ'],
    explanation: 'weekend：週末',
  },
  {
    id: 'vocab-ja-4-023',
    prompt: 'airport',
    accepted: ['空港', 'くうこう'],
    explanation: 'airport：空港',
  },
  {
    id: 'vocab-ja-4-024',
    prompt: 'station',
    accepted: ['駅', 'えき'],
    explanation: 'station：駅',
  },
  {
    id: 'vocab-ja-4-025',
    prompt: 'holiday',
    accepted: [
      '休日',
      'きゅうじつ',
      '休暇',
      'きゅうか',
      '祝日',
      'しゅくじつ',
      '休み',
      'やすみ'
    ],
    explanation: 'holiday：休日、休暇、祝日',
  },
  {
    id: 'vocab-ja-4-026',
    prompt: 'straight',
    accepted: ['まっすぐ', '真っ直ぐ'],
    explanation: 'straight：まっすぐ',
  },
  {
    id: 'vocab-ja-4-027',
    prompt: 'usually',
    accepted: [
      'たいてい',
      '大抵',
      '普段',
      'ふだん',
      '普通は',
      'ふつうは',
      'いつもは'
    ],
    explanation: 'usually：たいてい、普段は',
  },
  {
    id: 'vocab-ja-4-028',
    prompt: 'sometimes',
    accepted: ['時々', 'ときどき', '時には', 'ときには'],
    explanation: 'sometimes：時々',
  },
  {
    id: 'vocab-ja-4-029',
    prompt: 'together',
    accepted: ['一緒に', 'いっしょに'],
    explanation: 'together：一緒に',
  },
  {
    id: 'vocab-ja-4-030',
    prompt: 'again',
    accepted: [
      'もう一度',
      'もういちど',
      '再び',
      'ふたたび',
      'また'
    ],
    explanation: 'again：もう一度、再び、また',
  },
  {
    id: 'vocab-ja-4-031',
    prompt: 'to look for',
    accepted: ['探す', 'さがす', '捜す'],
    partialAnswers: [
      {
        answers: ['探している', 'さがしている'],
        credit: 0.75,
      },
    ],
    explanation: 'to look for：探す',
  },
  {
    id: 'vocab-ja-4-032',
    prompt: 'to look after',
    accepted: [
      '世話をする',
      'せわをする',
      '面倒を見る',
      'めんどうをみる',
      '面倒をみる'
    ],
    partialAnswers: [
      {
        answers: [
          '世話',
          'せわ',
          '面倒を見ること',
          'めんどうをみること'
        ],
        credit: 0.75,
      },
      {
        answers: ['面倒', 'めんどう'],
        credit: 0.5,
      },
    ],
    explanation: 'to look after：〜の世話をする、面倒を見る',
  },
  {
    id: 'vocab-ja-4-033',
    prompt: 'to get up',
    accepted: ['起きる', 'おきる', '起床する', 'きしょうする', '起き上がる', 'おきあがる'],
    partialAnswers: [
      {
        answers: ['起床', 'きしょう'],
        credit: 0.75,
      },
    ],
    explanation: 'to get up：起きる、起床する',
  },
  {
    id: 'vocab-ja-4-034',
    prompt: 'to go out',
    accepted: [
      '外出する',
      'がいしゅつする',
      '出かける',
      'でかける',
      '出掛ける'
    ],
    partialAnswers: [
      {
        answers: ['外出', 'がいしゅつ'],
        credit: 0.75,
      },
    ],
    explanation: 'to go out：外出する、出かける',
  },
  {
    id: 'vocab-ja-4-035',
    prompt: 'to wait for',
    accepted: [
      '待つ',
      'まつ',
      'を待つ',
      'をまつ'
    ],
    explanation: 'to wait for：〜を待つ',
  },
  {
    id: 'vocab-ja-4-036',
    prompt: 'to be good at',
    accepted: [
      '得意である',
      'とくいである',
      '得意だ',
      'とくいだ',
      '上手である',
      'じょうずである',
      '上手だ',
      'じょうずだ'
    ],
    partialAnswers: [
      {
        answers: ['得意', 'とくい', '上手', 'じょうず'],
        credit: 0.75,
      },
    ],
    explanation: 'to be good at：〜が得意である、上手である',
  },
  {
    id: 'vocab-ja-4-037',
    prompt: 'to be interested in',
    accepted: [
      '興味がある',
      'きょうみがある',
      '興味を持っている',
      'きょうみをもっている'
    ],
    partialAnswers: [
      {
        answers: ['興味', 'きょうみ'],
        credit: 0.5,
      },
    ],
    explanation: 'to be interested in：〜に興味がある',
  },
  {
    id: 'vocab-ja-4-038',
    prompt: 'right now',
    accepted: [
      '今',
      'いま',
      '今すぐ',
      'いますぐ',
      'たった今',
      'たったいま',
      '今現在',
      'いまげんざい'
    ],
    explanation: 'right now：今、今すぐ',
  },
  {
    id: 'vocab-ja-4-039',
    prompt: 'a lot of',
    accepted: [
      'たくさんの',
      '沢山の',
      '多くの',
      'おおくの'
    ],
    partialAnswers: [
      {
        answers: ['たくさん', '沢山', '多く', 'おおく'],
        credit: 0.75,
      },
    ],
    explanation: 'a lot of：たくさんの、多くの',
  },
  {
    id: 'vocab-ja-4-040',
    prompt: 'have to',
    accepted: [
      'しなければならない',
      'する必要がある',
      'するひつようがある',
      'しなくてはいけない',
      'しないといけない'
    ],
    partialAnswers: [
      {
        answers: [
          '必要がある',
          'ひつようがある',
          'しなければ',
          'しなくてはいけない'
        ],
        credit: 0.75,
      },
      {
        answers: ['必要', 'ひつよう'],
        credit: 0.5,
      },
    ],
    explanation: 'have to：〜しなければならない、〜する必要がある',
  },
  {
    id: 'vocab-ja-4-041',
    prompt: 'to be late for',
    accepted: [
      '遅刻する',
      'ちこくする',
      'に遅れる',
      'におくれる',
      '遅れる',
      'おくれる'
    ],
    partialAnswers: [
      {
        answers: ['遅刻', 'ちこく'],
        credit: 0.75,
      },
    ],
    explanation: 'to be late for：〜に遅れる、遅刻する',
  },
  {
    id: 'vocab-ja-4-042',
    prompt: 'to take a picture',
    accepted: [
      '写真を撮る',
      'しゃしんをとる',
      '写真をとる'
    ],
    partialAnswers: [
      {
        answers: ['写真', 'しゃしん', '写真を撮ること', 'しゃしんをとること'],
        credit: 0.5,
      },
    ],
    explanation: 'to take a picture：写真を撮る',
  },
  {
    id: 'vocab-ja-4-043',
    prompt: 'to take a shower',
    accepted: [
      'シャワーを浴びる',
      'シャワーをあびる'
    ],
    partialAnswers: [
      {
        answers: ['シャワー', 'シャワーを浴びること', 'シャワーをあびること'],
        credit: 0.5,
      },
    ],
    explanation: 'to take a shower：シャワーを浴びる',
  },
  {
    id: 'vocab-ja-4-044',
    prompt: 'on the way',
    accepted: [
      '途中で',
      'とちゅうで',
      '途中に',
      'とちゅうに',
      '道の途中で',
      'みちのとちゅうで'
    ],
    partialAnswers: [
      {
        answers: ['途中', 'とちゅう'],
        credit: 0.75,
      },
    ],
    explanation: 'on the way：途中で、道の途中で',
  },
  {
    id: 'vocab-ja-4-045',
    prompt: 'for example',
    accepted: ['例えば', 'たとえば'],
    explanation: 'for example：例えば',
  },
];
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

  ...grade5Reading.map(q => ({
    ...q,
    level: '5' as const,
    mode: 'reading' as const,
    active: true,
  })),

  
    ...grade4VocabMc.map(q => ({
    ...q,
    level: '4' as const,
    mode: 'vocabulary-mc' as const,
    active: true,
  })),
    ...grade4VocabMc.map(q => ({
    ...q,
    level: '4' as const,
    mode: 'vocabulary-mc' as const,
    active: true,
  })),

  ...grade4VocabJa.map(q => ({
    ...q,
    level: '4' as const,
    mode: 'vocabulary-ja' as const,
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
 if(i>1){
  const vocabIndex=(i-1)*2;
  const [,choices,prompt,,explanation]=vocabs[vocabIndex]; questionBank.push({id:`vocab-mc-${level}-${n}`,level,mode:'vocabulary-mc',active:true,prompt,...rotatedOptions(choices,i+1),explanation});
  const [,choices2,prompt2,,explanation2]=vocabs[vocabIndex+1]; questionBank.push({id:`vocab-mc-${level}-${String(i+1).padStart(3,'0')}-b`,level,mode:'vocabulary-mc',active:true,prompt:prompt2,...rotatedOptions(choices2,i+2),explanation:explanation2});
 }
 if (i > 1) {
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
  if (i > 0) {   const r=reading[i*2+j];   questionBank.push({     id:`reading-${level}-00${j+1}`,     level,     mode:'reading',     active:true,     passage:r[0],     prompt:r[1],     ...rotatedOptions([r[6],r[3],r[4],r[5]],i+j)   }); }
  if (i > 0) {   const c=conversations[i*2+j];   questionBank.push({     id:`conversation-${level}-00${j+1}`,     level,     mode:'conversation',     active:true,     dialogue:c[0],     prompt:c[1],     ...rotatedOptions([c[6],c[3],c[4],c[5]],i+j+1)   }); }
 }
}

