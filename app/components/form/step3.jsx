import React from "react";

const Step3 = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="form-step">
      <h2>Step 3: Review and Submit</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <button type="button" onClick={prevStep}>
        Previous
      </button>
      <button type="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
};

export default Step3;
