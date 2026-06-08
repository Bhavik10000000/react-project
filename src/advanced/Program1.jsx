import React from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Blog from "./Blog";
import Blogs from "./Blogs";

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
        <App />
      </div>
    </div>
  );
};
export default Program1;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/blogs">Blogs</Link>
        <br />
        {/* <Link to="/blog/:id">Blog</Link> */}
      </nav>
      <Routes>
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blog/:id" Component={Blog} />
      </Routes>
    </BrowserRouter>
  );
};
