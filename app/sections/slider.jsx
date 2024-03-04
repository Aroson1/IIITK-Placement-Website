import React from 'react';
var $ = require('jquery');
import Image from 'next/image';
// import ocean from '../../public/images/ocean-g2ba1bb5c0_1280.jpg'/;
import sea from '../../public/images/sea-g879f4f00d_1280.jpg';
import woman from '../../public/images/woman-g0b7a7f5dd_1280.jpg';

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import "../students.scss";


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
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
            nav: false
        },
        680: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3,
            nav: false
        }
    }
};

export default function Slider() {
    return (
        <div className=''>
            <OwlCarousel className="owl-theme gtco-testimonials" {...options}>
                
                <div className="item">
                
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src="./man.jpg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5>
                                    Aditi Shukla <br />
                                    <span> ... </span>
                                </h5>
                                <p className="card-text">
                                    Placeholder Text For Now....
                                </p>
                            </div>
                        </div>
                   
                </div>
                <div className="item">
                
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src="./man.jpg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5>
                                    Aditi Shukla <br />
                                    <span> ... </span>
                                </h5>
                                <p className="card-text">
                                    Placeholder Text For Now....
                                </p>
                            </div>
                        </div>
                   
                </div>
                <div className="item">
                
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src="./man.jpg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5>
                                    Aditi Shukla <br />
                                    <span> ... </span>
                                </h5>
                                <p className="card-text">
                                    Placeholder Text For Now....
                                </p>
                            </div>
                        </div>
                   
                </div>
                <div className="item">
                
                        <div className="card text-center">
                            <img
                                className="card-img-top"
                                src="./man.jpg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5>
                                    Aditi Shukla <br />
                                    <span> ... </span>
                                </h5>
                                <p className="card-text">
                                    Placeholder Text For Now....
                                </p>
                            </div>
                        </div>
                   
                </div>
                <div className="item">
                
                        <div className="card text-center bg-gradient-to-r from-violet-600 to-indigo-600">
                            <img
                                className="card-img-top"
                                src="./man.jpg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5>
                                    Aditi Shukla <br />
                                    <span> ... </span>
                                </h5>
                                <p className="card-text">
                                    Placeholder Text For Now....
                                </p>
                            </div>
                        </div>
                   
                </div>
                
                
                
            </OwlCarousel>
        </div>
    );
}
