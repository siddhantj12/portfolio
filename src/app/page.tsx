import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Competitions from "@/components/Competitions";
import NowSection from "@/components/NowSection";
import FooterContact from "@/components/FooterContact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Competitions />
      <NowSection />
      <FooterContact />
    </>
  );
}
