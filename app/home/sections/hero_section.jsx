import * as React from "react";
import heroimage from "../../../public/college.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-screen justify-center" id="hero">
      <div className="flex justify-center w-3/4 items-start px-11 py-12 shadow-2xl max-md:px-5">
        <div className="flex flex-col ">
          <div className="pt-14 pl-11 mt-8 mr-8 text-5xl font-extrabold text-gray-900 bg-clip-text leading-[71px] max-md:text-4xl max-md:leading-[59px]">
            <span className="text-5xl font-light">Welcome to IIITK </span>
            <br />
            <span
              style={{
                color: "#0B7F0F",
              }}
            >
              S
            </span>
            TUDENTS <br />
            <span
              style={{
                color: "#66E071",
              }}
            >
              P
            </span>
            LACEMENT <br />
            <span
              style={{
                color: "#67E272",
              }}
            >
              C
            </span>
            OMMITTEE
            <div
              style={{
                background:
                  "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              }}
              className="w-[126px] text-center cursor-pointer py-3.5 mt-0  text-sm font-semibold whitespace-nowrap rounded-md text-neutral-50 max-md:px-5 max-md:mt-10"
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="max-w-[60%]">
          <Image
            src={heroimage}
            alt="hero-image"
            className="object-fill h-full"
          />
        </div>
      </div>
    </div>
  );
}
