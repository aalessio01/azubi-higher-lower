import { useState, type JSX } from "react";
import { data } from "./data";
import type { Item } from "./types";
import "./App.css";

function randomItem(excludeId?: number): Item {
  const pool = data.filter(item => item.id !== excludeId);
  if (pool.length === 0) return data[0];
  return pool[Math.floor(Math.random() * pool.length)];
}

const initialLeft = randomItem(-1);
const initialRight = randomItem(initialLeft.id);

export default function App(): JSX.Element {
const [left, setLeft] = useState<Item>(initialLeft);
const [right, setRight] = useState<Item>(initialRight);
const [score, setScore] = useState<number>(0);
const [message, setMessage] = useState<string>("");

  function nextRound(isHigher: boolean) {
  const correct = (isHigher && right.value > left.value) || (!isHigher && right.value < left.value);

    if (correct) {
      setScore((s) => s + 1);
      setMessage("Richtig!");
      setLeft(right);
      setRight(randomItem(right.id));
    } else {
      setMessage("Falsch — Game Over! Dein Score: ${score}");
      setScore(0);
      const newLeft = randomItem(-1);
      setLeft(newLeft);
      setRight(randomItem(newLeft.id));
    }
  
  setTimeout(() => setMessage(""), 1800);
}

  return (
<div className="min-h-screen flex">
<section
className="w-1/2 relative flex items-center justify-center overflow-hidden"
aria-label="Left item"
>
<div
className="absolute inset-0 bg-cover bg-center filter brightness-50"
style={{ backgroundImage: `url('${left.imageUrl}')` }}
/>


<div className="relative z-10 p-8 max-w-sm text-center text-white">
<div className="bg-black bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
<h3 className="text-2xl font-bold">{left.name}</h3>
<p className="mt-2 text-lg">Wert: <span className="font-mono">{left.value}</span></p>
</div>
</div>
</section>

<section
className="w-1/2 relative flex items-center justify-center overflow-hidden flex-col"
aria-label="Right item and controls"
>
<div
className="absolute inset-0 bg-cover bg-center filter brightness-50"
style={{ backgroundImage: `url('${right.imageUrl}')` }}
/>


<div className="relative z-10 p-8 max-w-sm text-center text-white">
<div className="bg-black bg-opacity-40 rounded-xl p-6 backdrop-blur-sm">
<h3 className="text-2xl font-bold">{right.name}</h3>
<p className="mt-2 text-lg">Wert: <span className="font-mono">???</span></p>
<p className="mt-4 text-sm opacity-80">Ist dieses Item höher oder niedriger als das linke?</p>


<div className="mt-6 flex gap-4 justify-center">
<button
onClick={() => nextRound(true)}
className="px-6 py-2 rounded-md border border-white/20 hover:scale-105 transform transition"
aria-label="Higher"
>
Higher
</button>


<button
onClick={() => nextRound(false)}
className="px-6 py-2 rounded-md border border-white/20 hover:scale-105 transform transition"
aria-label="Lower"
>
Lower
</button>
</div>


<p className="mt-4 opacity-90">Score: <span className="font-bold">{score}</span></p>


{message && (
<div className="mt-4 p-3 bg-white/10 rounded-md text-sm">{message}</div>
)}
</div>
</div>
</section>
</div>
);
}