import NavBar from "../components/navbar";
import Hero from "./sections/hero_section";
import Brochures from "./sections/brochures_section";
import People from "./sections/people_section";
import Highlights from "../why-iiitk/sections/highlights_section";
import PastRecruiters from "./sections/pastRecruiters_section";
import PointOfContact from "./sections/poc";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <People />
      <PastRecruiters />
      <Brochures />

      {/* <About /> */}
      {/* <News /> */}
      <PointOfContact />
      {/* <Highlights /> */}
      {/* <LogoGrid /> */}
      <Footer />
    </>
  );
}
