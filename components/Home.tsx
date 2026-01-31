
import React from 'react';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden animate-in fade-in duration-1000">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-12 w-40 h-40 border border-black/5 rounded-full rotate-45 pointer-events-none"></div>
      <div className="absolute top-1/3 -right-8 w-24 h-24 bg-[#b5ff00]/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="w-full max-w-[320px] flex flex-col items-center text-center">
        
        {/* Header Section */}
        <div className="relative mb-2 w-full flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-3 opacity-60">
             <div className="w-6 h-[1.5px] bg-slate-900"></div>
             <span className="text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase">Official Assessment</span>
             <div className="w-6 h-[1.5px] bg-slate-900"></div>
          </div>
          <span className="text-7xl font-black text-slate-900 leading-none italic select-none tracking-tighter">职场</span>
        </div>

        <div className="h-10"></div>

        {/* Main Title Section */}
        <div className="relative mb-20">
          <h1 className="flex flex-col items-center tracking-tight italic select-none">
            <div className="relative inline-block">
              <span className="block text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b5ff00] via-[#00f0ff] to-[#b5ff00] bg-[length:200%_auto] animate-flow-light drop-shadow-sm leading-none py-2 px-6 -mx-6">
                疯感等级
              </span>
              
              <div className="absolute -bottom-6 right-0 translate-x-1/4">
                 <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-md border border-slate-200 px-2 py-1 rounded-full shadow-sm transform rotate-2">
                    <div className="w-2 h-2 rounded-full bg-[#b5ff00] animate-pulse shadow-[0_0_8px_#b5ff00]"></div>
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Psych Lab</span>
                    <span className="text-[10px] font-black text-slate-800">测试</span>
                 </div>
              </div>
            </div>
          </h1>
        </div>
        
        {/* Slogan */}
        <div className="space-y-4 mb-20">
          <p className="text-slate-500 text-sm font-bold leading-relaxed">
            探测你灵魂深处的崩溃指数<br/>
            <span className="relative inline-block mt-3">
              <span className="relative z-10 text-black px-1 italic">疯，是清醒者的唯一出路。</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#b5ff00]/40 -rotate-1"></span>
            </span>
          </p>
        </div>

        {/* Start Button */}
        <div className="w-full">
          <button 
            onClick={onStart}
            className="group relative w-full py-5 bg-black text-[#b5ff00] font-black text-xl italic uppercase tracking-tighter rounded-3xl shadow-2xl overflow-hidden active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-[#b5ff00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10"></div>
            <div className="flex items-center justify-center space-x-3 relative z-10">
              <span>立即开启探测</span>
              <div className="w-6 h-6 rounded-full bg-[#b5ff00] text-black flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
          
          <div className="mt-10 flex justify-center items-center space-x-4 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse delay-75"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
