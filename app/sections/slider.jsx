"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import sea from "../../public/images/sea-g879f4f00d_1280.jpg";
import woman from "../../public/images/woman-g0b7a7f5dd_1280.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../styles/studentCards.css";
import "../styles/swiper-bundle.min.css";
import "../styles/students.scss";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 20,
  items: 3,
  // autoplay: true,
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

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });

export default function Slider() {
  return (
    <div className="">
      <OwlCarousel className="owl-theme" {...options}>
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <Image src={sea} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Aditi Shukla</h2>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>
                

                
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <Image src={sea} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Aditi Shukla</h2>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>

                
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <Image src={sea} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Aditi Shukla</h2>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>

                
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
              <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                  <Image src={sea} alt="" class="card-img" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Aditi Shukla</h2>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>
                <p class="description">Something something something...</p>

                
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
