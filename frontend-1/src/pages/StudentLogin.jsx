import React, { useState } from "react";
import "./StudentLogin.css"; // Assuming you will create a separate CSS file for styling

const StudentLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/students/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const studentData = await response.json();
      onLogin(studentData); // Assuming onLogin is a prop function to handle successful login
      alert("Login successful!");
    } else {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1>Student Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

      <br />
      <br />

      <button onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default StudentLogin;