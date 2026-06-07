import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";
import "../App.css";
import "./App1.css";
const About = () => {
  const { count, increment, decrement, incrementTwo, decrementTwo } =
    useContext(CounterContext);
  return (
    <div>
      <div className="center">
        <h2>Count : {count}</h2>
        <button className="button" onClick={increment}>
          Inc 1
        </button>
        <button className="button" onClick={decrement}>
          Dec 1
        </button>
        <button className="button" onClick={incrementTwo}>
          Inc 2
        </button>
        <button className="button" onClick={decrementTwo}>
          Dec 2
        </button>
      </div>
    </div>
  );
};

export default About;
