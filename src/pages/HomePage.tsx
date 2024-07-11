import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ImageHero from "../components/imageHero";
import AboutUs from "../components/aboutUs";
import Property from "../components/properti";
import WhyUs from "../components/whyUs";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageHero />
      <AboutUs />
      <Property />
      <WhyUs />
      <Footer />
    </>
  );
}

export default HomePage;
