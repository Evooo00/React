import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./App.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState("");
  return (
    <div className="questionBox">
      <div className="header">
        <p>{title}</p>
        <button
          className="questionButton"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;
