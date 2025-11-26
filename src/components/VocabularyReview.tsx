import React, { useState } from 'react';
import { sampleVocabulary } from '../data/vocabulary';
import { useNavigate } from 'react-router-dom';
import './VocabularyReview.css';

const VocabularyReview: React.FC = () => {
    const navigate = useNavigate();
    const [vocabList, setVocabList] = useState<typeof sampleVocabulary>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Shuffle vocabulary on mount
    React.useEffect(() => {
        const shuffled = [...sampleVocabulary].sort(() => Math.random() - 0.5);
        setVocabList(shuffled);
    }, []);

    if (vocabList.length === 0) return null;

    const currentWord = vocabList[currentIndex];

    const handleCardClick = () => {
        if (!isTransitioning) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isTransitioning) return;

        // 1. Disable transition
        setIsTransitioning(true);

        // 2. Instantly snap to front (no animation because of no-transition class)
        setIsFlipped(false);

        // 3. Change content immediately
        setCurrentIndex((prev) => (prev + 1) % vocabList.length);

        // 4. Re-enable transition after a brief delay so the snap is rendered
        setTimeout(() => {
            setIsTransitioning(false);
        }, 50);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isTransitioning) return;

        setIsTransitioning(true);
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + vocabList.length) % vocabList.length);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 50);
    };

    return (
        <div className="vocab-container">
            <header className="vocab-header">
                <button onClick={() => navigate('/')} className="back-btn">← Back</button>
                <h1>Vocabulary Review</h1>
                <p>Click on the card to reveal the meaning</p>
                <p className="progress-text">{currentIndex + 1} / {vocabList.length}</p>
            </header>

            <div className="vocab-content">
                <button className="nav-btn prev" onClick={handlePrev}>‹</button>

                <div
                    className={`vocab-card ${isFlipped ? 'flipped' : ''} ${isTransitioning ? 'no-transition' : ''}`}
                    onClick={handleCardClick}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <h2>{currentWord.korean}</h2>
                        </div>
                        <div className="card-back">
                            <h2>{currentWord.english}</h2>
                            <div className="example">
                                <p><strong>Example:</strong></p>
                                <p>{currentWord.exampleSentence.korean}</p>
                                <p>{currentWord.exampleSentence.english}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="nav-btn next" onClick={handleNext}>›</button>
            </div>
        </div>
    );
};

export default VocabularyReview;
