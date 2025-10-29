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
    question: "In welchem Jahr wurde Axel Springer gegründet?",
    options: [
      { text: "1964", isCorrect: false, imageUrl: "/images/1964.png", },
      { text: "1946", isCorrect: true, imageUrl: "/images/1946.png", },
    ],
  },
  {
    id: 3,
    question: "Wer ist CEO bei Axel Springer?",
    options: [
      { text: "Dr. Mathias Döpfner", isCorrect: true, imageUrl: "/images/Mathias.png", },
      { text: "Mark Dekan", isCorrect: false, imageUrl: "/images/Mark.png", },
    ],
  },
  {
    id: 4,
    question: "Wie hieß der erste Computer der bei Axel Springer im Einsatz war?",
    options: [
      { text: "Zuse Z2", isCorrect: false, imageUrl: "/images/Zuse.png", },
      { text: "4404-05", isCorrect: true, imageUrl: "/images/4404-05.png", },
    ],
  },
];