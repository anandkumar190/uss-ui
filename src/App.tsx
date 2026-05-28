import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/AboutSection";
import { ContactSection } from "@/pages/ContactSection";
import { HeroSection } from "@/pages/HeroSection";
import { PortfolioSection } from "@/pages/PortfolioSection";
import { ProcessSection } from "@/pages/ProcessSection";
import { ServicesSection } from "@/pages/ServicesSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}

