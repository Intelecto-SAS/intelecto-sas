import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { AvailableCapabilities } from "./AvailableCapabilities";
import { PartnerBenefits } from "./PartnerBenefits";
import { PartnerCTA } from "./PartnerCTA";
import { PartnerCapabilities } from "./PartnerCapabilities";
import { PartnersHero } from "./PartnersHero";
import { PartnersPositioning } from "./PartnersPositioning";
import { PartnershipModels } from "./PartnershipModels";

export function PartnersPage() {
  return (
    <div className="bg-white text-[#1e1e1e]" style={{ scrollBehavior: "smooth" }}>
      <Header />
      <main>
        <PartnersHero />
        <PartnersPositioning />
        <PartnerCapabilities />
        <PartnershipModels />
        <AvailableCapabilities />
        <PartnerBenefits />
        <PartnerCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
