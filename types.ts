
export enum AppPhase {
 HOME = 'HOME',
 QUIZ = 'QUIZ',
 LOADING = 'LOADING',
 RESULT = 'RESULT'
}

export interface Question {
 id: number;
 dimension: number; // 1, 2, or 3
 text: string;
 options: {
   label: string;
   text: string;
   score: number;
 }[];
}

export interface DimensionScores {
 d1: number;
 d2: number;
 d3: number;
}

export interface ResultInfo {
 title: string;
 percentage: number;
 description: string;
 advice: string;
 color: string;
}
