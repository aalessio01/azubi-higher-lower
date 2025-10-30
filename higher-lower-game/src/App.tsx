import { useState, type JSX } from "react";
import { QUESTIONS } from "./data";
import "./App.css";

export default function App(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [isMessageCorrect, setIsMessageCorrect] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [highlightCorrect, setHighlightCorrect] = useState<number | null>(null);
  const [highlightIncorrect, setHighlightIncorrect] = useState<number | null>(null);
  
  const quizEnded = current >= QUESTIONS.length;

    function handleAnswer(isCorrect: boolean, index: number) {
    if (answered || quizEnded) return;
    setAnswered(true);
    const feedbackText = isCorrect
    ? question.feedback.correct
    : question.feedback.incorrect;
    if (isCorrect) {
      setScore((s) => s + 1);
      setMessage(feedbackText);
      setIsMessageCorrect(true);
      setHighlightCorrect(index);
      setTimeout(() => {
        setMessage("");
        setIsMessageCorrect(null);
        setAnswered(false);
        setHighlightCorrect(null);
        setCurrent((i) => i + 1);
      }, 1500);
    } else {
      setMessage(feedbackText);
      setIsMessageCorrect(false);
      setHighlightIncorrect(index);
      setShowTryAgain(true);
    }
  }

  function handleTryAgain() {
    setMessage("");
    setIsMessageCorrect(null);
    setShowTryAgain(false);
    setAnswered(false);
    setHighlightCorrect(null);
    setHighlightIncorrect(null);
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
        <p className="score-end">Fragen beantwortet: {score}/{QUESTIONS.length}</p>
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
            className={`option ${index === 0 ? "left" : "right"} ${highlightCorrect === index ? "correct" : ""} ${highlightIncorrect === index ? "incorrect" : ""}`}
            onClick={() => handleAnswer(option.isCorrect, index)}
            style={{ "--bg-url": `url(${option.imageUrl})` } as React.CSSProperties}
            disabled={answered}>
          <span>{option.text}</span>
          </button>
        ))}
      </div>
      {message && (
        <div className={`feedback-container ${isMessageCorrect ? "correct-feedback" : "incorrect-feedback"}`}>
      {message}
        </div>
      )}
      {showTryAgain && (
        <button className="try-again-btn" onClick={handleTryAgain}>
          Erneut Versuchen
        </button>
      )}
      <div className="score">Beantwortete Fragen: {score}/{QUESTIONS.length}</div>
    </div>
  );
}