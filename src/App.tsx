import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VocabularyReview from './components/VocabularyReview';
import GrammarPractice from './components/GrammarPractice';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vocabulary" element={<VocabularyReview />} />
      <Route path="/grammar" element={<GrammarPractice />} />
    </Routes>
  );
}

export default App;
