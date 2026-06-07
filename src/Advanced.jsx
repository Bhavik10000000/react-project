import React, { useState } from "react";
import "./App.css";
import { BsArrowLeft } from "react-icons/bs";
import Program1 from "./advanced/Program1";
import Program2 from "./advanced/Program2";
import Program3 from "./advanced/Program3";

const Advanced = ({ onBack }) => {
  const array = [1, 2, 3];
  const [program, setProgram] = useState(null);

  const programs = {
    1: <Program1 onBack={() => setProgram(null)} />,
    2: <Program2 onBack={() => setProgram(null)} />,
    3: <Program3 onBack={() => setProgram(null)} />,
  };
  if (program && programs[program]) {
    return programs[program];
  }
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Advanced ReactJS programs</h3>
      </span>
      <ol>
        {array.map((item) => (
          <>
            <button onClick={() => setProgram(item)} className="programButton">
              Program {item}
            </button>
            <br />
          </>
        ))}
      </ol>
    </div>
  );
};

export default Advanced;
