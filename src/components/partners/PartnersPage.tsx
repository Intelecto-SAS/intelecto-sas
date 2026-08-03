import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { AvailableCapabilities } from "./AvailableCapabilities";
import { ContractsSection } from "./ContractsSection";
import { PartnerBenefits } from "./PartnerBenefits";
import { PartnerCTA } from "./PartnerCTA";
import { PartnerCapabilities } from "./PartnerCapabilities";
import { PartnerContactForm } from "./PartnerContactForm";
import { PartnersHero } from "./PartnersHero";
import { PartnersPositioning } from "./PartnersPositioning";
import { PartnershipModels } from "./PartnershipModels";
import { TrustSection } from "./TrustSection";

export function PartnersPage() {
  return (
    <div className="bg-white text-[#1e1e1e]" style={{ scrollBehavior: "smooth" }}>
      <Header />
      <main>
        <PartnersHero />
        <PartnersPositioning />
        <PartnerCapabilities />
        <ContractsSection />
        <TrustSection />
        <PartnershipModels />
        <AvailableCapabilities />
        <PartnerBenefits />
        <PartnerCTA />
        <PartnerContactForm />
      </main>
      <Footer />
    </div>
  );
}
