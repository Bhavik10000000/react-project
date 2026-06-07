import React from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import Body from "./Body";
import Navbar from "./Navbar";

const Program9 = ({ onBack }) => {
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program9</h3>
      </span>
      <div className="programs-body">
        <div>
          <Navbar />
          <Body heading="Enter the text here" />
        </div>
      </div>
    </div>
  );
};
export default Program9;
