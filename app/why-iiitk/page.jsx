import Footer from "../components/footer";
import Navbar from "../components/navbar";

import About from "./sections/about_section";
import WhyRecruit from "./sections/why_recruit";


export default function page() {
    return(
        <>
        <Navbar />
        <About />
        <WhyRecruit/>
        <Footer />

        {/* <Slider /> */}
        </>
    );
   
}