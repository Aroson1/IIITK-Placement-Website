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

const renderCenterLeftControls = ({ previousSlide, currentSlide }) => (
  <button
    onClick={previousSlide}
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
      value += "bg-green-500 hover:bg-green-500";
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

export default function Slider2() {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="section">
      <Carousel
        slideIndex={0} // Set the initial slide index
        disableEdgeSwiping={false}
        autoplay={false}
        wrapAround={true}
        autoplayInterval={2000}
        dragThreshold={0.2}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        renderBottomCenterControls={false}
      >
        {slidesData.map((slide, index) => (
          <div key={index} className="px-0 sm:px-10">
            <div>
              <div
                className={`flex flex-wrap gap-1 justify-between mt-0 w-full max-md:flex-wrap max-md:mt-10 ${
                  isSmallScreen ? "" : " px-5"
                }`}
              >
                <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex justify-center items-center w-[37%] max-md:ml-0 max-md:w-full">
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
                              src={slide.image}
                              alt={slide.name}
                              layout="fill"
                              objectFit="cover"
                              className="object-cover rounded-[42px]"
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
                            {slide.name},
                            <br />
                            <span>{slide.role}</span>
                          </p>
                          <p
                            style={{
                              zIndex: 10,
                              position: "absolute",
                              bottom: 0,
                              marginTop: "20%", // Adjust the margin as needed
                              textAlign: "center",
                              textWrap: "pretty",
                            }}
                          >
                            {slide.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center flex-col w-[63%] max-md:ml-0 max-md:w-full ${
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
                        {slide.message}
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
        ))}
      </Carousel>
    </div>
  );
}
