import { GrammarQuestion } from '../types/grammar';

export const grammarQuestions: GrammarQuestion[] = [
    // --- Tenses (Past, Present, Future) ---
    {
        id: 't-1',
        topic: 'Tenses',
        question: 'Yesterday, I _____ to school. (가다 - to go)',
        options: ['가요 (gayo)', '갔어요 (gasseoyo)', '갈 거예요 (gal geoyeyo)', '가고 있어요 (gago isseoyo)'],
        correctAnswer: '갔어요 (gasseoyo)',
        explanation: 'The sentence says "Yesterday" (어제), so we need the past tense of 가다, which is 갔어요.'
    },
    {
        id: 't-2',
        topic: 'Tenses',
        question: 'I _____ an apple now. (먹다 - to eat)',
        options: ['먹었어요 (meogeosseoyo)', '먹을 거예요 (meogeul geoyeyo)', '먹어요 (meogeoyo)', '먹지 않아요 (meokji anayo)'],
        correctAnswer: '먹어요 (meogeoyo)',
        explanation: 'The sentence says "now" (지금), so we use the present tense of 먹다, which is 먹어요.'
    },
    {
        id: 't-3',
        topic: 'Tenses',
        question: 'Tomorrow, I _____ a movie. (보다 - to watch)',
        options: ['봤어요 (bwasseoyo)', '봐요 (bwayo)', '볼 거예요 (bol geoyeyo)', '보고 싶어요 (bogo sipeoyo)'],
        correctAnswer: '볼 거예요 (bol geoyeyo)',
        explanation: 'The sentence says "Tomorrow" (내일), so we need the future tense of 보다, which is 볼 거예요.'
    },
    {
        id: 't-4',
        topic: 'Tenses',
        question: 'Last weekend, we _____ pizza. (만들다 - to make)',
        options: ['만들어요 (mandeureoyo)', '만들었어요 (mandeureosseoyo)', '만들 거예요 (mandeul geoyeyo)', '만드세요 (mandeuseyo)'],
        correctAnswer: '만들었어요 (mandeureosseoyo)',
        explanation: '"Last weekend" indicates the past. The past tense of 만들다 is 만들었어요.'
    },
    {
        id: 't-5',
        topic: 'Tenses',
        question: 'I _____ Korean next year. (배우다 - to learn)',
        options: ['배웠어요 (baewosseoyo)', '배워요 (baewoyo)', '배울 거예요 (baeul geoyeyo)', '배우고 있어요 (baeugo isseoyo)'],
        correctAnswer: '배울 거예요 (baeul geoyeyo)',
        explanation: '"Next year" indicates the future. The future tense of 배우다 is 배울 거예요.'
    },

    // --- Particles (Location, Object, Subject) ---
    {
        id: 'p-1',
        topic: 'Particles',
        question: 'I study _____ the library. (Location of action)',
        options: ['에 (e)', '에서 (eseo)', '이 (i)', '을 (eul)'],
        correctAnswer: '에서 (eseo)',
        explanation: '에서 indicates the location where an action (studying) takes place.'
    },
    {
        id: 'p-2',
        topic: 'Particles',
        question: 'I go _____ school. (Direction/Destination)',
        options: ['에 (e)', '에서 (eseo)', '가 (ga)', '를 (reul)'],
        correctAnswer: '에 (e)',
        explanation: '에 indicates the destination or direction when used with verbs like 가다 (to go).'
    },
    {
        id: 'p-3',
        topic: 'Particles',
        question: 'I eat _____ apple. (Object particle)',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '를 (reul)',
        explanation: '사과 (apple) ends in a vowel, so we use the object particle 를.'
    },
    {
        id: 'p-4',
        topic: 'Particles',
        question: 'I read _____ book. (Object particle)',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '을 (eul)',
        explanation: '책 (book) ends in a consonant, so we use the object particle 을.'
    },
    {
        id: 'p-5',
        topic: 'Particles',
        question: 'The weather _____ good. (Subject particle)',
        options: ['이 (i)', '가 (ga)', '을 (eul)', '를 (reul)'],
        correctAnswer: '가 (ga)',
        explanation: '날씨 (weather) ends in a vowel, so we use the subject particle 가.'
    },

    // --- Conjunctions (Because) ---
    {
        id: 'c-1',
        topic: 'Conjunctions',
        question: 'I am tired _____ I worked a lot. (Because)',
        options: ['그래서 (geuraeseo)', '하지만 (hajiman)', '왜냐하면 (waenyahamyeon)', '그리고 (geurigo)'],
        correctAnswer: '왜냐하면 (waenyahamyeon)',
        explanation: '왜냐하면 means "because" and introduces the reason.'
    },
    {
        id: 'c-2',
        topic: 'Conjunctions',
        question: 'It is raining, _____ I will stay home. (So/Therefore)',
        options: ['그래서 (geuraeseo)', '그러나 (geureona)', '왜냐하면 (waenyahamyeon)', '또 (tto)'],
        correctAnswer: '그래서 (geuraeseo)',
        explanation: '그래서 means "so" or "therefore", connecting the cause (rain) to the result (staying home).'
    },
    {
        id: 'c-3',
        topic: 'Conjunctions',
        question: 'I like kimchi, _____ it is spicy. (But)',
        options: ['그래서 (geuraeseo)', '하지만 (hajiman)', '그리고 (geurigo)', '니까 (nikka)'],
        correctAnswer: '하지만 (hajiman)',
        explanation: '하지만 means "but" or "however", showing contrast.'
    },
    {
        id: 'c-4',
        topic: 'Conjunctions',
        question: 'I went to the park _____ met a friend. (And then)',
        options: ['그리고 (geurigo)', '그러나 (geureona)', '왜냐하면 (waenyahamyeon)', '그래서 (geuraeseo)'],
        correctAnswer: '그리고 (geurigo)',
        explanation: '그리고 means "and" or "and then", connecting two actions.'
    },
    {
        id: 'c-5',
        topic: 'Conjunctions',
        question: 'Since it is cold, wear a coat. (Reason - 니까)',
        options: ['추우니까 (chuunikka)', '춥지만 (chupjiman)', '춥고 (chupgo)', '추워서 (chuwoseo)'],
        correctAnswer: '추우니까 (chuunikka)',
        explanation: '-(으)니까 expresses a reason or realization, often used with suggestions or commands.'
    }
];

export const getQuizSession = (count: number = 10): GrammarQuestion[] => {
    const shuffled = [...grammarQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
