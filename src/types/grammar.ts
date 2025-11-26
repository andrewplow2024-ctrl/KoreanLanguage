export type GrammarTopic = 'Tenses' | 'Particles' | 'Conjunctions';

export interface GrammarQuestion {
    id: string;
    topic: GrammarTopic;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}
