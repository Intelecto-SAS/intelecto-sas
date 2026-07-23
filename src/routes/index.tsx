import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { AIAndAutomationSection } from "@/components/landing/AIAndAutomationSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CertificationsSection } from "@/components/landing/CertificationsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white text-[#1e1e1e]" style={{ scrollBehavior: "smooth" }}>
      <Header />
      <main>
        <Hero />
        <AIAndAutomationSection />
        <ServicesSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
