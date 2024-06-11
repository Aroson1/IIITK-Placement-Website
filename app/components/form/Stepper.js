import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-around mb-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`py-2 px-4 border-b-2 ${index === currentStep ? 'border-blue-500' : 'border-gray-300'}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
