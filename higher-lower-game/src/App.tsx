import { useState, type JSX } from "react";
import { QUESTIONS } from "./data";
import "./App.css";

export default function App(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  
  const quizEnded = current >= QUESTIONS.length;

    function handleAnswer(isCorrect: boolean) {
    if (answered || quizEnded) return;
    setAnswered(true);
    if (isCorrect) {
      setScore((s) => s + 1);
      setMessage("Richtig!");
      setTimeout(() => {
        setMessage("");
        setAnswered(false);
        setCurrent((i) => i + 1);
      }, 1500);
    } else {
      setMessage("Falsch");
      setShowTryAgain(true);
    }
  }

  function handleTryAgain() {
    setMessage("");
    setShowTryAgain(false);
    setAnswered(false);
  }

  function handleResetQuiz() {
    setScore(0);
    setCurrent(0);
    setMessage("");
    setAnswered(false);
    setShowTryAgain(false);
  }

  if (quizEnded) {
    return (
      <div className="quiz-container">
        <h2 className="question">Quiz beendet!</h2>
        <p className="score-end">Fragen beantwortet: {score}/?</p>
        <button className="reset-btn" onClick={handleResetQuiz}>
          Erneut starten
        </button>
      </div>
    );
  }

  const question = QUESTIONS[current];

  return (
   <div className="quiz-container">
      <h2 className="question">{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={`${question.id}-${index}`}
            className={`option ${index === 0 ? "left" : "right"}`}
            onClick={() => handleAnswer(option.isCorrect)}
            style={{ "--bg-url": `url(${option.imageUrl})` } as React.CSSProperties}
            disabled={answered}>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
      {message && <div className="message">{message}</div>}
      {showTryAgain && (
        <button className="try-again-btn" onClick={handleTryAgain}>
          Erneut Versuchen
        </button>
      )}

      <div className="score">Score: {score}</div>
    </div>
  );
}