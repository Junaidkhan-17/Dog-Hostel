import { useEffect } from "react";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";
import WhyChooseSection from "../components/home/WhyChooseSection";
//import TestimonialsSection from "../components/home/TestimonialsSection";
import CTABanner from "../components/home/CTABanner";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "PURVI DOG HOSTEL | Premium Pet Care in Nagpur";
  }, []);

  return (
    <>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      {/*<TestimonialsSection />*/}
      <CTABanner />
    </>
  );
}

export default Home;
