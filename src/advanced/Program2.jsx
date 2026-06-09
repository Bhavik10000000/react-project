import React, { useState, useEffect, useMemo, useRef } from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";

const Program1 = ({ onBack }) => {
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program2</h3>
      </span>
      <div className="programs-body">
        <p>Que1</p>
        <Que1 />
        <hr />
        <p>Que2</p>
        <DoubleValueComponent />
        <hr />
        <p>Que3</p>
        <Que3 />
      </div>
    </div>
  );
};
export default Program1;

const Que1 = () => {
  const [count, setCount] = useState(0);
  const [aCount, setAcount] = useState(0);
  const expensive = useMemo(() => {
    console.log("Performing large calculation...");
    return count * 2;
  }, [count]);
  return (
    <div>
      <p>Expensive calculation result : {expensive}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button className="button" onClick={() => setAcount(aCount + 1)}>
        {aCount}
      </button>
    </div>
  );
};

const DoubleValueComponent = () => {
  const [number, setNumber] = useState(0);
  const handleInput = useMemo(() => {
    return number * 2;
  }, [number]);
  return (
    <div>
      <label>Enter a number : </label>
      <input
        className="input"
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <p>Doubled Value : {handleInput}</p>
    </div>
  );
};

const Que3 = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <label>Enter something : </label>
      <input type="text" className="input" ref={inputRef} />
      <button className="button" onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};
// const App = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch("https://api.example.com/data")
//       .then((responce) => response.json())
//       .then((data) => setData(data));
//   }, []);
//   return <div>{data ? JSON.stringify(data) : `Loding...`}</div>;
// };
