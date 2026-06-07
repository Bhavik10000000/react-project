import "./App.css";
import { MainContext } from "./context/MainContext";
import { useContext } from "react";
import { BsCircleHalf } from "react-icons/bs";

const Navbar = () => {
  const { invertedTheme, handleTheme } = useContext(MainContext);
  return (
    <div>
      <div className="navbar">
        <img type="png" src="logo.png" className="logoImage" />
        <div className="mainHeading">ReactJs Programs</div>
        <button onClick={handleTheme} className="toggleButton">
          <BsCircleHalf size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
