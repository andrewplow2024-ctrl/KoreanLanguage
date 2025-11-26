import React from 'react';
// Force HMR update
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Korean Learning Journey</h1>
                <p>Master TOPIK 1 Vocabulary & Grammar</p>
            </header>

            <main className="landing-main">
                <div className="feature-card">
                    <h2>Vocabulary Review</h2>
                    <p>Practice essential words for TOPIK 1.</p>
                    <button className="action-btn" onClick={() => navigate('/vocabulary')}>Start Vocabulary</button>
                </div>

                <div className="feature-card">
                    <h2>Grammar Practice</h2>
                    <p>Learn and review basic grammar structures.</p>
                    <button className="action-btn" onClick={() => navigate('/grammar')}>Start Grammar</button>
                </div>

                <div className="feature-card">
                    <h2>Conversation</h2>
                    <p>Apply what you've learned in real scenarios.</p>
                    <button className="action-btn">Start Chat</button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
