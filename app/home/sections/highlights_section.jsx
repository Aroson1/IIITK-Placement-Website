"use client";
import Slider from './slider';


const Highlights = () => {
    return (
        <>
            <section className="self-stretch flex flex-row items-start justify-start py-10 pr-[13px] pl-[25px] box-border max-w-full shrink-0 text-center text-16xl text-gray-gray-900 font-footer-footer-sm" id="highlights">
                <div className="flex-1 flex flex-col items-center justify-start gap-[27px_0px] max-w-full">
                    <div className="w-[480px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
                        <div className="flex-1 flex flex-col items-center justify-start gap-[20px_0px] max-w-full">
                            <div className="w-[69px] h-[5px] relative [background:linear-gradient(225deg,_#6ce778,_#168c1c)]" />
                            <h1 className="m-0 self-stretch relative text-inherit leading-[55px] font-normal font-inherit mq450:text-2xl mq450:leading-[33px] mq750:text-9xl mq750:leading-[44px]">
                                <p className="m-0">{`Placement Highlights & `}</p>
                                <p className="m-0">Student Recognitions</p>
                            </h1>
                        </div>
                    </div>


                </div>
            </section>
            <Slider />

        </>


    );
};

export default Highlights;
