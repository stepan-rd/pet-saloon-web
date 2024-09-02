import { CallToActionSection } from "./components/CallToActionSection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { Navbar } from "./components/Navbar";
import { PricingSection } from "./components/PricingSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustSection } from "./components/TrustSection";



function App() {
  return (
    <div className="flex flex-col items-center justify-start w-full overflow-x-hidden dark-mode-scrollbar scrollbar font-Satoshi">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
