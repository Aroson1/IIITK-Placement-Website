"use client";
import * as React from "react";
import Carousel from "nuka-carousel";
import "../styles/brochures.css";
import Image from "next/image";
import circle from "../../public/circle.png";
import next from "../../public/next.svg";
import prev from "../../public/prev.svg";
import stats from "../../public/stats.svg";
import { useMediaQuery } from "react-responsive";

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
    "Year 2020-21",
    "Year 2021-22",
    "Year 2022-23",
    "Year 2023-24",
    "Year 2024-25",
    "Year 2025-26",
  ];
  var isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      className="section p-[3%] w-full mx-auto" // Added w-full and mx-auto for full width and horizontal centering
      style={
        {
          // Other styles remain unchanged
        }
      }
      id="brochures"
    >
      <Carousel
        slidesToScroll={1}
        slidesToShow={isSmallScreen ? 1 : 3}
        scrollMode="remainder"
        cellSpacing={isSmallScreen ? "10" : "50"}
        disableEdgeSwiping={false}
        dragging={false}
        renderBottomCenterControls={renderBottomCenterControls}
        renderCenterRightControls={renderCenterRightControls}
        renderCenterLeftControls={renderCenterLeftControls}
        style={{
          paddingBottom: "40px",
          paddingTop: "40px",
          textAlign: "center", // Center text inside carousel items
        }}
      >
        {colors.map((year) => (
          <div
            key={`&{year}}`}
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
            >{`${year}`}</span>
            <button>
              <Image
                src={stats}
                alt="stats"
                style={{
                  cursor: "pointer",
                }}
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
    <div className="outersection mb-5 mt-5">
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
            className="text-5xl font-bold text-gray-800  md:text-3xl lg:text-5xl"
            style={{
              color: "rgba(26, 32, 44, 1)",
              fontFamily: "Inter",
            }}
          >
            Placement Statistics & Brochures
          </span>
        </div>

        <Slider1 />
      </div>
      <Image
        src={circle}
        alt="circle"
        className="absolute top-[545px] left-[10%] translate-x-[-50%] z-[-1]"
        style={{ zIndex: -1 }}
      />
      <Image
        src={circle}
        alt="circle"
        className="absolute top-[120px] left-[40%] translate-x-[-50%] z-[-1]"
        style={{ zIndex: -1 }}
      />
    </div>
  );
}
