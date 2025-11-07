export type Question = {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean; imageUrl: string; }[];
  feedback: { correct: string; incorrect: string;}
};