import React from "react";
import "./StepIndicator.css"; // CSS file for styling

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`step ${currentStep === index + 1 ? "active" : ""}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
