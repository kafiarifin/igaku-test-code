import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 class="display-4">Welcome to Igaku Todo test</h1>
        <p className="lead">Let's make your todo list!</p>
        <Link to="/login" className="btn btn-info">
          Login
        </Link>
        <Link to="/register" className="btn btn-success ml-3">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;