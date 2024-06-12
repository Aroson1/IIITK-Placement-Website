import React from 'react';

const EmailTemplate = ({ formData }) => {
  const {
    companyName,
    typeOfOrganisation,
    aboutCompany,
    hrName,
    hrEmail,
    hrPhoneNumber,
    hrCompany,
    jobs,
  } = formData;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h2 style={{ color: '#4EDC48' }}>Form Submission Details</h2>
      <h3>Company Details</h3>
      <p><strong>Company Name:</strong> {companyName}</p>
      <p><strong>Type of Organisation:</strong> {typeOfOrganisation}</p>
      <p><strong>About the Company:</strong> {aboutCompany}</p>

      <h3>HR Contact Details</h3>
      <p><strong>Name:</strong> {hrName}</p>
      <p><strong>Email:</strong> {hrEmail}</p>
      <p><strong>Phone Number:</strong> {hrPhoneNumber}</p>
      <p><strong>Company:</strong> {hrCompany}</p>

      <h3>Job Details</h3>
      {jobs.map((job, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>Job Title:</strong> {job.title}</p>
          <p><strong>Type of Offer:</strong> {job.type}</p>
          <p><strong>Job Description:</strong> {job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailTemplate;
