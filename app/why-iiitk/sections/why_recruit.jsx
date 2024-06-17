"use client";
import Slider from "./why_recruit_silder";
import photo from "../../../public/1200pxinfosys-logo-1@2x.png";

const WhyRecruit = () => {
  return (
    <>
      <div className="flex flex-col justify-center my-10 ">
        <div
          className="h-[5px] w-[69px] mt-3  self-center"
          style={{
            background:
              "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
          }}
        />
        <h2 className="self-center mt-6  text-4xl tracking-tighter leading-10 text-center text-black bg-clip-text max-md:ml-2.5">
          Why Recruit At{" "}
          <span
            className="font-bold"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            IIIT K
          </span>
        </h2>
      </div>
      <Slider />
    </>
  );
};

export default WhyRecruit;
