import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you will create a Home.css for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Student Placement Portal</h1>

      <div className="home-buttons">
        <button className="home-button" onClick={() => navigate("/register")}>
          Student Registration
        </button>

        <button className="home-button" onClick={() => navigate("/login")}>
          Student Login
        </button>

        <button className="home-button" onClick={() => navigate("/companies")}>
          View Companies
        </button>

        <button className="home-button" onClick={() => navigate("/admin")}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default Home;