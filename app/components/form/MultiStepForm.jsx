"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import FormInput from "./FormInput";
import FormSelector from "./FormSelector";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Review"];
  const [formData, setFormData] = useState({
    companyName: "",
    typeOfOrganisation: "",
    aboutCompany: "",
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobs: [{ jobTitle: "", typeOfOffer: "", jobDescription: "" }],
  });

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleJobChange = (index, field, value) => {
    const newJobs = formData.jobs.map((job, i) =>
      i === index ? { ...job, [field]: value } : job
    );
    setFormData({ ...formData, jobs: newJobs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      alert("Form submitted" + JSON.stringify(formData));
      // Reset form data after submission
      setFormData({
        companyName: "",
        typeOfOrganisation: "",
        aboutCompany: "",
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobs: [{ jobTitle: "", typeOfOffer: "", jobDescription: "" }],
      });
      // Reset to the first step after submission
      setCurrentStep(0);
    } else {
      nextStep();
    }
  };

  const addJob = () => {
    setFormData({
      ...formData,
      jobs: [
        ...formData.jobs,
        { jobTitle: "", typeOfOffer: "", jobDescription: "" },
      ],
    });
  };

  // Function to navigate to a specific step
  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Stepper steps={steps} currentStep={currentStep} />
      {/* Form Wrapper with white background, rounded corners, and shadow */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <form onSubmit={handleSubmit} className="max-w-full">
          {currentStep === 0 && (
            <div className="flex flex-col text-sm leading-5 text-indigo-950">
              <div className="w-full text-2xl font-bold leading-9">
                Company details
              </div>
              <div className="mt-2 w-full leading-[167%] text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisc.
              </div>
              <div className="flex flex-wrap gap-5 mt-5 text-slate-500">
                <FormInput
                  label="Company Name"
                  placeholder="Google"
                  value={formData.companyName}
                  onChange={(value) => handleChange("companyName", value)}
                  className="flex-1 min-w-[220px]"
                />
                <FormInput
                  label="Type of Organisation"
                  placeholder="MNC"
                  value={formData.typeOfOrganisation}
                  onChange={(value) =>
                    handleChange("typeOfOrganisation", value)
                  }
                  className="flex-1 min-w-[220px]"
                />
              </div>
              <div className="flex flex-wrap gap-5 mt-4 text-slate-500">
                <FormInput
                  label="About the company"
                  placeholder="Description"
                  value={formData.aboutCompany}
                  onChange={(value) => handleChange("aboutCompany", value)}
                  className="w-full"
                />
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div className="flex flex-col">
              <div className="w-full text-2xl font-bold leading-9 text-indigo-950">
                HR Contact details
              </div>
              <div className="mt-2 w-full text-sm leading-8 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisc.
              </div>
              <div className="flex flex-wrap gap-5 mt-5 text-slate-500">
                <FormInput
                  label="Name"
                  placeholder="John Carter"
                  value={formData.name}
                  onChange={(value) => handleChange("name", value)}
                  className="flex-1 min-w-[220px]"
                />
                <FormInput
                  label="Email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(value) => handleChange("email", value)}
                  className="flex-1 min-w-[220px]"
                />
              </div>
              <div className="flex flex-wrap gap-5 mt-4 text-slate-500">
                <FormInput
                  label="Phone Number"
                  placeholder="(123) 456 - 7890"
                  value={formData.phoneNumber}
                  onChange={(value) => handleChange("phoneNumber", value)}
                  className="flex-1 min-w-[220px]"
                />
                <FormInput
                  label="Company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(value) => handleChange("company", value)}
                  className="flex-1 min-w-[220px]"
                />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col">
              <div className="w-full text-2xl font-bold leading-9 text-indigo-950">
                Job Details
              </div>
              <div className="mt-2 w-full text-sm leading-8 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisc.
              </div>
              {formData.jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-wrap gap-5 mt-5 text-slate-500"
                >
                  <FormInput
                    label="Job Title"
                    placeholder="SDE"
                    value={job.jobTitle}
                    onChange={(value) =>
                      handleJobChange(index, "jobTitle", value)
                    }
                    className="flex-1 min-w-[220px]"
                  />
                  <FormSelector
                    label="Type of offer"
                    placeholder="Select type"
                    options={[
                      "Full-Time",
                      "Part-time",
                      "Probationary",
                      "Internship",
                    ]}
                    value={job.typeOfOffer}
                    onChange={(value) =>
                      handleJobChange(index, "typeOfOffer", value)
                    }
                    className="flex-1 min-w-[220px]"
                  />
                  <FormInput
                    label="Job Description"
                    placeholder="Description"
                    value={job.jobDescription}
                    onChange={(value) =>
                      handleJobChange(index, "jobDescription", value)
                    }
                    className="w-full"
                  />
                </div>
              ))}
              <div
                className="px-3 py-4 mt-8 text-center text-green-600 border border-green-500 rounded-[66px] cursor-pointer"
                onClick={addJob}
              >
                Add New Job
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold leading-9 text-indigo-950">
                  Review Your Details
                </h3>
                <p className="mt-2 w-full text-lg leading-8 text-slate-500">
                  Please review your information before submitting.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-indigo-950">
                    Company Details
                  </h3>
                  <div
                    style={{}}
                    className=" bg-green-500 px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => goToStep(0)}
                      className="text-white "
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-slate-500">
                  <strong>Company Name:</strong> {formData.companyName}
                </p>
                <p className="text-slate-500">
                  <strong>Type of Organisation:</strong>{" "}
                  {formData.typeOfOrganisation}
                </p>
                <p className="text-slate-500">
                  <strong>About the Company:</strong> {formData.aboutCompany}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-indigo-950">
                    HR Contact Details
                  </h3>
                  <div
                    style={{}}
                    className=" bg-green-500 px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="text-white "
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-slate-500">
                  <strong>Name:</strong> {formData.name}
                </p>
                <p className="text-slate-500">
                  <strong>Email:</strong> {formData.email}
                </p>
                <p className="text-slate-500">
                  <strong>Phone Number:</strong> {formData.phoneNumber}
                </p>
                <p className="text-slate-500">
                  <strong>Company:</strong> {formData.company}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-indigo-950">
                    Job Details
                  </h3>
                  <div
                    style={{}}
                    className=" bg-green-500 px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="text-white "
                    >
                      Edit
                    </button>
                  </div>
                </div>
                {formData.jobs.map((job, index) => (
                  <div key={index} className="mt-2">
                    <p className="text-slate-500">
                      <strong>Job Title {index + 1}:</strong> {job.jobTitle}
                    </p>
                    <p className="text-slate-500">
                      <strong>Type of Offer {index + 1}:</strong>{" "}
                      {job.typeOfOffer}
                    </p>
                    <p className="text-slate-500">
                      <strong>Job Description {index + 1}:</strong>{" "}
                      {job.jobDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="justify-center self-end px-10 py-4 text-lg leading-5 text-center text-indigo-600 border border-blue-500 border-solid rounded-[66px]"
              >
                Previous step
              </button>
            )}
            <button
              className="bg-custom-gradient justify-center self-end px-10 py-4 text-lg font-bold leading-5 text-center text-white shadow-sm rounded-[56px] max-md:px-5"
              type="submit"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next Step"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
