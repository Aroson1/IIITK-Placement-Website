"use client";

import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import StepIndicator from "./StepIndicator";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const submitForm = () => {
    console.log("Form Data Submitted:", formData);
  };

  const totalSteps = 3;

  return (
    <div>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <div className="form-container">
        {currentStep === 1 && (
          <div className="form-step active">
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-step active">
            <Step2
              formData={formData}
              setFormData={setFormData}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="form-step active">
            <Step3
              formData={formData}
              prevStep={prevStep}
              submitForm={submitForm}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
