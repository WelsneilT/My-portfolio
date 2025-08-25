import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ExperienceSection from "@/components/ui/experience-section";
import ProjectsSection from "@/components/ui/projects-section";
import ContactSection from "@/components/ui/contact-section";
import Chatbot from "@/components/ui/chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Chatbot />
    </div>
  );
};

export default Index;
