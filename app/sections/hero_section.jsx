import * as React from "react";
import heroimage from "../../public/Hero-Wrapper__image.png";

export default function Hero(props) {
  return (
    <div className="flex w-screen justify-center">
      <div className="flex justify-center w-3/4 items-start px-11 py-12 shadow-2xl max-md:px-5">
        <div className="flex flex-col">
          <div className="mt-8 text-5xl font-extrabold text-gray-900 bg-clip-text leading-[71px] max-md:text-4xl max-md:leading-[59px]">
            <span className="text-5xl font-light">Welcome to IIITK </span>
            <br />
            STUDENTS <br />
            PLACEMENT <br />
            COMMITEE
          </div>
          <div className="w-[126px] text-center cursor-pointer bg-green-700 py-3.5 mt-20 text-sm font-semibold whitespace-nowrap rounded-md text-neutral-50 max-md:px-5 max-md:mt-10">
            Contact Us
          </div>
        </div>
        <div>
          <img src={heroimage} />
        </div>
      </div>
    </div>
  );
}
