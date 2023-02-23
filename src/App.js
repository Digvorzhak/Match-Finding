import React, { useState } from "react";
import teams from "./data";
import Card from "./Card";
import "./App.css";

function App() {
  const [badGuess, setBadGuess] = useState(0);
  const [GoodGuess, setGoodGuess] = useState(0);
  const [position, setPosition] = useState(0);

  const handleLie = () => {
    if (position < teams.length) {
      if (teams[position].isFake) {
        setGoodGuess((prev) => prev + 1);
      } else {
        setBadGuess((prev) => prev + 1);
      }
      setPosition((prev) => prev + 1);
      console.log(position);
    }
  };

  const handleTruth = () => {
    if (position < teams.length) {
      if (teams[position].isFake) {
        setBadGuess((prev) => prev + 1);
      } else {
        setGoodGuess((prev) => prev + 1);
      }
      setPosition((prev) => prev + 1);
      console.log(position);
    }
  };

  return (
    <div>
      <div className="score-container">
        <span className="span-bad">{badGuess}</span>
        <span className="span-good">{GoodGuess}</span>
      </div>
      {position < teams.length ? <Card image={teams[position].image} title={teams[position].title}></Card> : `${GoodGuess}/${teams.length} Correct answers.`}
      <div className="score-container">
        <button onClick={handleLie}>FALSE</button>
        <button onClick={handleTruth}>TRUE</button>
      </div>
    </div>
  );
}

export default App;
