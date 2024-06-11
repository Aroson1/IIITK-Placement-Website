"use client";

import React, { useState } from "react";
import Stepper from "./Stepper";
import FormInput from "../FormInput";
import FormSelector from "../FormSelector";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      alert("Form submitted");
    } else {
      nextStep();
    }
  };

  return (
    <div className="mx-auto max-w-[700px]">
      <Stepper steps={steps} currentStep={currentStep} />
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <div className="flex flex-col px-5 text-lg leading-5 max-w-[596px] text-indigo-950">
            <div className="w-full text-2xl font-bold leading-9 max-md:max-w-full">
              Company details
            </div>
            <div className="mt-2 w-full leading-[167%] text-slate-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
            <div className="flex gap-5 mt-5 whitespace-nowrap text-slate-500 max-md:flex-wrap">
              <FormInput label={"Company Name"} placeholder={"Google"} />
              <FormInput label={"Type of Organisation"} placeholder={"MNC"} />
            </div>
            <div className="flex gap-5 mt-4 whitespace-nowrap text-slate-500 max-md:flex-wrap">
              <FormInput
                label={"About the company"}
                placeholder={"Decription"}
              />
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div className="flex flex-col px-5 max-w-[596px]">
            <div className="w-full text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full">
              HR Contact details
            </div>
            <div className="mt-2 w-full text-lg leading-8 text-slate-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
            <div className="flex gap-5 mt-5 whitespace-nowrap text-slate-500 max-md:flex-wrap">
              <FormInput label={"Name"} placeholder={"John Carter"} />
              <FormInput label={"Email"} placeholder={"Email address"} />
            </div>
            <div className="flex gap-5 mt-4 whitespace-nowrap text-slate-500 max-md:flex-wrap">
              <FormInput
                label={"Phone Number"}
                placeholder={"(123) 456 - 7890"}
              />
              <FormInput label={"Company"} placeholder={"Company name"} />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="flex flex-col px-5 max-w-[596px]">
            <div className="w-full text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full">
              Job Details
            </div>
            <div className="mt-2 w-full text-lg leading-8 text-slate-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
            <div className="flex gap-5 mt-5 whitespace-nowrap text-slate-500 max-md:flex-wrap">
              <FormInput label={"Job Title"} placeholder={"SDE"} />
              <FormSelector
                label={"Type of offer"}
                placeholder={"Select type"}
                options={["Full-Time", "Partime", "Probationary", "Internship"]}
              />
              <FormInput label={"Job Description"} placeholder={"Decritpion"} />
            </div>
            <div className="px-3 py-4 mt-8 text-center text-green-600 border border-green-500 rounded-[66px] cursor-pointer">
              Add New Job
            </div>
          </div>
        )}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="justify-center self-end px-10 py-4 mt-8 text-lg leading-5 text-center text-indigo-600 border border-blue-500 border-solid rounded-[66px]"
            >
              Previous step
            </button>
          )}
          <button
            className="bg-custom-gradient justify-center self-end px-10 py-4 mt-8 text-lg font-bold leading-5 text-center text-white shadow-sm rounded-[56px] max-md:px-5"
            type="submit"
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
