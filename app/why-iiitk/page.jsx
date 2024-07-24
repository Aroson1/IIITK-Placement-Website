import Footer from "../components/footer";
import Navbar from "../components/navbar";

import About from "./sections/about_section";
import WhyRecruit from "./sections/why_recruit";
import Highlights from "./sections/highlights_section";
import TestimonialCarousel from "../components/testimonial/Carousel";


export default function page() {
    return(
        <>
        <Navbar />
        <About />
        <Highlights />
        <WhyRecruit/>
        <TestimonialCarousel/>
        <Footer />

        {/* <Slider /> */}
        </>
    );
   
}