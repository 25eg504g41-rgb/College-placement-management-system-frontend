import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you will create a Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Student Placement Portal</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;