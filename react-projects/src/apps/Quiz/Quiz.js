import React, { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    answer: "Paris",
  },
  {
    question: "React is mainly used for building ___",
    options: ["Databases", "User Interfaces", "Mobile Apps"],
    answer: "User Interfaces",
  },
];

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="result">
          <h2>
            Your Score: {score}/{questions.length}
          </h2>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h3>
            Question {currentIndex + 1}/{questions.length}
          </h3>
          <h2>{questions[currentIndex].question}</h2>
          <div className="options">
            {questions[currentIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
