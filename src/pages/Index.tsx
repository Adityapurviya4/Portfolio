import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import ExperienceSection from "@/components/ExperienceSection";
import CodingStats from "@/components/CodingStats";
import ProjectsSection from "@/components/ProjectsSection";
import Ticker from "@/components/Ticker";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AboutSection />
      <TechStack />
      <ExperienceSection />
      <CodingStats />
      <ProjectsSection />
      <Ticker />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
