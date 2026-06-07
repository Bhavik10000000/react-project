import React, { useState } from "react";
import "./App.css";
import { BsArrowLeft } from "react-icons/bs";
import Program1 from "./basic/Program1";
import Program2 from "./basic/Program2";
import Program3 from "./basic/Program3";
import Program4 from "./basic/Program4";
import Program5 from "./basic/Program5";
import Program6 from "./basic/Program6";
import Program7 from "./basic/Program7";
import Program8 from "./basic/Program8";
import Program9 from "./basic/Program9";

const Basic = ({ onBack }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [program, setProgram] = useState(null);

  const programs = {
    1: <Program1 onBack={() => setProgram(null)} />,
    2: <Program2 onBack={() => setProgram(null)} />,
    3: <Program3 onBack={() => setProgram(null)} />,
    4: <Program4 onBack={() => setProgram(null)} />,
    5: <Program5 onBack={() => setProgram(null)} />,
    6: <Program6 onBack={() => setProgram(null)} />,
    7: <Program7 onBack={() => setProgram(null)} />,
    8: <Program8 onBack={() => setProgram(null)} />,
    9: <Program9 onBack={() => setProgram(null)} />,
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
        <h3 className="heading3">Basic ReactJS programs</h3>
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

export default Basic;
