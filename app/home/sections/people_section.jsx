"use client";
import Slider2 from "../../components/Carousel";
import { useMediaQuery } from "react-responsive";
const People = () => {
  let isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div id="Students">
      <div className="flex flex-col ml-12 pt-[7vh] max-w-full text-4xl text-gray-900 leading-[55px] w-[357px] max-md:ml-2.5">
        <div className="" />
        <div
          className="h-[5px] w-[69px]"
          style={{
            background:
              "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
          }}
        />
        <div className="mt-2">
          Meet the People
          <br />
          <span className="font-bold">We are Working With</span>
        </div>
      </div>
      {/** */}

      <div className={`${isSmallScreen ? "pb-10" : "p-10"}`}>
        <Slider2 />
      </div>
    </div>
  );
};

export default People;
