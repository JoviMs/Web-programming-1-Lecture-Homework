import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="controls">
        <button onClick={() => setCount((c) => c - step)}>−</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="step-control">
        <label>Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
        />
      </div>
    </div>
  );
}

export default Counter;
