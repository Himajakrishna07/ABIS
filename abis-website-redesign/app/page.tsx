import HeroSection from "@/components/HeroSection";
import CredibilityBar from "@/components/CredibilityBar";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesGrid from "@/components/ServicesGrid";
import IndustryEcosystem from "@/components/IndustryEcosystem";
import WhyChooseAbis from "@/components/WhyChooseAbis";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import LifeTeaser from "@/components/LifeTeaser";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Credibility Bar */}
      <CredibilityBar />

      {/* 3. About ABIS Teaser */}
      <AboutTeaser />

      {/* 4. Services Showcase (6 distinct experiences) */}
      <ServicesGrid />

      {/* 5. Industries We Serve (20+ sector ecosystem) */}
      <IndustryEcosystem />

      {/* 6. Why Choose ABIS (Value proposition & RPC mastery) */}
      <WhyChooseAbis />

      {/* 7. Client Logo Showcase (24 verified client logos) */}
      <ClientLogoCarousel />

      {/* 8. Life at ABIS (Real company photography & culture) */}
      <LifeTeaser />

      {/* 9. Final Strategic CTA */}
      <CtaBanner
        title="Let's Build Something Exceptional Together."
        subtitle="Whether you need the right talent, strategic workforce solutions or technology expertise, ABIS is ready to help you accelerate your business momentum."
        primaryButtonText="Discuss Your Requirements"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
