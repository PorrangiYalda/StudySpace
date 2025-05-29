import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Features from "./components/Features";
// import DashboardPreview from "./components/DashboardPreview";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  const faqRef = useRef(null);

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onFAQClick={scrollToFAQ} />
      <HeroSection />
      <FeaturesSection/>
      {/* <Features /> */}
      {/* <DashboardPreview /> */}
      <div ref={faqRef}>
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
