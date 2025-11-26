import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VocabularyReview from './components/VocabularyReview';
import GrammarPractice from './components/GrammarPractice';
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh the page.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vocabulary" element={<VocabularyReview />} />
        <Route path="/grammar" element={<GrammarPractice />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
