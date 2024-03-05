import * as React from "react";

export default function Footer(props) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col pt-6 pb-10 w-full bg-slate-50 max-md:max-w-full">
        <div className="flex flex-col items-start pb-12 pl-12 w-full max-md:pl-5 max-md:max-w-full">
          <div className="flex z-10 gap-0 justify-between text-2xl font-semibold leading-6 text-green-700">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2c6b767c66ebdbf356f6d9cea99ca338be8f9dc7bf7e3e054475483c865b8b0?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
              className="aspect-square w-[98px]"
            />
            <div className="mt-3">
              <span className="text-3xl leading-8">S</span>tudents
              <br />
              <span className="text-3xl leading-8">P</span>lacement
              <br />
              <span className="text-3xl leading-8">C</span>ommittee
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/168ae74cb54863628b94d4b76f72c964c0d33cd0d939bae7b50863f31c5081ba?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
              className="self-end mt-6 aspect-[0.04] stroke-[3px] stroke-green-700 w-[3px]"
            />
          </div>
          <div className="self-end mt-0 max-w-full h-px bg-zinc-200 w-[1036px]" />
          <div className="self-end mt-1 mr-28 max-w-full w-[780px] max-md:mr-2.5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="text-lg font-bold tracking-normal text-green-700">
                    Links
                  </div>
                  <div className="mt-9 text-base leading-10 text-slate-500">
                    About Us
                    <br />
                    Services
                    <br />
                    Case Studies
                    <br />
                    How it works
                    <br />
                    Blog
                    <br />
                    Careers
                    <br />
                    Areas We Serve
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-lg text-slate-500 max-md:mt-10">
                  <div className="font-bold tracking-normal text-green-700">
                    Contact us
                  </div>
                  <div className="mt-9 leading-8">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </div>
                  <div className="mt-7 leading-[167%]">+908 89097 890</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c1ab053369ccf3be00a688ca25cbf2da896ac60b99cf9be4aa907e8f14e3e28?apiKey=09d58e4ed20e4986bcbec4c048901f7f&"
                  className="grow mt-64 max-w-full aspect-[5.56] w-[184px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="z-10 mt-0 ml-72 text-base font-semibold leading-5 text-green-700 max-md:mt-0 max-md:ml-2.5">
            <span className="text-base">I</span>ndian{" "}
            <span className="text-base">I</span>nstitute of <br />
            <span className="text-base">I</span>nformation
            <span className="text-base"> T</span>echnology
            <br />
            <span className="text-base">K</span>ottayam
          </div>
          <div className="mt-14 mb-10 ml-14 text-lg leading-8 text-slate-500 max-md:mt-10 max-md:ml-2.5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </div>
        </div>
        <div className="flex flex-col px-5 mt-20 w-full text-sm tracking-normal leading-loose whitespace-nowrap text-slate-600 max-md:mt-10 max-md:max-w-full">
          <div className="w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
          <div className="self-center mt-9">
            © 2023 Copyright by IIITK. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
