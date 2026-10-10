import React from 'react';
import { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';
import './Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch('http://localhost:8080/api/applications');
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <div className="applications-container">
      <h1>My Applications</h1>

      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        applications.map((application, index) => (
          <CompanyCard key={index} company={application} />
        ))
      )}

      <div className="navigation-buttons">
        <button onClick={() => window.history.back()}>Back</button>
        <button onClick={() => window.location.href = '/companies'}>View Companies</button>
      </div>
    </div>
  );
};

export default Applications;