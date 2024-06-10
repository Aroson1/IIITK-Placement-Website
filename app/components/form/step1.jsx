import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="form-step">
      <h2>Step 1: Personal Information</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default Step1;
