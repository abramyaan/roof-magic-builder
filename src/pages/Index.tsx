import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuizSection } from "@/components/QuizSection";
import { ServicesSection } from "@/components/ServicesSection";

import { PortfolioSection } from "@/components/PortfolioSection";
import { CompletedWorksSection } from "@/components/CompletedWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import  FloatingPhone from "@/components/FloatingPhone";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuizSection />
      <ServicesSection />
      <CompletedWorksSection />
      <PortfolioSection />
      <PricingSection />
      <ReviewsSection />
      <MapSection />
      <Footer />
      <FloatingPhone />
    </div>
  );
};

export default Index;
