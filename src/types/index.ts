export interface VocabularyWord {
    id: number;
    korean: string;
    english: string;
    pronunciation: string;
    exampleSentence: {
        korean: string;
        english: string;
    };
}
