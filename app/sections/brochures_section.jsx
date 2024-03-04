"use client";
import * as React from "react";
import Carousel from "nuka-carousel";
import "../styles/brochures.css";
import Image from "next/image";
import circle from "../../public/circle.png";
import next from "../../public/next.svg";
import prev from "../../public/prev.svg";
import stats from "../../public/stats.svg";
const renderBottomCenterControls = ({
  slideCount,
  nextSlide,
  slidesToShow,
  currentSlide,
  previousSlide,
}) => (
  <div className="bottom mr-14">
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

  return (
    <div
      className="section p-[3%] "
      style={{
        marginRight: "100px",
        width: "auto",
        paddingLeft: "200px",
      }}
    >
      <Carousel
        slidesToScroll={1}
        slidesToShow={3}
        scrollMode="remainder"
        cellSpacing={50}
        disableEdgeSwiping={false}
        dragging={false}
        renderBottomCenterControls={renderBottomCenterControls}
        renderCenterRightControls={renderCenterRightControls}
        renderCenterLeftControls={renderCenterLeftControls}
        style={{
          paddingBottom: "40px",
          paddingTop: "40px",
        }}
      >
        {colors.map((year) => (
          <div
            className="color"
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
    <div className="outersection mb-11 mt-16">
      <div
        className="innersection flex-col items-center justify-center relative bg-green-700 p-[3%]"
        style={{
          backgroundColor: "rgba(249, 249, 255, 1)",
          zIndex: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "rgba(26, 32, 44, 1)",
              fontFamily: "Inter",
              fontSize: "35px",
              fontWeight: "700",
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
        style={{
          position: "absolute",
          top: "545px",
          left: "10%",
          transform: "translateX(-50%)",
          zIndex: "-1",
        }}
      />
      <Image
        src={circle}
        alt="circle"
        style={{
          position: "absolute",
          top: "120px",
          left: "40%",
          transform: "translateX(-50%)",
          zIndex: "-1",
        }}
      />
    </div>
  );
}
