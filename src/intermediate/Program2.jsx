import React, { useState } from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";

const Program2 = ({ onBack }) => {
  const [userName, setUserName] = useState("");
  const [whatIs, setWhatIs] = useState("Logged Out");
  const [whatNot, setWhatNot] = useState("Logged In");
  const check = () => {
    if (userName === "Bhavik") {
      let temp = whatIs;
      setWhatIs(whatNot === "Logged In" ? "Logged In" : "Logged Out");
      setWhatNot(temp === "Logged Out" ? "Logged Out" : "Logged In");
    }
  };
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program2</h3>
      </span>
      <div className="programs-body">
        <div>
          <h2>{whatIs}</h2>
          <h3>
            Name :{" "}
            {whatIs === "Logged Out" ? (
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            ) : (
              <h3>{userName}</h3>
            )}
          </h3>
          <button onClick={check}>
            {whatNot === "Logged In" ? "Log In" : "Log Out"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};
export default Program2;
