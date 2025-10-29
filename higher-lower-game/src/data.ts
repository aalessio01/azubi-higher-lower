import type { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Welche Website ist älter?",
    options: [
      { text: "Welt", isCorrect: true, imageUrl: "/images/welt.png", },
      { text: "Bild", isCorrect: false, imageUrl: "/images/bild.png", },
      
    ],
  },
  {
    id: 2,
    question: "Welches Land liegt in Europa?",
    options: [
      { text: "Brasilien", isCorrect: false, imageUrl: "/images/dolphin.jpg", },
      { text: "Italien", isCorrect: true, imageUrl: "/images/dolphin.jpg", },
    ],
  },
];