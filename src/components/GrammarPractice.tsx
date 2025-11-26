import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuizSession } from '../data/grammar';
import type { GrammarQuestion } from '../types/grammar';
import './GrammarPractice.css';

const GrammarPractice: React.FC = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<GrammarQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        startNewQuiz();
    }, []);

    const startNewQuiz = () => {
        const newQuestions = getQuizSession(10);
        setQuestions(newQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuizComplete(false);
    };

    const handleAnswerSelect = (answer: string) => {
        if (showResult) return;
        setSelectedAnswer(answer);
    };

    const handleCheckAnswer = () => {
        if (!selectedAnswer) return;

        const currentQuestion = questions[currentIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
        setShowResult(true);
    };

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setQuizComplete(true);
        }
    };

    if (questions.length === 0) return <div>Loading...</div>;

    if (quizComplete) {
        return (
            <div className="grammar-container">
                <div className="quiz-card summary-card">
                    <h1>Quiz Complete!</h1>
                    <div className="score-display">
                        <span className="score-number">{score}</span>
                        <span className="score-total">/ {questions.length}</span>
                    </div>
                    <p className="score-message">
                        {score >= 8 ? 'Excellent work!' : score >= 5 ? 'Good job!' : 'Keep practicing!'}
                    </p>
                    <div className="action-buttons">
                        <button onClick={startNewQuiz} className="primary-btn">Play Again</button>
                        <button onClick={() => navigate('/')} className="secondary-btn">Home</button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="grammar-container">
            <header className="grammar-header">
                <button onClick={() => navigate('/')} className="back-link">← Exit</button>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                    ></div>
                </div>
                <span className="question-counter">Question {currentIndex + 1}/{questions.length}</span>
            </header>

            <div className="quiz-card">
                <span className="topic-badge">{currentQuestion.topic}</span>
                <h2 className="question-text">{currentQuestion.question}</h2>

                <div className="options-grid">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-btn ${selectedAnswer === option ? 'selected' : ''} ${showResult && option === currentQuestion.correctAnswer ? 'correct' : ''
                                } ${showResult && selectedAnswer === option && selectedAnswer !== currentQuestion.correctAnswer ? 'incorrect' : ''
                                }`}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={showResult}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {showResult ? (
                    <div className={`feedback-section ${selectedAnswer === currentQuestion.correctAnswer ? 'success' : 'error'}`}>
                        <h3>{selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}</h3>
                        <p className="explanation">{currentQuestion.explanation}</p>
                        <button onClick={handleNextQuestion} className="next-btn">
                            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleCheckAnswer}
                        className="check-btn"
                        disabled={!selectedAnswer}
                    >
                        Check Answer
                    </button>
                )}
            </div>
        </div>
    );
};

export default GrammarPractice;
