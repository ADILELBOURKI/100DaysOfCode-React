import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="links">
      <Link to="/colorful-squares">Day-1 100 days of code</Link>
      <Link to="/recipes">Day-3 100 days of code</Link>
    </div>
  );
};

export default Home;
