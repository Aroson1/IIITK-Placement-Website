import * as React from "react";
import logo from "../../public/logok.svg";
import Image from "next/image";
import arrow from "../../public/stats.svg";

export default function About() {
  return (
    <div
      className="flex flex-col"
      style={{ paddingLeft: "80px", paddingRight: "30px" }}
    >
      <div className="w-full max-md:max-w-full  mb-2">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full ">
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
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontSize: "35px",
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
                      className="mt-8 text-lg leading-9  max-md:max-w-full"
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
                  </div>
                </div>
                <div className="flex ml-5 w-2/5 max-md:ml-0 max-md:w-full items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c8d0f33427a0a0c531983c7445b3d61292b1fcd1fd9c0356cd1ce928a21d65?"
                    className="w-full aspect-[1.72] fill-[linear-gradient(180deg,#58D162_0%,#2AA031_100%)]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end self-start px-5 text-base font-medium leading-6  whitespace-nowrap mb-16">
        <button style={{ display: "flex" }}>
          <div
            className="grow"
            style={{
              color: "rgba(78, 220, 72, 1)",
            }}
          >
            See more Information
          </div>
          <Image src={arrow} />
        </button>
      </div>

      <div className="flex flex-col gap-2 mr-14">
        <div className="flex gap-5 justify-between self-start px-5 text-4xl font-bold whitespace-nowrap leading-[54.95px]">
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
          className="justify-center p-8 text-lg leading-9 rounded-3xl bg-slate-50 max-w-[964px]  max-md:px-5 ml-20"
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
      <div className="flex flex-col  mr-14">
        <div className="flex gap-4 self-end px-5 text-4xl font-bold whitespace-nowrap leading-[54.95px] mb-2">
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
          className="justify-center p-8 text-lg leading-9 rounded-3xl bg-slate-50 max-w-[964px]  max-md:px-5 self-end mr-20"
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
