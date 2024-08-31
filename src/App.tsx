import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center justify-start font-Satoshi">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
    </div>
  );
}

export default App;
