import React from "react";
import QA from "./components/QA";
import "./App.css";
import questions from "./data";

function App() {
  return (
    <div className="app">
    <img src="images/batman.png" alt="batmanlogo"/>

      <header className="app--header">
        <h1 className="header--title">Questions and answers about BATMAN</h1>
      </header>
      <ul className="questions--container">
        {questions.map((question) => (
          <QA key={question.id} questions={question} />
        ))}
      </ul>
    </div>
  );
}

export default App;
