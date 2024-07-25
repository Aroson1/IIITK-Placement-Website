"use client";
import React from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../styles/studentCards.css";
import "../../styles/swiper-bundle.min.css";
import "../../styles/students.scss";

import data from "../../data_models/why_recruit.json";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 20,
  items: 3,
  autoplay: true,
  responsiveClass: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    680: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
};

const sliderContent = data.map((item, index) => (
  <div key={index} className="slide-content">
    <div className="card-wrapper swiper-wrapper">
      <div className="card swiper-slide">
        <div className="image-content">
          <span className="overlay"></span>
          <h2
            className="name px-2 flex justify-center items-center"
            style={{ zIndex: 10 }}
          >
            {item.title}
          </h2>
        </div>
        <div className="card-content">
          <p className="description leading-6" style={{ zIndex: 10 }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  </div>
));

export default function Slider() {
  return (
    <div className="" style={{ marginBottom: "20px" }}>
      <OwlCarousel className="owl-theme" {...options}>
        {sliderContent}
      </OwlCarousel>
    </div>
  );
}
