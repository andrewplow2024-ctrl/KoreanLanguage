import type { GrammarQuestion } from '../types/grammar';

export const grammarQuestions: GrammarQuestion[] = [
    // --- Tenses (Past, Present, Future) ---
    {
        id: 't-1',
        topic: 'Tenses',
        question: '어제 학교에 _____. (가다 - to go) / Yesterday, I _____ to school.',
        options: ['가요 (gayo)', '갔어요 (gasseoyo)', '갈 거예요 (gal geoyeyo)', '가고 있어요 (gago isseoyo)'],
        correctAnswer: '갔어요 (gasseoyo)',
        explanation: '어제 (yesterday)가 있으므로 과거형 갔어요를 사용합니다. / The sentence says "Yesterday" (어제), so we need the past tense of 가다, which is 갔어요.'
    },
    {
        id: 't-2',
        topic: 'Tenses',
        question: '지금 사과를 _____. (먹다 - to eat) / I _____ an apple now.',
        options: ['먹었어요 (meogeosseoyo)', '먹을 거예요 (meogeul geoyeyo)', '먹어요 (meogeoyo)', '먹지 않아요 (meokji anayo)'],
        correctAnswer: '먹어요 (meogeoyo)',
        explanation: '지금 (now)이 있으므로 현재형 먹어요를 사용합니다. / The sentence says "now" (지금), so we use the present tense of 먹다, which is 먹어요.'
    },
    {
        id: 't-3',
        topic: 'Tenses',
        question: '내일 영화를 _____. (보다 - to watch) / Tomorrow, I _____ a movie.',
        options: ['봤어요 (bwasseoyo)', '봐요 (bwayo)', '볼 거예요 (bol geoyeyo)', '보고 싶어요 (bogo sipeoyo)'],
        correctAnswer: '볼 거예요 (bol geoyeyo)',
        explanation: '내일 (tomorrow)이 있으므로 미래형 볼 거예요를 사용합니다. / The sentence says "Tomorrow" (내일), so we need the future tense of 보다, which is 볼 거예요.'
    },
    {
        id: 't-4',
        topic: 'Tenses',
        question: '지난 주말에 피자를 _____. (만들다 - to make) / Last weekend, we _____ pizza.',
        options: ['만들어요 (mandeureoyo)', '만들었어요 (mandeureosseoyo)', '만들 거예요 (mandeul geoyeyo)', '만드세요 (mandeuseyo)'],
        correctAnswer: '만들었어요 (mandeureosseoyo)',
        explanation: '지난 주말 (last weekend)은 과거를 나타내므로 만들었어요를 사용합니다. / "Last weekend" indicates the past. The past tense of 만들다 is 만들었어요.'
    },
    {
        id: 't-5',
        topic: 'Tenses',
        question: '내년에 한국어를 _____. (배우다 - to learn) / I _____ Korean next year.',
        options: ['배웠어요 (baewosseoyo)', '배워요 (baewoyo)', '배울 거예요 (baeul geoyeyo)', '배우고 있어요 (baeugo isseoyo)'],
        correctAnswer: '배울 거예요 (baeul geoyeyo)',
        explanation: '내년 (next year)은 미래를 나타내므로 배울 거예요를 사용합니다. / "Next year" indicates the future. The future tense of 배우다 is 배울 거예요.'
    },

    // --- Particles (Location, Object, Subject) ---
    {
        id: 'p-1',
        topic: 'Particles',
        question: '도서관_____ 공부해요. (Location of action) / I study _____ the library.',
        options: ['에 (e)', '에서 (eseo)', '이 (i)', '을 (eul)'],
        correctAnswer: '에서 (eseo)',
        explanation: '에서는 동작이 일어나는 장소를 나타냅니다. / 에서 indicates the location where an action (studying) takes place.'
    },
    {
        id: 'p-2',
        topic: 'Particles',
        question: '학교_____ 가요. (Direction/Destination) / I go _____ school.',
        options: ['에 (e)', '에서 (eseo)', '가 (ga)', '를 (reul)'],
        correctAnswer: '에 (e)',
        explanation: '에는 가다와 함께 사용하여 목적지를 나타냅니다. / 에 indicates the destination or direction when used with verbs like 가다 (to go).'
    },
    {
        id: 'p-3',
        topic: 'Particles',
        question: '사과_____ 먹어요. (Object particle) / I eat _____ apple.',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '를 (reul)',
        explanation: '사과는 모음으로 끝나므로 목적격 조사 를을 사용합니다. / 사과 (apple) ends in a vowel, so we use the object particle 를.'
    },
    {
        id: 'p-4',
        topic: 'Particles',
        question: '책_____ 읽어요. (Object particle) / I read _____ book.',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '을 (eul)',
        explanation: '책은 자음으로 끝나므로 목적격 조사 을을 사용합니다. / 책 (book) ends in a consonant, so we use the object particle 을.'
    },
    {
        id: 'p-5',
        topic: 'Particles',
        question: '날씨_____ 좋아요. (Subject particle) / The weather _____ good.',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '가 (ga)',
        explanation: '날씨는 모음으로 끝나므로 주격 조사 가를 사용합니다. / 날씨 (weather) ends in a vowel, so we use the subject particle 가.'
    },

    // --- Conjunctions (Because) ---
    {
        id: 'c-1',
        topic: 'Conjunctions',
        question: '피곤해요 _____ 많이 일했어요. (Because) / I am tired _____ I worked a lot.',
        options: ['그래서 (geuraeseo)', '하지만 (hajiman)', '왜냐하면 (waenyahamyeon)', '그리고 (geurigo)'],
        correctAnswer: '왜냐하면 (waenyahamyeon)',
        explanation: '왜냐하면은 이유를 설명할 때 사용합니다. / 왜냐하면 means "because" and introduces the reason.'
    },
    {
        id: 'c-2',
        topic: 'Conjunctions',
        question: '비가 와요, _____ 집에 있을 거예요. (So/Therefore) / It is raining, _____ I will stay home.',
        options: ['그래서 (geuraeseo)', '그러나 (geureona)', '왜냐하면 (waenyahamyeon)', '또 (tto)'],
        correctAnswer: '그래서 (geuraeseo)',
        explanation: '그래서는 원인과 결과를 연결합니다. / 그래서 means "so" or "therefore", connecting the cause (rain) to the result (staying home).'
    },
    {
        id: 'c-3',
        topic: 'Conjunctions',
        question: '김치를 좋아해요, _____ 매워요. (But) / I like kimchi, _____ it is spicy.',
        options: ['그래서 (geuraeseo)', '하지만 (hajiman)', '그리고 (geurigo)', '니까 (nikka)'],
        correctAnswer: '하지만 (hajiman)',
        explanation: '하지만은 대조를 나타냅니다. / 하지만 means "but" or "however", showing contrast.'
    },
    {
        id: 'c-4',
        topic: 'Conjunctions',
        question: '공원에 갔어요 _____ 친구를 만났어요. (And then) / I went to the park _____ met a friend.',
        options: ['그리고 (geurigo)', '그러나 (geureona)', '왜냐하면 (waenyahamyeon)', '그래서 (geuraeseo)'],
        correctAnswer: '그리고 (geurigo)',
        explanation: '그리고는 두 가지 행동을 연결합니다. / 그리고 means "and" or "and then", connecting two actions.'
    },
    {
        id: 'c-5',
        topic: 'Conjunctions',
        question: '추우니까 코트를 입으세요. (Reason - 니까) / Since it is cold, wear a coat.',
        options: ['추우니까 (chuunikka)', '춥지만 (chupjiman)', '춥고 (chupgo)', '추워서 (chuwoseo)'],
        correctAnswer: '추우니까 (chuunikka)',
        explanation: '-(으)니까는 이유나 깨달음을 표현하며 제안이나 명령과 함께 사용됩니다. / -(으)니까 expresses a reason or realization, often used with suggestions or commands.'
    }
];

export const getQuizSession = (count: number = 10): GrammarQuestion[] => {
    const shuffled = [...grammarQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
