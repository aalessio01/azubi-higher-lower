import { useState } from "react";
import { data } from "./data";
import type { Item } from "./types";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [left, setLeft] = useState<Item>(() => randomItem());
  const [right, setRight] = useState<Item>(() => randomItem());

  function randomItem(): Item {
    return data[Math.floor(Math.random() * data.length)];
  }

  function nextRound(isHigher: boolean) {
    const correct =
      (isHigher && right.value > left.value) ||
      (!isHigher && right.value < left.value);

    if (correct) {
      setScore(score + 1);
      setLeft(right);
      setRight(randomItem());
    } else {
      alert(`Game Over! Dein Score: ${score}`);
      setScore(0);
      setLeft(randomItem());
      setRight(randomItem());
    }
  }

  return (
    <div className="game">
      <h1>Higher Lower Game</h1>

      <div className="cards">
        <div className="card">
          <h2>{left.name}</h2>
          <p>{left.value}</p>
        </div>
        <div className="card">
          <h2>{right.name}</h2>
          <p>???</p>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => nextRound(true)}>Higher</button>
        <button onClick={() => nextRound(false)}>Lower</button>
      </div>

      <p className="score">Score: {score}</p>
    </div>
  );
}

export default App;