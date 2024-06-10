"use client";
import * as React from "react";
import logo from "../../public/images/companies.svg";
import Image from "next/image";
import arrow from "../../public/stats.svg";
import { useMediaQuery } from "react-responsive";

export default function PastRecruiters() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      className={`flex flex-col pt-10 ${isSmallScreen ? "px-0" : "px-5 md:px-8"} `}
      id="about"
    >
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col max-md:ml-0 max-md:w-full ">
            <div className="max-md:mt-3 max-md:max-w-full">
              <div className="flex  max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full ">
                    <div
                      className="h-[5px] w-[69px] "
                      style={{
                        background:
                          "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                      }}
                    />
                    <div className="mt-5 text-4xl font-bold  bg-clip-text leading-[55px] max-md:max-w-full mr-6">
                      
                      {"   "}
                      <span>Past</span>
                      <br />
                      <span
                        style={{
                          background:
                            "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Recruiters
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex content-center items-right">
                  <Image
                    // loading="lazy"
                    src={logo}
                    // src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c8d0f33427a0a0c531983c7445b3d61292b1fcd1fd9c0356cd1ce928a21d65?"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* {isSmallScreen ? (
              <div></div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Image src={logo} alt="logo" />
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
}
