import React, { useState } from "react";
import "./StudentProfile.css";

const StudentProfile = ({ student, onUpdate }) => {
  const [profile, setProfile] = useState({
    phone: student.phone || "",
    branch: student.branch || "",
    year: student.year || "",
  });

  const handleUpdate = async () => {
    const response = await fetch(`http://localhost:8080/api/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      alert("Profile updated successfully!");
      onUpdate(profile); // Call the onUpdate function to update the parent component
    } else {
      alert("Profile update failed!");
    }
  };

  return (
    <div className="profile-container">
      <h1>Student Profile</h1>
      <h3>Name: {student.name}</h3>
      <h3>Email: {student.email}</h3>

      <input
        type="text"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Branch"
        value={profile.branch}
        onChange={(e) => setProfile({ ...profile, branch: e.target.value })}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Year"
        value={profile.year}
        onChange={(e) => setProfile({ ...profile, year: e.target.value })}
      />

      <br />
      <br />

      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default StudentProfile;