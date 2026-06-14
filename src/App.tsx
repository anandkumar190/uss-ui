import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/AboutSection";
import { ContactSection } from "@/pages/ContactSection";
import { HeroSection } from "@/pages/HeroSection";
import { PortfolioSection } from "@/pages/PortfolioSection";
import { ProcessSection } from "@/pages/ProcessSection";
import { ServicesSection } from "@/pages/ServicesSection";
import { useSEO } from "@/hooks/useSEO";
import { API_BASE_URL } from "@/config";

export default function App() {
  // Activate dynamic SEO tags for the landing page
  useSEO("/");

  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/public/content`);
        const json = await res.json();
        if (json.success) {
          setContent(json.data);
        }
      } catch (err) {
        console.error("Failed to load layout content", err);
      }
    }
    loadContent();
  }, []);

  return (
    <Layout footerContent={content?.sections?.footer} contactConfig={content?.contactConfig} seo={content?.seo}>
      <HeroSection heroContent={content?.sections?.hero} />
      <AboutSection aboutContent={content?.about} />
      <ServicesSection servicesList={content?.services} />
      <ProcessSection processList={content?.processes} />
      <PortfolioSection />
      <ContactSection contactConfig={content?.contactConfig} />
    </Layout>
  );
}

