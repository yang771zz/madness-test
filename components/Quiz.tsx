
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  currentIndex: number;
  totalCount: number;
  onAnswer: (score: number, dimension: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, currentIndex, totalCount, onAnswer }) => {
  const [animating, setAnimating] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const progress = ((currentIndex + 1) / totalCount) * 100;

  const handleSelect = (score: number, idx: number) => {
    if (animating) return;
    setSelectedIdx(idx);
    setAnimating(true);
    
    setTimeout(() => {
      onAnswer(score, question.dimension);
      setAnimating(false);
      setSelectedIdx(null);
    }, 250);
  };

  return (
    <div className="h-screen w-full flex flex-col p-6 pt-12 relative items-center">
      {/* Top Streamer Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-100 z-50 overflow-hidden">
        <div 
          className="h-full animate-flow-light transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`flex-1 flex flex-col justify-center transition-all duration-300 w-full max-w-[320px] ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="mb-8 space-y-2 text-center">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-slate-400 font-mono text-[10px] font-bold">
              PROGRESS: {currentIndex + 1} / {totalCount}
            </span>
          </div>
          {/* Using a smaller font and tighter tracking to prevent wrap where possible */}
          <h2 className="text-lg font-black text-slate-900 leading-tight tracking-tighter">
            {question.text}
          </h2>
        </div>

        <div className="space-y-2.5">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(opt.score, idx)}
              className={`w-full p-4 text-left glass-light rounded-xl transition-all flex items-center space-x-3
                ${selectedIdx === idx ? 'ring-2 ring-black bg-[#b5ff00]/10' : 'active:bg-slate-50'}
              `}
            >
              <div className={`w-8 h-8 flex-shrink-0 rounded-lg border-2 flex items-center justify-center font-black text-xs
                ${selectedIdx === idx ? 'bg-black text-[#b5ff00] border-black' : 'border-slate-200 text-slate-300'}
              `}>
                {opt.label}
              </div>
              <span className={`flex-1 text-sm font-bold leading-snug ${selectedIdx === idx ? 'text-black' : 'text-slate-600'}`}>
                {opt.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="py-6 flex justify-center opacity-10">
         <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Madness Assessment Module</span>
      </div>
    </div>
  );
};

export default Quiz;
