// 

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/tasks" className="nav-link">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newtask" className="nav-link">
                New Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newhabits" className="nav-link">
                New Habits
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/habits" className="nav-link">
                Habits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
