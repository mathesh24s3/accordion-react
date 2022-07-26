import React from "react";

export default function QA({ questions }) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <li>
      <div>
        <h4 className="question">{questions.question}</h4>
        <button className="btn" onClick={()=>setShowAnswer(!showAnswer)}>{showAnswer? "-" : "+"}</button>
      </div>
      {showAnswer && <p className="answer">{questions.answer}</p>}
    </li>
  );
}
