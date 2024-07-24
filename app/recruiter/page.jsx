import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import timeline from "../../public/Timeline.png";
import Image from "next/image";
import MultiStepForm from "../components/form/MultiStepForm";
import arrow from "../../public/stats.svg";

function Hero() {
  return (
    <section className="mb-20">
      <div className="justify-center py-10 pl-11 w-full shadow-sm max-md:pl-5 max-md:max-w-full b">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1
                style={{
                  fontFamily: "Inter",
                }}
                className="text-5xl font-extrabold text-gray-900 bg-clip-text leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]"
              >
                FOR{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Inter",
                  }}
                  className="text-5xl font-extrabold bg-clip-text leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]"
                >
                  R
                </span>
                ECRUITERS
              </h1>
              <div className="flex gap-4 justify-end self-start px-1 text-base font-medium leading-6  whitespace-nowrap mb-16">
                <a href="/brochures/recruiterscorner.pdf" target="_blank">
                  <button style={{ display: "flex" }}>
                    <div
                      className="grow"
                      style={{
                        color: "rgba(78, 220, 72, 1)",
                      }}
                    >
                      Learn More about IIIT-K
                    </div>
                    <Image src={arrow} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d8d66912cba529bb5bce0a7b221223a4bad86676e548a6581a4db9d2dd254f9?apiKey=54911849f61d4333a39b368307a01ae9&"
              alt="Image description"
              className="grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Form() {
  return (
    <main>
      <div className="flex flex-col justify-center mt-20">
        <div
          className="h-[5px] w-[69px] mt-3  self-center"
          style={{
            background:
              "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
          }}
        />
        <h2 className="self-center mt-6  px-3 text-4xl max-md:text-5xl tracking-tighter leading-10 text-center font-inter text-slate-800 bg-clip-text">
          Register as a{" "}
          <span
            className="text-black font-bold"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter",
            }}
          >
            RECRUITER
          </span>
        </h2>
        <p className="self-center mt-3 text-slate-800 mb-5 px-3">
          Please fill the form below. Feel free to add as much detail as needed.
        </p>
      </div>
      <MultiStepForm />
    </main>
  );
}

function TandC() {
  return (
    <section className="flex flex-col px-12 mt-10 mb-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="text-sm leading-10 text-slate-500 max-md:max-w-full">
        <strong className="font-black text-green-600">
          Kindly read the following terms and conditions before proceeding:
        </strong>
        <ol>
          <li>
            <span className="leading-8 ">
              1. The company agrees to abide by the rules stated in the
              Recruiter's Guidelines & Policies.
            </span>
          </li>
          <li>
            <span className="leading-8 ">
              2. The company is not allowed to have a direct line of contact
              with individual students until the day of interviews. This
              includes phone calls, e-mails and any other means of
              communication. In cases where the company is required to
              communicate with the shortlisted candidates directly, it would
              need to be done with the express permission of the Placement &
              Internship Office.
            </span>
          </li>
          <li>
            <span className="leading-8 ">
              3. The company agrees to safeguard the personal data of students
              obtained through the Placement & Internship Office or its
              representatives including, but not limited to, name, phone number,
              e-mail address, gender, age, academic history. In turn, the
              Placement & Internship Office declares and agrees to keep the
              recruiter data confidential and use it only for recruitment
              purposes of all students in the institute.
            </span>
          </li>
        </ol>
        <span className="leading-4 ">
          Founded in 1959, the Indian Institute of Technology Madras is one of
          the national centres of excellence in engineering education and
          research. Over the decades the institute has worked hard to earn a
          very high repute among the general public, the academia as well the
          industry. Setting standards of excellence in all our endeavours,
          namely Teaching, Research and Consultancy, IITM has pushed the
          frontiers of technological knowledge as well as served the nation in
          all its capacity for technical and scientific advancement.
        </span>
        <span className="leading-8 ">
          Maintaining strong relations with the industry is one of the
          priorities of the institute. Through Industrial Consultancy and
          Sponsored Research (IC & SR), the faculty and staff of the institute
          get to work on collaborative projects with the industry. Many
          companies also pursue joint research programs with various departments
          and also sponsor individual projects. Scientists and researchers from
          top firms also visit the institute frequently for technical lectures
          and interactions. In order to give the students a valuable exposure to
          the industry, internships are encouraged and are included as a
          mandatory part in the undergraduate curriculum.
        </span>
      </div>
    </section>
  );
}

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <TandC />
      <div
        className="flex justify-center"
        style={{ background: "linear-gradient(to bottom, #0077B6, #0096C7)" }}
      >
        <ol class="items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.0.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 23, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.3.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 5, 2022
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default Page;
