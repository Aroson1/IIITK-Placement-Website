"use client";
import * as React from "react";
import logo from "../../../public/aboutSideImage.svg";
import Image from "next/image";
import arrow from "../../../public/stats.svg";
import { useMediaQuery } from "react-responsive";

export default function About() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      className={`flex flex-col ${isSmallScreen ? "px-0" : "px-5 md:px-8"} pt-[7%]`}
      id="about"
    >
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col max-md:ml-0 max-md:w-full ">
            <div className="max-md:mt-3 max-md:max-w-full">
              <div className="flex max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow px-5 mt-20 max-md:mt-10 max-md:max-w-full ">
                    <div
                      className="h-[5px] w-[69px] "
                      style={{
                        background:
                          "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                      }}
                    />
                    <div className="mt-5 text-3xl font-bold bg-clip-text leading-[45px] max-md:max-w-full mr-6">
                      <span
                        style={{
                          // fontFamily: "Inter",
                          fontSize: "30px", // Reduced font size
                          fontWeight: "400",
                        }}
                      >
                        About{"   "}
                      </span>
                      {"   "}
                      <span>IIIT KOTTAYAM</span>
                      <br />
                      <span
                        style={{
                          background:
                            "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Placement Cell
                      </span>
                    </div>
                    <div
                      className="mt-8 text-base leading-7 max-md:max-w-full"
                      style={{ color: "rgba(113, 128, 150, 1)" }}
                    >
                      The IIIT Kottayam Placement Cell aims to facilitate the
                      professional growth of students by bridging the gap
                      between{" "}
                      <span style={{ color: "rgba(78, 220, 72, 1)" }}>
                        academia and the industry
                      </span>
                      . By collaborating with corporate firms and providing
                      training programs, the Placement Cell opens up
                      opportunities for students to gain industry exposure,
                      guidance and the necessary skills to succeed in their
                      careers
                    </div>
                    <div className="flex justi  self-start px-5 text-base font-medium leading-6 whitespace-nowrap mb-16">
                      <a href="/brochures/recruiterscorner.pdf" target="_blank">
                        <button style={{ display: "flex" }}>
                          <div
                            className="grow"
                            style={{
                              color: "rgba(78, 220, 72, 1)",
                            }}
                          >
                            See more Information
                          </div>
                          <Image src={arrow} width={20} height={20} />{" "}
                          {/* Adjusted size of arrow if needed */}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {isSmallScreen ? (
                  <div></div>
                ) : (
                  <div className="flex content-center items-right w-[40%]">
                    <Image src={logo} alt="logo" className="w-full" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col gap-2 ${isSmallScreen ? "mr-4" : "mr-14"}`}
      >
        <div className="flex gap-5 justify-between self-start px-5 text-3xl font-bold whitespace-nowrap leading-[45px]">
          <div
            className="h-[69px] w-[5px]"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
            }}
          />
          <div
            className="my-auto bg-clip-text"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vision
          </div>
        </div>
        <div
          className={`justify-center p-8 text-base leading-7 rounded-3xl bg-slate-50 max-w-[964px]  max-md:px-5  ${
            isSmallScreen ? "ml-4" : "ml-20"
          }`}
          style={{
            color: "rgba(113, 128, 150, 1)",
            boxShadow: "0px 5px 10px -5px rgba(0,0,0,0.75)",
          }}
        >
          The IIIT Kottayam Placement Cell envisions itself as a top-notch
          center for placements that empowers students to realize their career
          goals, fosters a collaborative environment for their professional
          growth
          <br />
          and lifelong learning, and forges strong partnerships with industries
          and corporate firms to offer diverse career pathways for students.
        </div>
      </div>
      <div className={`flex flex-col mt-5 ${isSmallScreen ? "ml-4" : "ml-5"}`}>
        <div className="flex gap-4 self-end px-5 text-3xl font-bold whitespace-nowrap leading-[45px] mb-2">
          <div
            className="my-auto bg-clip-text"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mission
          </div>
          <div
            className="h-[69px] w-[5px]"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
            }}
          />
        </div>
        <div
          className={`justify-center p-8 text-base leading-7 rounded-3xl bg-slate-50 max-w-[964px]  max-md:px-5 self-end  ${
            isSmallScreen ? "mr-4" : "mr-20"
          }`}
          style={{
            color: "rgba(113, 128, 150, 1)",
            boxShadow: "0px 5px 10px -5px rgba(0,0,0,0.75)",
          }}
        >
          The Placement Cell is committed to providing exceptional career
          guidance and counselling to help
          <br />
          students make informed decisions about their career paths. It also
          strives to equip students with the <br></br>skills and knowledge
          needed to succeed in their chosen fields through various training
          programs <br /> and workshops.
        </div>
      </div>
    </div>
  );
}
