import Slider2 from "../components/Carousel";

const People = () => {
  return (
    <div>
      <div className="flex flex-col ml-12 max-w-full text-4xl text-gray-900 leading-[55px] w-[357px] max-md:ml-2.5">
        <div className="h-[5px] w-[69px]" />
        <div className="mt-9">
          Meet the People
          <br />
          <span className="font-bold">We are Working With</span>
        </div>
      </div>
      {/** */}

      <div className="p-10 ">
        <Slider2 />
      </div>
    </div>
  );
};

export default People;
