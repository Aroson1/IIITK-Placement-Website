"use client";
import * as React from "react";
import Carousel from "nuka-carousel";
import "../styles/style.css";
import Image from "next/image";
import btnleft from "../../public/Btn-left.svg";
import btnright from "../../public/Btn-right.svg";
import leftcomma from "../../public/left-comma.svg";
import rightcomma from "../../public/right-comma.svg";

const renderCenterLeftControls = ({ previousSlide, currentSlide }) => (
  <button onClick={previousSlide} disabled={currentSlide === 0}>
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
    >
      <Image src={btnleft} alt="right-button" width={70} height={70} />
    </button>
  );
};

export default function Slider2() {
  const colors = [
    <div className="px-10 ">
      <div>
        <div className="flex gap-1 justify-between px-5 mt-0   w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-[80%] ">
          <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base font-extrabold leading-9 text-white max-md:mt-6">
                <div className="flex gap-5 pl-11  mt-4">
                  <div
                    className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[279px] h-[366px] rounded-[42px]"
                    style={{
                      border: "1px solid #5B61F4",
                      backgroundColor: "#5B61F4",
                      position: "relative",
                    }}
                  >
                    <div
                      className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[269px] h-[285px] rounded-[42px]"
                      style={{
                        marginTop: "2px",
                        border: "2px solid #5B61F4",
                        backgroundColor: "white",
                        zIndex: "5",
                        position: "absolute",
                        top: 0,
                      }}
                    >
                      {/* Content goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex">
                <Image
                  loading="lazy"
                  src={leftcomma}
                  height={40}
                  width={40}
                  className="self-start aspect-[0.58] max-md:mt-10"
                />

                <div className="text-base leading-9 text-slate-500 max-md:mt-5 max-md:max-w-full">
                  IIIT Kottayam has demonstrated rapid progress in its four
                  years of existence. Having managed to set up a permanent
                  campus despite the terrible weather conditions and the
                  back-to-back floods, is testament to the resileience of our
                  faculty. One among the other innovations is a fully
                  functioning student run mess committee which manages to serve
                  300 students 3 meals a day along with snacks. Moving higher on
                  Maslow’s hierarchy of needs, our students’ need for
                  intellectual stimulation is readily satisfied by a dynamically
                  changing syllabus sensitive to the developments of the
                  industry. We wish to install the temperament of research in
                  our students and thus have architected a syllabus focusing on
                  emerging fields in data science and artificial intelligence.
                  To give our students an understanding of how management of
                  funds and people takes place in the real world we have also
                  decided to introduce single credit business courses into our
                  syllabus. The combination of the two disciplines gives our
                  students an all-roundedperspective of the industry’s
                  challenges and prepares them to take on any situation head-
                  on. We look forward to working with your organization and
                  <br />
                  welcome you to the on-campus placements of the batch 2O23
                  as-on campus recruiters.
                  <br />
                  With Best Wishes!
                </div>
              </div>

              <Image
                loading="lazy"
                src={rightcomma}
                height={40}
                width={40}
                className="self-end aspect-[0.58] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div>
      <div>
        <div className="flex gap-1 justify-between px-5 mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-[80%] ">
          <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base font-extrabold leading-9 text-white max-md:mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cca5fd751af3f5aef884b1815f011426b283ad1bfed9e3f37a0e040c1083bf6?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
                  className="self-end w-3.5 aspect-[0.58]"
                />
                <div className="flex gap-5 justify-between mt-4">
                  <div
                    className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[279px] h-[366px] rounded-[42px]"
                    style={{
                      border: "1px solid #5B61F4",
                      backgroundColor: "#5B61F4",
                      position: "relative",
                    }}
                  >
                    <div
                      className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[269px] h-[285px] rounded-[42px]"
                      style={{
                        marginTop: "2px",
                        border: "2px solid #5B61F4",
                        backgroundColor: "white",
                        zIndex: "5",
                        position: "absolute",
                        top: 0,
                      }}
                    >
                      {/* Content goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="text-base leading-9 text-slate-500 max-md:mt-5 max-md:max-w-full">
                IIIT Kottayam has demonstrated rapid progress in its four years
                of existence. Having managed to set up a permanent campus
                despite the terrible weather conditions and the back-to-back
                floods, is testament to the resileience of our faculty. One
                among the other innovations is a fully functioning student run
                mess committee which manages to serve 300 students 3 meals a day
                along with snacks. Moving higher on Maslow’s hierarchy of needs,
                our students’ need for intellectual stimulation is readily
                satisfied by a dynamically changing syllabus sensitive to the
                developments of the industry. We wish to install the temperament
                of research in our students and thus have architected a syllabus
                focusing on emerging fields in data science and artificial
                intelligence. To give our students an understanding of how
                management of funds and people takes place in the real world we
                have also decided to introduce single credit business courses
                into our syllabus. The combination of the two disciplines gives
                our students an all-roundedperspective of the industry’s
                challenges and prepares them to take on any situation head- on.
                We look forward to working with your organization and
                <br />
                welcome you to the on-campus placements of the batch 2O23 as-on
                campus recruiters.
                <br />
                With Best Wishes!
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba44758c756b37e60df1e8cccb8b7169a858d0621a9d909bb240653b8ef2337?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
            className="self-end mt-96 w-3.5 aspect-[0.58] max-md:mt-10"
          />
        </div>
      </div>
    </div>,
    <div>
      <div>
        <div className="flex gap-1 justify-between px-5 mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-[80%] ">
          <div className="max-md:max-w-full flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base font-extrabold leading-9 text-white max-md:mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cca5fd751af3f5aef884b1815f011426b283ad1bfed9e3f37a0e040c1083bf6?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
                  className="self-end w-3.5 aspect-[0.58]"
                />
                <div className="flex gap-5 justify-between mt-4">
                  <div
                    className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[279px] h-[366px] rounded-[42px]"
                    style={{
                      border: "1px solid #5B61F4",
                      backgroundColor: "#5B61F4",
                      position: "relative",
                    }}
                  >
                    <div
                      className="flex flex-col items-center pb-6 text-base font-extrabold leading-9 text-white whitespace-nowrap w-[269px] h-[285px] rounded-[42px]"
                      style={{
                        marginTop: "2px",
                        border: "2px solid #5B61F4",
                        backgroundColor: "white",
                        zIndex: "5",
                        position: "absolute",
                        top: 0,
                      }}
                    >
                      {/* Content goes here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="text-base leading-9 text-slate-500 max-md:mt-5 max-md:max-w-full">
                IIIT Kottayam has demonstrated rapid progress in its four years
                of existence. Having managed to set up a permanent campus
                despite the terrible weather conditions and the back-to-back
                floods, is testament to the resileience of our faculty. One
                among the other innovations is a fully functioning student run
                mess committee which manages to serve 300 students 3 meals a day
                along with snacks. Moving higher on Maslow’s hierarchy of needs,
                our students’ need for intellectual stimulation is readily
                satisfied by a dynamically changing syllabus sensitive to the
                developments of the industry. We wish to install the temperament
                of research in our students and thus have architected a syllabus
                focusing on emerging fields in data science and artificial
                intelligence. To give our students an understanding of how
                management of funds and people takes place in the real world we
                have also decided to introduce single credit business courses
                into our syllabus. The combination of the two disciplines gives
                our students an all-roundedperspective of the industry’s
                challenges and prepares them to take on any situation head- on.
                We look forward to working with your organization and
                <br />
                welcome you to the on-campus placements of the batch 2O23 as-on
                campus recruiters.
                <br />
                With Best Wishes!
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba44758c756b37e60df1e8cccb8b7169a858d0621a9d909bb240653b8ef2337?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
            className="self-end mt-96 w-3.5 aspect-[0.58] max-md:mt-10"
          />
        </div>
      </div>
    </div>,
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
        dragThreshold={0.2}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
      >
        {colors.map((color) => color)}
      </Carousel>
    </div>
  );
}
