
import React, { useState } from 'react';
import { AppPhase, Question, DimensionScores } from './types';
import { INITIAL_QUESTIONS } from './constants';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Loading from './components/Loading';
import Result from './components/Result';

const App: React.FC = () => {
  const [phase, setPhase] = useState<AppPhase>(AppPhase.HOME);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [dimScores, setDimScores] = useState<DimensionScores>({ d1: 0, d2: 0, d3: 0 });
  
  const questions = INITIAL_QUESTIONS;

  const startQuiz = () => {
    setPhase(AppPhase.QUIZ);
    setCurrentIdx(0);
    setTotalScore(0);
    setDimScores({ d1: 0, d2: 0, d3: 0 });
  };

  const handleAnswer = (score: number, dimension: number) => {
    setTotalScore(prev => prev + score);
    setDimScores(prev => ({
      ...prev,
      [`d${dimension}` as keyof DimensionScores]: prev[`d${dimension}` as keyof DimensionScores] + score
    }));

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setPhase(AppPhase.LOADING);
    }
  };

  const handleFinishLoading = () => {
    setPhase(AppPhase.RESULT);
  };

  const restart = () => {
    setPhase(AppPhase.HOME);
  };

  return (
    <main className="relative max-w-md mx-auto h-screen flex flex-col overflow-hidden">
      {phase === AppPhase.HOME && <Home onStart={startQuiz} />}
      {phase === AppPhase.QUIZ && (
        <Quiz 
          question={questions[currentIdx]} 
          currentIndex={currentIdx} 
          totalCount={questions.length} 
          onAnswer={handleAnswer} 
        />
      )}
      {phase === AppPhase.LOADING && <Loading onFinished={handleFinishLoading} />}
      {phase === AppPhase.RESULT && (
        <Result 
          score={totalScore} 
          dimScores={dimScores}
          onRestart={restart} 
        />
      )}
    </main>
  );
};

export default App;
