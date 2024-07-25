import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import MultiStepForm from "../components/form/MultiStepForm";
import arrow from "../../public/stats.svg";

function Hero() {
  return (
    <section className="mb-20 pt-20 px-3">
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
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
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
            className="text-black font-bold font-inter"
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
              communicate with the shortlisted candidates directly, it should be
              informed to TPC priorly.
            </span>
          </li>
          <li>
            <span className="leading-8 ">
              3. The company agrees to safeguard the personal data of students
              obtained through the Placement & Internship Office or its
              representatives including, but not limited to, name, phone number,
              e-mail address, gender, age, academic history. In turn, the TPC
              declares and agrees to keep the recruiter data confidential and
              use it only for recruitment purposes of all students in the
              institute.
            </span>
          </li>
          <li>
            <span className="leading-4 ">
              4. Companies offering Intern + Performance-based PPOs to students
              for durations exceeding 6 months are urged by the TPC to extend
              the PPOs on or before December 31, 2024, or by the end of the
              6-month period, whichever comes first.
            </span>
          </li>
          <li>
            <span className="leading-8 ">
              5. During the selection process, if the company finds that a
              particular student is suitable for a position which is different
              from that mentioned in JD, the company can still hire him.
              However, this should be discussed with the TPC and the formalities
              for the student remain the same as remaining shortlisted students.
            </span>
          </li>
          <li>
            <span className="leading-8">
              6. Company representatives are requested to read the student
              policy document to understand various regulations set forth by the
              TPC for the students.
            </span>
          </li>
          <li>
            <span className="leading-8">
              7. All the offer should be intimated to the selected students
              through the TPC. The companies must issue offer letters to the
              selected students within three months from the date of hiring.
            </span>
          </li>
          <li>
            <span className="leading-8">
              8. In case of a deferred joining date, change in the package
              and/or profile, and withdrawal offers, the same is to be intimated
              to the TPC with suitable justification for such a decision at the
              earliest.
            </span>
          </li>
        </ol>
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
        className="flex justify-center flex-col items-center mt-10 mb-10 px-4 pb-4"
        style={{ background: "linear-gradient(to bottom, #0077B6, #0096C7)" }}
      >
        <div className=" text-4xl font-bold mt-4  bg-clip-text leading-[55px] max-md:max-w-full mr-6">
          <span className="text-white">Recruitment Process</span>
        </div>

        <ol class="items-center lg:flex mt-10">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">1</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Recruiters interested should drop a mail at
                placementcoordinator@iiitkottayam.ac.in
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">2</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                The placement Office appoints a point of contact for you and
                sends invitations to recruiting Organisations.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">3</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                After successful verification the job is made available online
                to the students as per dates decided by the Placement Office.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">4</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                The details of the hob are verified by the executive officers.
              </p>
            </div>
          </li>
        </ol>
        <ol class="items-center lg:flex mt-10">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">5</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Interested students show their willingness to appear for the
                recruitement process of a company by applying for its job.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">6</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Companies can view resumes of interested students and shortlist
                using their online account.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">7</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Companies can proceed with their tests/screeening process after
                finalizing the schedule in coordinance with Placement Office.
              </p>
            </div>
          </li>
        </ol>
        <ol class="items-center lg:flex mt-4">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">8</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Companies shortlist the selected students for final interview
                process.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">9</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Placement Office allots dates to organizations for campus
                interview based on various details given by companies.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">10</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                The organization confirms the dates wiht the placement office.
              </p>
            </div>
          </li>
        </ol>
        <ol class="items-center lg:flex mt-4">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">11</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Orgainzations provide the list of students they are extending
                offers to at the end of their interview slot.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">12</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%] ">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Placement Office notifies and organization with the aceptance of
                the selected students.
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span className="font-bold text-white">13</span>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 bg-white shadow-md rounded-xl p-4 w-[95%]">
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Organization generate and deliver the offer letter to the
                selected candidates consistent with the information of the job
                created online.
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
