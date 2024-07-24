import Footer from "../components/footer";
import Navbar from "../components/navbar";

import About from "./sections/about_section";
import WhyRecruit from "./sections/why_recruit";
// import Carousel from "../components/testimonial/Carousel";


export default function page() {
    return(
        <>
        <Navbar />
        <About />
        <WhyRecruit/>
        <Footer />
        {/* <Carousel.render/> */}

        {/* <Slider /> */}
        </>
    );
   
}