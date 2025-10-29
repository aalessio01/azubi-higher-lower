import type { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Welche Website ist älter?",
    options: [
      { text: "Welt", isCorrect: true, imageUrl: "/images/welt.png", },
      { text: "Bild", isCorrect: true, imageUrl: "/images/bild.png", },
    ],
    feedback: {
      correct: "Richtig – beide Websites gab es seit 1996",
      incorrect: "Falsch",
    },
  },
  {
    id: 2,
    question: "In welchem Jahr wurde Axel Springer gegründet?",
    options: [
      { text: "1964", isCorrect: false, imageUrl: "/images/1964.png", },
      { text: "1946", isCorrect: true, imageUrl: "/images/1946.png", },
    ],
    feedback: {
      correct: "Richtig – der Verlag wurde 1946 von Axel Springer gegründet",
      incorrect: "Falsch – 1964 existierte Axel Springer schon seit 18 Jahren",
    },
  },
  {
    id: 3,
    question: "Wer ist CEO bei Axel Springer?",
    options: [
      { text: "Dr. Mathias Döpfner", isCorrect: true, imageUrl: "/images/Mathias.png", },
      { text: "Mark Dekan", isCorrect: false, imageUrl: "/images/Mark.png", },
    ],
    feedback: {
      correct: "Richtig – Dr. Mathias Döpfner ist der derzeitige CEO Axel Springers",
      incorrect: "Falsch – Mark Dekan ist der derzeitige CFO Axel Springers",
    },
  },
  {
    id: 4,
    question: "Wie hieß der erste Computer der bei Axel Springer im Einsatz war?",
    options: [
      { text: "Zuse Z2", isCorrect: false, imageUrl: "/images/Zuse.png", },
      { text: "4404-05", isCorrect: true, imageUrl: "/images/4404-05.png", },
    ],
    feedback: {
      correct: "Richtig – der 1973 eingesetzte Computer hieß 4404-05",
      incorrect: "Falsch – der Z2 Zuse war einer der ersten Computer des Jahres 1939",
    },
  },
];