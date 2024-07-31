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
                  <a
                    href="mailto:mathewcd@iiitkottayam.ac.in"
                    class="text-sm text-gray-500 dark:text-gray-400"
                  >
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
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800">
          <div className="w-full max-w-2xl mx-auto">
            <details className="mb-4 bg-gray-100 rounded-lg">
              <summary className="px-4 py-2 font-semibold cursor-pointer focus:outline-none">
                2021 Batch Coordinators
              </summary>
              <div className="px-4 py-2">
                {[
                  {
                    name: "Darisi Priyatham",
                    email: "darisi21bcy16@iiitkottayam.ac.in",
                    phone: "8885388619",
                  },
                  {
                    name: "Aaditi",
                    email: "aaditi21bec36@iiitkottayam.ac.in",
                    phone: "9152087943",
                  },
                  {
                    name: "Siddharth Gupta",
                    email: "siddharth21bcs54@iiitkottayam.ac.in",
                    phone: "9175817715",
                  },
                  {
                    name: "Sukrit Garg",
                    email: "sukrit21bcs162@iiitkottayam.ac.in",
                    phone: "9729725120",
                  },
                  {
                    name: "Maitri Savla",
                    email: "maitri21bcs197@iiitkottayam.ac.in",
                    phone: "9619673387",
                  },
                  {
                    name: "Ajay Krishna",
                    email: "narayanasetti21bcy32@iiitkottayam.ac.in",
                    phone: "8247340743",
                  },
                  {
                    name: "Riya bajaj",
                    email: "riya21bcs171@iiitkottayam.ac.in",
                    phone: "8080712300",
                  },
                  {
                    name: "Shivani",
                    email: "arishenapalli21bcy6@iiitkottayam.ac.in",
                    phone: "8555942321",
                  },
                ].map((coordinator, index) => (
                  <div
                    key={index}
                    className="mb-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                  >
                    <p className="font-semibold text-lg text-gray-800 mb-1">
                      {coordinator.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <a
                          href={`mailto:${coordinator.email}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {coordinator.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <a
                          href={`tel:${coordinator.phone}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {coordinator.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </details>

            <details className="mb-4 bg-gray-100 rounded-lg">
              <summary className="px-4 py-2 font-semibold cursor-pointer focus:outline-none">
                2022 Batch Coordinators
              </summary>
              <div className="px-4 py-2">
                {[
                  {
                    name: "Pranav Susar",
                    email: "susar22bcs85@iiitkottayam.ac.in",
                    phone: "9420270025",
                  },
                  {
                    name: "Aditya Baliga",
                    email: "aditya22bcs54@iiitkottayam.ac.in",
                    phone: "9074399408",
                  },
                  {
                    name: "Sameer Pasha",
                    email: "sameer22bcs82@iiitkottayam.ac.in",
                    phone: "8618187857",
                  },
                  {
                    name: "Anshumohan Acharya",
                    email: "anshumohan22bcy19@iiitkottayam.ac.in",
                    phone: "8639729337",
                  },
                  {
                    name: "Thanmaye Majeti",
                    email: "samrajya22bec37@iiitkottayam.ac.in",
                    phone: "6301787217",
                  },
                  {
                    name: "Mukund P L",
                    email: "mukundh22bcs100@iiitkottayam.ac.in",
                    phone: "7845516000",
                  },
                  {
                    name: "Anju",
                    email: "anju22bec20@iiitkottayam.ac.in",
                    phone: "7416850278",
                  },
                  {
                    name: "Nihit",
                    email: "nihit22bcs190@iiitkottayam.ac.in",
                    phone: "8602828960",
                  },
                  {
                    name: "Vishnu Narayanan",
                    email: "vishnu22bcs1@iiitkottayam.ac.in",
                    phone: "8075168988",
                  },
                  {
                    name: "Suchit Paul",
                    email: "suchit22bec6@iiitkottayam.ac.in",
                    phone: "8317495443",
                  },
                ].map((coordinator, index) => (
                  <div
                    key={index}
                    className="mb-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                  >
                    <p className="font-semibold text-lg text-gray-800 mb-1">
                      {coordinator.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <a
                          href={`mailto:${coordinator.email}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {coordinator.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <a
                          href={`tel:${coordinator.phone}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {coordinator.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </figure>
      </div>
    </>
  );
};

export default PointOfContact;
