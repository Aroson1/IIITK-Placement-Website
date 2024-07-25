import React from "react";
import Aditya from "../../../public/testimonials/grsmtqci.png";
import Seshathri from "../../../public/testimonials/nnmyo3y4.png";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    author: "A V S Aditya Vardhan",
    quote:
      "I am grateful for the opportunities I've encountered and the growth I've experienced through my journey in Placement Cell, IIIT Kottayam. As a software professional, I've obtained the value of perseverance and innovation. My time at IIIT Kottayam equipped me with not only technical skills but also a mindset that embraces challenges as opportunities. I encourage current and future students, as well as job seekers, to leverage the excellent resources and support available through the placement cell at IIIT Kottayam. With dedication and the right guidance, you can achieve remarkable milestones and contribute meaningfully to the industry.",
    image: Aditya,
    designation: "Senior Software Engineer L3 @ Shipsy",
  },
  {
    id: 2,
    author: "Seshathri S",
    quote:
      "I am grateful for the opportunities I've encountered and the growth I've experienced through my journey in Placement Cell, IIIT Kottayam. As a software professional, I've obtained the value of perseverance and innovation. My time at IIIT Kottayam equipped me with not only technical skills but also a mindset that embraces challenges as opportunities. I encourage current and future students, as well as job seekers, to leverage the excellent resources and support available through the placement cell at IIIT Kottayam. With dedication and the right guidance, you can achieve remarkable milestones and contribute meaningfully to the industry.",
    image: Seshathri,
    designation: "IT Software Engineer @Palo Alto Networks",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="outersection">
      <div
        className="innersection flex flex-col items-center justify-center relative bg-green-700 p-[3%] md:p-[4%] lg:p-[4%]"
        style={{
          backgroundColor: "rgba(249, 249, 255, 1)",
          zIndex: "1",
        }}
      >
        <div className=" text-4xl font-bold  bg-clip-text leading-[55px] max-md:max-w-full mr-6">
          <span
            style={{
              background:
                "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonials
          </span>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                      style={{
                        color: "", // Modified color to be darker
                      }}
                    >
                      <path
                        fill="#00000022"
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                      ></path>
                    </svg>
                    <blockquote className="relative">
                      <p
                        className=" tracking-tight text-slate-700 text-md"
                        style={{
                          fontFamily : 'inter',
                        }}
                      >
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                          {testimonial.author}
                        </div>
                        <i>{testimonial.designation}</i>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <Image
                          alt=""
                          className="h-14 w-14 object-cover"
                          src={testimonial.image}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
