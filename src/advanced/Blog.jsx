import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog {id}</h2>
      <p>Info</p>
    </div>
  );
};

export default Blog;
