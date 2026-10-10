import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h2 className="company-name">{company.name}</h2>
      <p className="company-role"><strong>Role:</strong> {company.role}</p>
      <p className="company-location"><strong>Location:</strong> {company.location}</p>
      <p className="company-package"><strong>Package:</strong> {company.package}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default CompanyCard;