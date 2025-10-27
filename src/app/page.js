import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CarouselSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
