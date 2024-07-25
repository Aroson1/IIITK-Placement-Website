"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/imageSlider.css";
import pic1 from "../../../public/images/highlights/01.jpeg";
import pic2 from "../../../public/images/highlights/02.jpeg";
import pic3 from "../../../public/images/highlights/03.jpeg";
import pic4 from "../../../public/images/highlights/04.jpeg";
import pic5 from "../../../public/images/highlights/05.jpeg";
import pic6 from "../../../public/images/highlights/06.jpeg";
import Image from "next/image";

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
    transform: `rotate(0)`,
    position:
      state.previousItem === state.selectedItem ? "relative" : "absolute",
    inset: "0 0 0 0",
    zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
    opacity: state.previousItem === state.selectedItem ? "1" : "0",
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: "relative",
      zIndex: 2,
      filter: `blur(0)`,
    },
    prevStyle: {
      ...slideStyle,
      transformOrigin: " 0 100%",
      transform: `rotate(${
        state.previousItem > state.selectedItem ? "-45deg" : "45deg"
      })`,
      opacity: "0",
      filter: `blur( ${
        state.previousItem === state.selectedItem ? "0px" : "5px"
      })`,
    },
  };
};

const Highlights = () => {
  return (
    <>
      <section
        className="mt-5 self-stretch  flex flex-row items-start justify-start py-10 pr-[13px] pl-[25px] box-border max-w-full shrink-0 text-center text-16xl text-gray-gray-900 font-footer-footer-sm"
        id="highlights"
      >
        <div className="flex-1 flex flex-col items-center justify-start gap-[27px_0px] max-w-full">
          <div className="w-[480px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[20px_0px] max-w-full">
              <div
                className="w-[69px] h-[5px] relative font-bold [background:linear-gradient(225deg,_#6ce778,_#168c1c)]"
                style={{
                  fontFamily: "inter",
                }}
              />
              <div className=" text-4xl font-bold  bg-clip-text leading-[55px] max-md:max-w-full mr-6">
                <span
                  style={{
                    background:
                      "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Placement Highlights & Student Recognitions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Slider /> */}
      <div
        className="h-70 pt-10 bg-slate-100"
        style={{
          backgroundcolor: "rgba(113, 128, 150, 1)",
        }}
      >
        <div className="boxin">
          <Carousel transitionTime={310} swipeable={true}>
            {images.map((URL, index) => (
              <div className="slide">
                <Image alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Highlights;
