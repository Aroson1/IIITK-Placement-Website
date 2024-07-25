import React from "react";
import Carousel from "nuka-carousel";
import "../styles/style.css";
import Image from "next/image";
import btnleft from "../../public/Btn-left.svg";
import btnright from "../../public/Btn-right.svg";
import leftcomma from "../../public/left-comma.svg";
import rightcomma from "../../public/right-comma.svg";
import { useMediaQuery } from "react-responsive";
import sea from "../../public/images/peoples_section/mathew.jpeg";
import slidesData from "../data_models/peoples_sections.json"; // Import the JSON file
import StatisticsDisplay from "../home/sections/stats";
import viewPdf from "../../public/assets/viewPdf.svg";
import statsData from "../data_models/stats.json";

const renderCenterLeftControls = ({ previousSlide }) => (
  <button
    onClick={previousSlide}
    className="carousel-control items-start inline-block"
  >
    <Image src={btnleft} alt="left-button" width={70} height={70} />
  </button>
);

const renderCenterRightControls = ({ nextSlide }) => {
  return (
    <button onClick={nextSlide} className="carousel-control">
      <Image
        src={btnleft}
        alt="right-button"
        width={70}
        height={70}
        style={{ transform: "rotate(-180deg)" }}
      />
    </button>
  );
};

export const CustomDots = () => {
  const { totalPages, currentPage, goToPage } = Carousel();

  const className = (index) => {
    let value =
      "w-3 h-3 p-0 rounded-full bg-green-200 border-none cursor-pointer hover:bg-green-200";
    if (currentPage === index) {
      value += " bg-green-500 hover:bg-green-500";
    }
    return value;
  };

  return (
    <div className="flex items-center py-4 gap-1">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={className(index)}
        />
      ))}
    </div>
  );
};

export default function Slider3() {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const pdf = {
    2023: "./brochures/Placement Brochure'23.pdf",
    //2022: "./brochures/Placement Brochure'22.pdf",
    //2021: "./brochures/Placement Brochure'21.pdf",
  };

  return (
    <div
      className="section px-[10%] mb-10"
      style={{
        backgroundColor: "rgba(249, 249, 255, 1)",
      }}
    >
      <Carousel
        slideIndex={0} // Set the initial slide index
        disableEdgeSwiping={true}
        autoplay={true}
        wrapAround={true}
        autoplayInterval={5000}
        dragThreshold={0.2}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        renderBottomCenterControls={false}
      >
        {Object.entries(statsData).map(([year, data], index) => (
          <div key={index} className="px-0 sm:px-10">
            <div
              className={`flex flex-wrap gap-1 justify-center mt-0 w-full max-md:flex-wrap max-md:mt-10 ${
                isSmallScreen ? "" : "px-5"
              }`}
            >
              <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex justify-center items-center w-full max-md:ml-0 max-md:w-full mb-4">
                  <div className="flex flex-col text-base font-extrabold leading-9  max-md:mt-6">
                    <div className="flex self-center gap-2 mb-4">
                      <h2 className="text-center text-xl font-bold">
                        YEAR {parseInt(year) - 1} - {year}
                      </h2>
                      <Image
                        src={viewPdf}
                        alt="view-pdf"
                        width={30}
                        height={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open(pdf[year], "_blank")}
                      />
                    </div>
                    <StatisticsDisplay data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
