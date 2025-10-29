import { useState, type JSX } from "react";
import { QUESTIONS } from "./data";
import "./App.css";

export default function App(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const question = QUESTIONS[current];

    function handleAnswer(isCorrect: boolean) {
    if (isCorrect) {
      setScore((s) => s + 1);
      setMessage("Richtig!");
    } else {
      setMessage("Falsch");
    }

    setTimeout(() => {
      setMessage("");
      setCurrent((i) => (i + 1) % QUESTIONS.length);
    }, 1500);
  }

  return (
   <div className="quiz-container">
    <h2 className="question">{question.question}</h2>

  <div className="options">
    {question.options.map((option, index) => (
      <button
        key={index}
        className={`option ${index === 0 ? "left" : "right"}`}
        onClick={() => handleAnswer(option.isCorrect)}
        style={
          {
            "--bg-url": `url('${option.imageUrl}')`,
          } as React.CSSProperties
        }
      >
        <span>{option.text}</span>
      </button>
    ))}
  </div>

  <div className="message">{message}</div>
  <div className="score">Score: {score}</div>
</div>
  );
}