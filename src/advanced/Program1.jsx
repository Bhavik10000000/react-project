import React, { useState } from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, Routes, Route, Link, Outlet } from "react-router-dom";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Dashboard from "./Dashboard";
import Home from "./Home";
const Program1 = ({ onBack }) => {
  return (
    <div>
      <span className="span1">
        <button onClick={onBack} className="backButton">
          <BsArrowLeft size={20} />
        </button>
        <h3 className="heading3">Program1</h3>
      </span>
      <div className="programs-body">
        <p>Que 1</p>
        <Que1 />
        <hr />
        <p>Que 2</p>
        <Login />
        <Routes>
          <Route path="blogs" Component={Blogs} />
          <Route path="blog/:id" Component={Blog} />
          <Route path="dashboard" Component={Dashboard} />
          <Route path="home" Component={Home} />
        </Routes>
      </div>
    </div>
  );
};
export default Program1;

const Que1 = () => {
  return (
    <nav>
      <Link to="blogs">Blogs</Link>
    </nav>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const [pass, setPass] = useState();
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin") {
      navigate("dashboard");
    } else {
      navigate("home");
    }
  };
  return (
    <>
      <form>
        <label>Username </label>
        <input className="input" type="text" onChange={handleUsername} />
        <br />
        <label>Password </label>
        <input type="password" className="input" onChange={handlePass} />
        <br />
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
