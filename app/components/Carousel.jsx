"use client";
import * as React from "react";
import Carousel from "nuka-carousel";
import "../styles/style.css";
// import "../styles/carouselController.css";
import Image from "next/image";
import btnleft from "../../public/Btn-left.svg";
import btnright from "../../public/Btn-right.svg";
import leftcomma from "../../public/left-comma.svg";
import rightcomma from "../../public/right-comma.svg";
import { useMediaQuery } from "react-responsive";
import sea from "../../public/images/peoples_section/mathew.jpeg";

const renderCenterLeftControls = ({ previousSlide, currentSlide }) => (
  <button
    onClick={previousSlide}
    disabled={currentSlide === 0}
    className="carousel-control items-start inline-block"
  >
    <Image src={btnleft} alt="left-button" width={70} height={70} />
  </button>
);

const renderCenterRightControls = ({
  nextSlide,
  currentSlide,
  slideCount,
  slidesToShow,
}) => {
  return (
    <button
      onClick={nextSlide}
      disabled={currentSlide + slidesToShow === slideCount}
      className="carousel-control"
    >
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

export default function Slider2() {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const colors = [
    <div className="px-0 sm:px-10" key="1">
      <div>
        <div
          className={`flex flex-wrap gap-1 justify-between mt-0 w-full max-md:flex-wrap max-md:mt-10 ${
            isSmallScreen ? "" : " px-5"
          }`}
        >
          <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex items-center w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base font-extrabold leading-9 text-white max-md:mt-6">
                <div className="flex gap-5 pl-11 mt-4">
                  <div
                    className="justify-end flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[279px] h-[366px] rounded-[42px]"
                    style={{
                      border: "1px solid #5B61F4",
                      backgroundColor: "#5B61F4",
                      position: "relative",
                    }}
                  >
                    <div
                      className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[269px] h-[270px] rounded-[42px]"
                      style={{
                        marginTop: "2px",
                        border: "2px solid #5B61F4",
                        backgroundColor: "#5B61F4",
                        zIndex: "5",
                        position: "absolute",
                        top: 0,
                      }}
                    >
                      <Image
                        src={sea}
                        alt=""
                        layout="fill" // This makes the image take up the full space of its container
                        objectFit="cover" // This ensures the aspect ratio of the image is maintained while filling the container
                        className="object-cover rounded-[42px]" // Additional class to ensure the image covers the area without distortion
                      />
                    </div>
                    <p
                      style={{
                        zIndex: 10,
                        position: "absolute",
                        bottom: 0,
                        marginTop: "10%",
                        textAlign: "center",
                        textWrap: "pretty",
                      }}
                    >
                      Dr. Mathew C D,
                      <br />
                      <span> IIITK Placement Cell </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col w-[63%] max-md:ml-0 max-md:w-full ${
                isSmallScreen ? "ml-0" : "ml5"
              }`}
            >
              <div className="flex">
                <Image
                  loading="lazy"
                  src={leftcomma}
                  height={40}
                  width={40}
                  className="self-start aspect-[0.58]"
                />

                <div className="text-base leading-9 text-slate-500 max-md:mt-5 max-md:max-w-full">
                The first batch of IIIT Kottayam got passed out in 2019, we
                  made remarkable progress in campus placements over the years.
                  Last year the highest salary touched a whopping figure of 58.3
                  lakhs, with the average salary being 14.3 lpa. Even during
                  this recession time IIIT kottayam students bagged 114
                  individual offers and total 142 offers. Placement cell
                  concentrates on hardware, software, consulting, banking,
                  fintech companies etc. We wish to install the temperament of
                  research in our students and thus have architected a syllabus
                  focusing on emerging fields in data science and artificial
                  intelligence. To give our students an understanding of how
                  management of funds and people takes place in the real world
                  we have also decided to introduce single credit business
                  courses into our syllabus. The combination of the two
                  disciplines gives our students an all-rounded perspective of
                  the industry’s challenges and prepares them to take on any
                  situation head-on. With Best Wishes!
                </div>
                <Image
                  loading="lazy"
                  src={rightcomma}
                  height={40}
                  width={40}
                  className="self-end aspect-[0.58]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];
  const [index, setIndex] = React.useState(0);

  return (
    <div className="section">
      {/* <p>
        {colors.map((v, i) => (
          <button type="button" onClick={() => setIndex(i)}>
            {i + 1}
          </button>
        ))}
      </p> */}

      <Carousel
        slideIndex={index}
        disableEdgeSwiping={false}
        autoplay={true}
        autoplayInterval={2000}
        dragThreshold={0.2}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
      >
        {colors.map((color) => color)}
      </Carousel>
    </div>
  );
}
