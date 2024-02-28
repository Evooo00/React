import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "-", "+", "."];

  const submitResult = () => {
    return setResult(eval(calc));
  };

  const clearCalc = () => {
    setCalc("");
    setResult("");
  };

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && operators.includes(calc.slice(-1))) ||
      (operators.includes(value) && calc === "")
    ) {
      return;
    }

    setCalc(calc + value);
  };
  return (
    <div className="container">
      <div className="result">
        {result ? <span className="fullResult">{result}</span> : ""}
        {calc || "0"}
      </div>

      <button className="clear" onClick={() => clearCalc()}>
        AC
      </button>
      <button className="divide" onClick={() => updateCalc("/")}>
        /
      </button>

      <button className="number7 number" onClick={() => updateCalc("7")}>
        7
      </button>
      <button className="number8 number" onClick={() => updateCalc("8")}>
        8
      </button>
      <button className="number9 number" onClick={() => updateCalc("9")}>
        9
      </button>
      <button className="multiplication" onClick={() => updateCalc("*")}>
        *
      </button>

      <button className="number4 number" onClick={() => updateCalc("4")}>
        4
      </button>
      <button className="number5 number" onClick={() => updateCalc("5")}>
        5
      </button>
      <button className="number6 number" onClick={() => updateCalc("6")}>
        6
      </button>
      <button className="minus" onClick={() => updateCalc("-")}>
        -
      </button>

      <button className="number1 number" onClick={() => updateCalc("1")}>
        1
      </button>
      <button className="number2 number" onClick={() => updateCalc("2")}>
        2
      </button>
      <button className="number3 number" onClick={() => updateCalc("3")}>
        3
      </button>
      <button className="plus" onClick={() => updateCalc("+")}>
        +
      </button>

      <button className="number0 number" onClick={() => updateCalc("0")}>
        0
      </button>
      <button className="dot number" onClick={() => updateCalc(".")}>
        .
      </button>
      <button className="equal" onClick={() => submitResult()}>
        =
      </button>
    </div>
  );
}

export default App;
