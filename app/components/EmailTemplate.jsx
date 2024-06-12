import * as React from "react";

export const EmailTemplate = ({ formData }) => {
  const {
    companyName,
    typeOfOrganisation,
    aboutCompany,
    name,
    email,
    phoneNumber,
    company,
    jobs,
  } = formData;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h2 style={{ color: "#4EDC48" }}>Form Submission Details</h2>
      <h3>Company Details</h3>
      <p>
        <strong>Company Name:</strong> {companyName}
      </p>
      <p>
        <strong>Type of Organisation:</strong> {typeOfOrganisation}
      </p>
      <p>
        <strong>About the Company:</strong> {aboutCompany}
      </p>

      <h3>HR Contact Details</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>

      <h3>Job Details</h3>
      {jobs.map((job, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>
            <strong>Job Title:</strong> {job.jobTitle}
          </p>
          <p>
            <strong>Type of Offer:</strong> {job.typeOfOffer}
          </p>
          <p>
            <strong>Job Description:</strong> {job.jobDescription}
          </p>
        </div>
      ))}
    </div>
  );
};
