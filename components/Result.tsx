
import React, { useRef, useState } from 'react';
import { getResultByScore } from '../constants';
import { DimensionScores } from '../types';

interface ResultProps {
  score: number;
  dimScores: DimensionScores;
  onRestart: () => void;
}

const RadarChart: React.FC<{ scores: DimensionScores, color: string }> = ({ scores, color }) => {
  const d1 = (scores.d1 / 30) * 100;
  const d2 = (scores.d2 / 30) * 100;
  const d3 = (scores.d3 / 30) * 100;
  const aggression = Math.min(100, (d2 * 0.8 + d3 * 0.2));
  const defense = Math.min(100, 100 - (d1 * 0.6 + d2 * 0.2));

  const points = [
    { label: '情绪力', val: d1 },
    { label: '反抗力', val: d2 },
    { label: '摆烂度', val: d3 },
    { label: '攻击性', val: aggression },
    { label: '防御力', val: defense },
  ];

  const size = 200;
  const center = size / 2;
  const radius = 65;

  const getCoords = (i: number, val: number) => {
    const angle = (Math.PI * 2 * i) / points.length - Math.PI / 2;
    const r = (val / 100) * radius;
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  };

  const polyPoints = points.map((p, i) => {
    const { x, y } = getCoords(i, p.val);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative flex justify-center my-1">
      <svg width={size} height={size} className="overflow-visible">
        {[0.2, 0.4, 0.6, 0.8, 1].map((lvl, i) => (
          <polygon
            key={i}
            points={points.map((_, idx) => {
              const { x, y } = getCoords(idx, lvl * 100);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}
        {points.map((_, i) => {
          const { x, y } = getCoords(i, 100);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#f1f5f9" />;
        })}
        <polygon points={polyPoints} fill={`${color}22`} stroke={color} strokeWidth="4" />
        {points.map((p, i) => {
          const { x, y } = getCoords(i, 115);
          return (
            <text key={i} x={x} y={y} fill="#64748b" fontSize="10" fontWeight="900" textAnchor="middle">
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const Result: React.FC<ResultProps> = ({ score, dimScores, onRestart }) => {
  const result = getResultByScore(score);
  const posterRef = useRef<HTMLDivElement>(null);
  const [capturing, setCapturing] = useState(false);

  const generatePoster = async () => {
    if (!posterRef.current) return;
    setCapturing(true);
    try {
      const canvas = await (window as any).html2canvas(posterRef.current, {
        useCORS: true,
        backgroundColor: '#f8fafc',
        scale: 2,
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');
      const win = window.open();
      if (win) {
        win.document.write(`
          <body style="margin:0; background:#f8fafc; display:flex; flex-direction:column; align-items:center; -webkit-overflow-scrolling: touch;">
            <p style="padding:20px; font-family:sans-serif; color:#666; font-size:14px;">长按图片保存疯感报告</p>
            <img src="${imgData}" style="width:100%; height:auto; max-width:600px;" />
          </body>
        `);
      } else {
        alert('海报生成成功，请在弹窗中长按图片保存。');
      }
    } catch (e) {
      console.error(e);
      alert('生成失败，建议直接手机截图保存。');
    }
    setCapturing(false);
  };

  return (
    <div className="h-full w-full overflow-y-auto no-scrollbar flex flex-col items-center bg-slate-50 pt-4 pb-12 px-5">
      {/* Poster Container */}
      <div 
        ref={posterRef}
        className="relative w-full max-w-[340px] bg-white border-[3px] border-black rounded-[32px] p-5 flex flex-col items-center shadow-2xl mb-4 shrink-0"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#b5ff00]/10 rounded-full blur-[40px] -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] -ml-16 -mb-16"></div>
        
        <div className="z-10 w-full flex flex-col items-center">
          <header className="w-full flex justify-center items-center mb-3">
            <span className="text-[10px] font-black tracking-widest bg-black text-[#b5ff00] px-3 py-1 rounded-full italic">报告分析完成</span>
          </header>

          <div className="text-center mb-1">
            <h4 className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-black mb-1">我的职场疯感称号</h4>
            <h2 className="text-3xl font-black italic tracking-tighter text-slate-900 mb-1">
              {result.title}
            </h2>
          </div>

          <div className="flex flex-col items-center mb-1">
             <div className="flex items-baseline text-7xl font-black text-slate-900 leading-none tracking-tighter">
                {result.percentage}
                <span className="ml-1 text-5xl opacity-80">%</span>
             </div>
             <div className="mt-2 text-[8px] font-bold text-slate-400 uppercase tracking-[0.3em] border-t border-slate-100 pt-2 w-full text-center">
               Madness Level Assessment
             </div>
          </div>

          <RadarChart scores={dimScores} color={result.color} />

          <div className="w-full space-y-2 mt-1">
            <div className="text-center px-1">
               <p className="handwriting text-2xl text-slate-900 leading-tight">
                 “{result.advice.split('。')[0]}”
               </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl space-y-2.5">
              <div>
                <h5 className="text-[9px] text-black font-black uppercase tracking-widest mb-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#b5ff00] border border-black rounded-full mr-1.5"></span> 人格画像
                </h5>
                <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                  {result.description}
                </p>
              </div>
              
              <div className="pt-2 border-t border-slate-200/50">
                 <h5 className="text-[9px] text-black font-black uppercase tracking-widest mb-1 flex items-center">
                   <span className="w-1.5 h-1.5 bg-black rounded-full mr-1.5"></span> 生存指南
                 </h5>
                 <p className="text-slate-600 text-[11px] leading-relaxed italic font-bold">
                   {result.advice}
                 </p>
              </div>
            </div>
          </div>

          {/* Restored Minimalist Footer */}
          <footer className="w-full mt-4 pt-2 border-t border-dashed border-slate-200 flex justify-center items-center opacity-40">
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400">Madness Lab Original</span>
          </footer>
        </div>
      </div>

      {/* Buttons Container */}
      <div className="w-full max-w-[340px] flex flex-col space-y-2 shrink-0">
        <button 
          onClick={generatePoster}
          disabled={capturing}
          className="w-full py-3.5 bg-black text-[#b5ff00] font-black text-base rounded-2xl shadow-xl active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center"
        >
          {capturing ? '生成中...' : '保存我的疯感海报'}
        </button>
        <button 
          onClick={onRestart}
          className="w-full py-2 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-black transition-colors"
        >
          重新测试
        </button>
      </div>
    </div>
  );
};

export default Result;
