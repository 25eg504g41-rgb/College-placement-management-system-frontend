import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [profile, setProfile] = useState({
    phone: "",
    branch: "",
    year: "",
  });

  const [applications, setApplications] = useState([]);

  const companies = [
    {
      name: "TCS",
      role: "Software Developer",
      location: "Hyderabad",
      package: "4 - 7 LPA",
    },
    {
      name: "Infosys",
      role: "System Engineer",
      location: "Hyderabad",
      package: "3.5 - 6 LPA",
    },
    {
      name: "Wipro",
      role: "Project Engineer",
      location: "Hyderabad",
      package: "3.5 - 6 LPA",
    },
    {
      name: "Accenture",
      role: "Associate Software Engineer",
      location: "Hyderabad",
      package: "4.5 - 7 LPA",
    },
  ];

  // HOME PAGE
  if (page === "home") {
  return (
    <div>
      <h1>Student Placement Portal</h1>

      <button onClick={() => setPage("register")}>
        Student Registration
      </button>

      <br />
      <br />

      <button onClick={() => setPage("login")}>
        Student Login
      </button>

      <br />
      <br />

      <button onClick={() => setPage("companies")}>
        Companies
      </button>

      <br />
      <br />

      <button onClick={() => setPage("admin")}>
        Admin
      </button>
    </div>
  );
}

  // REGISTRATION PAGE
  if (page === "register") {
    return (
      <div>
        <h1>Student Registration</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={student.name}
          onChange={(e) =>
            setStudent({
              ...student,
              name: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={(e) =>
            setStudent({
              ...student,
              email: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={student.password}
          onChange={(e) =>
            setStudent({
              ...student,
              password: e.target.value,
            })
          }
        />

        <br />
        <br />

        <button
          onClick={async () => {
            alert("Register clicked");
  const response = await fetch("http://localhost:8080/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (response.ok) {
    const savedStudent = await response.json();
setStudent(savedStudent);
    alert("Registration successful!");
    setPage("login");
  } else {
    alert("Registration failed!");
  }
}}
            
            
          
        >
          Register
        </button>

        <br />
        <br />

        <button onClick={() => setPage("home")}>
          Back
        </button>
      </div>
    );
  }

  // LOGIN PAGE
  if (page === "login") {
    return (
      <div>
        <h1>Student Login</h1>

        <input
          type="email"
          placeholder="Email"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
        />

        <br />
        <br />

        <button onClick={() => setPage("profile")}>
          Login
        </button>

        <br />
        <br />

        <button onClick={() => setPage("home")}>
          Back
        </button>
      </div>
    );
  }

  // PROFILE PAGE
  // PROFILE PAGE
if (page === "profile") {
  return (
    <div>
      <h1>Student Profile</h1>

      <h3>Name: {student.name}</h3>
      <h3>Email: {student.email}</h3>

      <input
        type="text"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={(e) =>
          setProfile({
            ...profile,
            phone: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Branch"
        value={profile.branch}
        onChange={(e) =>
          setProfile({
            ...profile,
            branch: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Year"
        value={profile.year}
        onChange={(e) =>
          setProfile({
            ...profile,
            year: e.target.value,
          })
        }
      />

      <br />
      <br />

      <button
        onClick={async () => {
          const response = await fetch(
            `http://localhost:8080/api/students/${student.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone: profile.phone,
                branch: profile.branch,
                year: profile.year,
              }),
            }
          );

          if (response.ok) {
            alert("Profile updated successfully!");
          } else {
            alert("Profile update failed!");
          }
        }}
      >
        Update Profile
      </button>

      <br />
      <br />

      <button onClick={() => setPage("companies")}>
        View Companies
      </button>

      <br />
      <br />

      <button onClick={() => setPage("applications")}>
        My Applications
      </button>

      <br />
      <br />

      <button onClick={() => setPage("home")}>
        Home
      </button>
    </div>
  );
}
// COMPANIES PAGE
if (page === "companies") {
  return (
    <div>
      <h1>Companies</h1>

      {companies.map((company, index) => (
        <div key={index} className="company-card">
          <h2>{company.name}</h2>
          <p><b>Role:</b> {company.role}</p>
          <p><b>Location:</b> {company.location}</p>
          <p><b>Package:</b> {company.package}</p>

          <button
            onClick={() => {
              setApplications([...applications, company]);
              alert("Application submitted!");
            }}
          >
            Apply
          </button>
        </div>
      ))}

      <button onClick={() => setPage("profile")}>
        Back to Profile
      </button>

      <button onClick={() => setPage("home")}>
        Home
      </button>
    </div>
  );
}
// ADMIN PAGE
if (page === "admin") {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Total Companies: {companies.length}</h2>
      <h2>Total Applications: {applications.length}</h2>

      <button onClick={() => setPage("companies")}>
        View Companies
      </button>

      <button onClick={() => setPage("applications")}>
        View Applications
      </button>

      <button onClick={() => setPage("home")}>
        Home
      </button>
    </div>
  );
}

  // MY APPLICATIONS PAGE
  if (page === "applications") {
    return (
      <div>
        <h1>My Applications</h1>

        {applications.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          applications.map((company, index) => (    
            <div
              key={index}
              style={{
                border: "1px solid black",
                padding: "15px",
                margin: "15px 0",
                width: "300px",
              }}
            >
              <h2>{company.name}</h2>

              <p>
                <b>Role:</b> {company.role}
              </p>

              <p>
                <b>Location:</b> {company.location}
              </p>

              <p>
                <b>Package:</b> {company.package}
              </p>

              <p>
                <b>Status:</b> Applied
              </p>
            </div>
          ))
        )}

        <button onClick={() => setPage("companies")}>
          Back to Companies
        </button>


        <br />
        <br />
        
        <button onClick={() => setPage("admin")}>
          Back to Admin
        </button>
        
        <button onClick={() => setPage("profile")}>
          Back to Profile
        </button>

        <br />
        <br />

        <button onClick={() => setPage("home")}>
          Home
        </button>
      </div>
    );
  }

  return null;
}

export default App;