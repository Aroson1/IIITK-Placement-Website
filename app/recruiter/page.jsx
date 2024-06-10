import * as React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import timeline from "../../public/Timeline.png";
import Image from "next/image";
import MultiStepForm from "../components/form/MultiStepForm";

function TopicCard({ title, content }) {
  return (
    <div className="flex flex-col grow px-8 pt-11 pb-20 w-full font-semibold text-center bg-white rounded-3xl shadow-2xl shadow-green-400 max-md:px-5 max-md:mt-10">
      <h3 className="self-center text-4xl tracking-tighter leading-[60.12px] text-sky-950">
        {title}
      </h3>
      <p className="mt-16 text-base tracking-tighter leading-7 text-slate-900 max-md:mt-10">
        {content}
      </p>
    </div>
  );
}

function Page() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mb-20">
          <div className="justify-center py-10 pl-11 w-full shadow-sm max-md:pl-5 max-md:max-w-full b">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-5xl font-extrabold text-gray-900 bg-clip-text leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
                    FOR{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-5xl font-extrabold bg-clip-text leading-[71px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]"
                    >
                      R
                    </span>
                    ECRUITERS
                  </h1>
                  <p className="mt-7 text-lg leading-9 text-slate-600 max-md:max-w-full">
                    Indian Institute of Information Technology Kottayam.
                    <br />
                    An Institute of National Importance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
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

        <div className="flex flex-col justify-center mt-20">
          <div
            className="h-[5px] w-[69px] mt-3  self-center"
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
            }}
          />
          <h2 className="self-center mt-6  text-4xl tracking-tighter leading-10 text-center font-inter text-slate-800 bg-clip-text max-md:ml-2.5">
            Register as a{" "}
            <span className="text-black font-bold">RECRUITER</span>
          </h2>
          <p className="self-center mt-3 text-slate-800 mb-5">
            Please fill the form below. Feel free to add as much detail as
            needed.
          </p>
        </div>
        <MultiStepForm />
        <section className="flex flex-col px-12 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <p className="text-lg leading-10 text-slate-500 max-md:max-w-full">
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
                  3. The company agrees to safeguard the personal data of
                  students obtained through the Placement & Internship Office or
                  its representatives including, but not limited to, name, phone
                  number, e-mail address, gender, age, academic history. In
                  turn, the Placement & Internship Office declares and agrees to
                  keep the recruiter data confidential and use it only for
                  recruitment purposes of all students in the institute.
                </span>
              </li>
            </ol>
            <span className="leading-4 ">
              Founded in 1959, the Indian Institute of Technology Madras is one
              of the national centres of excellence in engineering education and
              research. Over the decades the institute has worked hard to earn a
              very high repute among the general public, the academia as well
              the industry. Setting standards of excellence in all our
              endeavours, namely Teaching, Research and Consultancy, IITM has
              pushed the frontiers of technological knowledge as well as served
              the nation in all its capacity for technical and scientific
              advancement.
            </span>
            <span className="leading-8 ">
              Maintaining strong relations with the industry is one of the
              priorities of the institute. Through Industrial Consultancy and
              Sponsored Research (IC & SR), the faculty and staff of the
              institute get to work on collaborative projects with the industry.
              Many companies also pursue joint research programs with various
              departments and also sponsor individual projects. Scientists and
              researchers from top firms also visit the institute frequently for
              technical lectures and interactions. In order to give the students
              a valuable exposure to the industry, internships are encouraged
              and are included as a mandatory part in the undergraduate
              curriculum.
            </span>
          </p>
          <div className="flex flex-col justify-center mt-20">
            <div
              className="h-[5px] w-[69px] mt-3  self-center"
              style={{
                background:
                  "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              }}
            />
            <h2 className="self-center mt-6  text-4xl tracking-tighter leading-10 text-center text-black bg-clip-text max-md:ml-2.5">
              Why Recruit At{" "}
              <span
                className="font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IIIT K
              </span>
            </h2>
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <TopicCard
                title="Topic 1"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <TopicCard
                title="Topic 2"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <TopicCard
                title="Topic 3"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <TopicCard
                title="Topic 4"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <TopicCard
                title="Topic 5"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <TopicCard
                title="Topic 6"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </div>
          </div>
        </section>
      </main>
      <Image src={timeline} alt="timeline" className="mt-24 mb-20" />
      <Footer />
    </>
  );
}

export default Page;
