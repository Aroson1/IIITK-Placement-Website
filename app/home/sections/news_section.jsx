import React from "react";
import photo from "../../../public/Photo.png";

const News = () => {
  return (
    <div id="news">
      <div className="flex flex-col">
        <div
          style={{
            transform: "translate(-50%, -50%)",
            borderRadius: "150px 150px 0 0",
            backgroundColor: "green",
          }}
          className="self-end mr-72 rounded-full bg-[linear-gradient(225deg,#63FF56_0%,#0D711D_100%)] h-[40px] w-[80px] max-md:mr-2.5"
        />
        <div className="flex z-10 flex-col justify-center items-end px-16 py-12 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mr-12 mb-7 max-w-full w-[909px] max-md:mr-2.5">
            <div className="self-start ml-16 text-4xl font-bold text-gray-900 leading-[54.95px] max-md:max-w-full">
              What’s happening @ IIIT K
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2.5 pt-2.5 pb-12 w-full text-base bg-white border border-black border-solid text-neutral-800 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col justify-end px-5 pt-6 pb-2 bg-white max-md:max-w-full">
                      <div
                        className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full text-1rem"
                        style={{ fontFamily: "Times New Roman" }}
                      >
                        <div>Edition nº 1</div>
                        <div className="flex-auto text-right">
                          Thursday, September 1, 2022
                        </div>
                      </div>

                      <div className="shrink-0 mt-3 h-px bg-zinc-800 max-md:max-w-full" />
                      <div
                        className="self-center mt-6 text-6xl text-center max-md:max-w-full max-md:text-4xl font-serif"
                        style={{ fontFamily: "Old English Text MT" }}
                      >
                        Our College News
                      </div>
                      <div className="shrink-0 mt-3.5 h-px bg-zinc-800 max-md:max-w-full" />
                      <div className="mt-7 text-3xl font-bold max-md:max-w-full">
                        IIITK Student Grabs 1Cr. Package
                      </div>
                      <div className="mt-2.5 max-md:max-w-full">
                        As with (almost) every last Friday of the month, we had
                        our typical monthly meeting with the entire team. We
                        received the sad news that, this month, the sales target
                        — probably — will not be met. It was also announced that
                        our 30th branch will open next month. Our CEO announced
                        that with the arrival of the 50 new employees,the amount
                        of coffee consumed increased slightly.
                      </div>
                      <img src={photo} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-4 justify-end self-stretch py-2.5 pl-1.5 my-auto text-xl font-medium text-green-600 whitespace-nowrap max-md:mt-10">
                    <div className="grow">Read Newspaper</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fe3266fd6224fe146683375ddd0a3e7a6a2d2aff0a51ad4fa028c3f7abd860?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
                      className="self-start w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: "translate(-50%, -50%)",
            borderRadius: "0 0 150px 150px",
            backgroundColor: "green",
          }}
          className="self-end mr-[80vw] rounded-full bg-[linear-gradient(225deg,#63FF56_0%,#0D711D_100%)] h-[40px] w-[80px] max-md:mr-2.5"
        />
      </div>
    </div>
  );
};

export default News;
