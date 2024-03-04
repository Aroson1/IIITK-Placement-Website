import React from "react";

const brCard = ({ Year }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center self-stretch my-auto text-base font-semibold leading-5 whitespace-nowrap max-md:mt-10">
        <div className="flex flex-col items-center px-20 pt-11 pb-6 rounded-lg border border-green-500 border-solid shadow-lg bg-neutral-50 max-md:px-5">
          <div className="bg-clip-text text-green-600">{Year}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2d01b8bd7b0eebece42ba9bd6703e1498b6900cac2193f2978d22122ed6131?"
            className="mt-1.5 w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default brCard;
