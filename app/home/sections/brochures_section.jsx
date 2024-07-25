"use client";
import * as React from "react";
import Carousel from "nuka-carousel";
import "../../styles/brochures.css";
import Image from "next/image";
import circle from "../../../public/circle.png";
import next from "../../../public/next.svg";
import prev from "../../../public/prev.svg";
import stats from "../../../public/stats.svg";
import { useMediaQuery } from "react-responsive";
import StatisticsDisplay from "./stats";
const renderBottomCenterControls = ({
  slideCount,
  nextSlide,
  slidesToShow,
  currentSlide,
  previousSlide,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center", // Centers the children horizontally
      alignItems: "center", // Centers the children vertically
      height: "100%", // Adjust based on your needs
    }}
  >
    <button
      className="slider-control-button"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <Image src={prev} alt="prev" />
    </button>

    <div>{`${currentSlide + 1} / ${slideCount}`}</div>
    <button
      className="slider-control-button"
      onClick={nextSlide}
      disabled={currentSlide + slidesToShow === slideCount}
    >
      <Image src={next} alt="next" />
    </button>
  </div>
);

const renderCenterRightControls = ({}) => <div></div>;

const renderCenterLeftControls = ({}) => <div></div>;

function Slider1() {
  const colors = [
    // { year: "Year 2020-21", pdf: "./brochures/Placement Brochure'23.pdf" },
    // { year: "Year 2021-22", pdf: "./brochures/Placement Brochure'23.pdf" },
    { year: "Year 2022-23", pdf: "./brochures/Placement Brochure'23.pdf" },
    // { year: "Year 2023-24", pdf: "./brochures/Placement Brochure'23.pdf" },
  ];
  var isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      className="section w-full mx-auto" 
      style={
        {
         
        }
      }
      id="brochures"
    >
      <Carousel
        slidesToScroll={1}
        // changed to 1 as only current brochure is available
        slidesToShow={isSmallScreen ? 1 : 1}
        scrollMode="remainder"
        cellSpacing={isSmallScreen ? "10" : "50"}
        disableEdgeSwiping={false}
        dragging={false}
        // Hide the controls as only one brochure is available
        // renderBottomCenterControls={renderBottomCenterControls}
        // renderCenterRightControls={renderCenterRightControls}
        // renderCenterLeftControls={renderCenterLeftControls}
        renderBottomCenterControls={null}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        style={{
          paddingTop: "40px",
          textAlign: "center", // Center text inside carousel items
        }}
      >
        {colors.map((ele) => (
          <div
            key={`${ele.year}`}
            className="color m-auto" // Added m-auto for automatic margin on all sides, centering the item
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderColor: "rgba(78, 220, 72, 1)",
              borderWidth: "2px",
              borderStyle: "solid",
              color: "rgba(78, 220, 72, 1)",
              paddingTop: "30px",
              paddingBottom: "20px",
              borderRadius: "10px",
              alignItems: "center",
              width: "250px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
              }}
            >{`${ele.year}`}</span>
            <button>
              <Image
                src={stats}
                alt="stats"
                style={{ cursor: "pointer" }}
                onClick={() => window.open(ele.pdf, "_blank")}
              />
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default function App() {
  return (
    <div className="outersection">
      <div
        className="innersection flex flex-col items-center justify-center relative bg-green-700 p-[3%] md:p-[4%] lg:p-[4%]"
        style={{
          backgroundColor: "rgba(249, 249, 255, 1)",
          zIndex: "1",
        }}
      >
        <div
          className="text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="lg:text-4xl font-bold text-gray-800  md:text-2xl text-2xl"
            style={{
              color: "rgba(26, 32, 44, 1)",
              fontFamily: "Inter",
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Placement Statistics & Brochures
          </span>
        </div>

        <Slider1 />
        <StatisticsDisplay />
      </div>
    </div>
  );
}
