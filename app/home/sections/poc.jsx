"use client";

const PointOfContact = () => {
  return (
    <>
      <section
        className="self-stretch flex flex-row items-start justify-start py-10 pr-[13px] pl-[25px] box-border max-w-full shrink-0 text-center text-16xl text-gray-gray-900 font-footer-footer-sm"
        id="highlights"
      >
        <div className="flex-1 flex flex-col items-center justify-start gap-[27px_0px] max-w-full">
          <div className="w-[480px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[20px_0px] max-w-full">
              <div className="w-[69px] h-[5px] relative [background:linear-gradient(225deg,_#6ce778,_#168c1c)]" />
              <div className=" text-4xl font-bold  bg-clip-text leading-[55px] max-md:max-w-full mr-6">
                {"   "}
                <span>Points of </span>

                <span
                  style={{
                    background:
                      "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="grid mx-12 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {/* <figure class="flex flex-col md:flex-row items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"> */}
        <figure class="flex flex-col md:flex-row items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 ">

          {/* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8 md:mb-0 md:mr-4"> */}
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  mb-8 md:mb-0 md:mr-4">

            <div class="flex flex-col items-center pb-5 pt-2">
              <img
                class="w-24 h-24 mb-2 rounded-full shadow-lg"
                src="/images/peoples_section/mathew.jpeg"
                alt="Dr. Mathew C D"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                <a
                  href="https://www.linkedin.com/in/dr-mathew-c-d-77418927/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Mathew C D
                </a>
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Placement Cell Cooridinator
              </span>
              <div class="flex mt-2 md:mt-2">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  +91 79029 69784{" | "}
                  <a href="mailto:mathewcd@iiitkottayam.ac.in" class="text-sm text-gray-500 dark:text-gray-400">
                  mathewcd@iiitkottayam.ac.in
                  </a>
                </span>
              </div>
              <div class="flex mt-3 md:mt-2">
                <a
                  href="https://www.linkedin.com/in/dr-mathew-c-d-77418927/"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-5 pt-2">
              <img
                class="w-24 h-24 mb-2 rounded-full shadow-lg"
                src="https://placehold.it/64x64"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Josit Ma'am
                </a>
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Placement Cell Cooridinator
              </span>
              <div class="flex mt-2 md:mt-2">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  +91 9876543210{" | "}
                  <a href="#" class="text-sm text-gray-500 dark:text-gray-400">
                    hello@gmail.com
                  </a>
                </span>
              </div>
              <div class="flex mt-3 md:mt-2">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div> */}
        </figure>
        {/* <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700"> */}
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800">

          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Student Coordinators
            </h3>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            {/* <img
              class="rounded-full w-9 h-9"
              src="https://placehold.it/64x64"
              alt="profile picture"
            /> */}
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com/in/darisipriyatham/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Darisi Priyatham
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Student Cooridinator
              </div>
            </div>
            {/* <img
              class="rounded-full w-9 h-9 ml-3"
              src="https://placehold.it/64x64"
              alt="profile picture"
            /> */}
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com/in/aaditi-chikhalkar-61a11a26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aaditi Chikhalkar
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Student Cooridinator
              </div>
            </div>
          </figcaption>
          <blockquote class="max-w-2xl mx-auto my-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Other Coordinators
            </h3>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Person One
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Designation
              </div>
            </div>

            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Person Two
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Designation
              </div>
            </div>

            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Person Three
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Designation
              </div>
            </div>

            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Person Four
                </a>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Designation
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default PointOfContact;
