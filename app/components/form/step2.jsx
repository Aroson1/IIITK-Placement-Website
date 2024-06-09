import React from "react";

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  return (
    <div className="form-step">
      <h2>Step 2: Address</h2>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />
      <button type="button" onClick={prevStep}>
        Previous
      </button>
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default Step2;
