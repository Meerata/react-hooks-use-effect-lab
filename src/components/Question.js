import React, { useState, useEffect } from "react";

const Question = ({ question, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        onAnswered(false); // Call onAnswered callback when time runs out
        setTimeRemaining(10); // Reset timeRemaining for next question
      }
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
};

export default Question;
