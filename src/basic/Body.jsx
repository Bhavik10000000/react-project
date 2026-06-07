import "./App.css";
import { useState } from "react";

export default function Body(props) {
  const [text, updateText] = useState("");

  const toUpper = () => {
    updateText(text.toUpperCase());
  };

  const toLower = () => {
    updateText(text.toLowerCase());
  };

  const clear = () => {
    updateText("");
  };

  // trim() ignores the spaces after entered text
  const char = text.trim().length;

  const word = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;

  const readTime = (0.008 * word).toFixed(3);

  return (
    <>
      <div className="body-main">
        <h2>{props.heading}</h2>
        <textarea
          rows="10"
          value={text}
          onChange={(e) => updateText(e.target.value)}
        />
        <br />
        <div className="buttons">
          <button className="simple" onClick={toUpper}>
            Uppercase
          </button>
          <button className="simple" onClick={toLower}>
            Lowercase
          </button>
          <button className="danger" onClick={clear}>
            Clear
          </button>
        </div>
        <h2>Your text summary</h2>
        <div className="texts">
          <h5>
            Words : {word},Characters : {char}
          </h5>
          <h5>{readTime} Minutes read</h5>
          <h5>Preview : {text}</h5>
        </div>
      </div>
    </>
  );
}
