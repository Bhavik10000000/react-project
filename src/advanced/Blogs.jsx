import React from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  const array = [
    { id: 1, msg: "Bhavik Sapat" },
    { id: 2, msg: "Talha Khan" },
    { id: 3, msg: "Daksh Sevkani" },
    { id: 4, msg: "Pratham Patil" },
    { id: 5, msg: "Sachin Gupta" },
  ];
  return (
    <>
      <h2>This are Blogs.</h2>
      {array.map((e) => (
        <li key={e.id}>
          <Link to={`/blog/${e.id}`}>
            Blog:{e.id} | {e.msg}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Blogs;
