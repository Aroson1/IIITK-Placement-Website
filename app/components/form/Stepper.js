import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex gap-14 items-start px-16 mb-4 max-w-[539px] max-md:flex-wrap">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`justify-center items-center px-3.5 text-base font-medium leading-5 text-white whitespace-nowrap rounded-full h-[34px] w-[34px] ${
              index <= currentStep
                ? 'bg-[linear-gradient(219deg,#4EDC48_1.05%,#148A1A_103.56%)]'
                : 'bg-gray-100 text-slate-500'
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div
                className={`shrink-0 h-1.5 rounded-[40px] ${
                  index < currentStep
                    ? 'bg-green-400'
                    : 'bg-gray-100'
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
