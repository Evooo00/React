import "./App.css";
import React, { useState } from "react";
import { data } from "./QandA";
import SingleQuestion from "./questions";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="app">
      <div className="container">
        <h2 className="titleOfContainer">Questions and Answers</h2>
        <section>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
