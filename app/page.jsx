import Image from "next/image";
import NavBar from "./components/navbar";
import Hero from "./sections/hero_section";
import Brochures from "./sections/brochures_section";
import About from "./sections/about_section";
import People from "./sections/people_section";
import News from "./sections/news_section";
import Highlights from "./sections/highlights_section";
import PastRecruiters from "./sections/pastRecruiters_section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brochures />
      <About />
      <People />
      <News />
      <Highlights />
      <PastRecruiters />
      <Footer />
    </div>
  );
}
