import { useState } from "react";

function StudentRegistration() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      const savedStudent = await response.json();
      alert("Registration successful!");
      // Redirect or perform additional actions here
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <div className="registration-container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={student.name}
          onChange={(e) =>
            setStudent({ ...student, name: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={(e) =>
            setStudent({ ...student, email: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={student.password}
          onChange={(e) =>
            setStudent({ ...student, password: e.target.value })
          }
          required
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default StudentRegistration;