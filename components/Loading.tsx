
import React, { useEffect } from 'react';

interface LoadingProps {
  onFinished: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(onFinished, 2500);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-8 animate-in fade-in zoom-in duration-500 bg-white">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-8 border-slate-50 rounded-full"></div>
        <div className="absolute inset-0 border-8 border-transparent border-t-[#b5ff00] rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-slate-900 font-black text-xl italic">
          %
        </div>
      </div>
      
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
          深度解析中...
        </h3>
        <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em]">
          [ 正在解析精神防御机制 ]<br/>
          [ 扫描职场离职基因深度 ]
        </p>
      </div>

      <div className="w-full max-w-[160px] h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-100">
        <div className="absolute top-0 left-0 h-full bg-[#b5ff00] animate-loading-bar w-full"></div>
      </div>
    </div>
  );
};

export default Loading;
