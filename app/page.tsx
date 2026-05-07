import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import UserCounter from "@/components/UserCounter";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import OrbsSection from "@/components/OrbsSection";
import Benefits from "@/components/Benefits";
import Stories from "@/components/Stories";
import BlogGuide from "@/components/BlogGuide";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionStatement />
        <UserCounter />
        <HowItWorks />
        <Features />
        <OrbsSection />
        <Benefits />
        <Stories />
        <BlogGuide />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
