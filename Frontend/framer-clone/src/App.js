import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginPage"; // path based on your structure

function Home() {
  const faqRef = useRef(null);
  const scrollToFAQ = () => faqRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar onFAQClick={scrollToFAQ} />
      <HeroSection />
      <FeaturesSection />
      <div ref={faqRef}>
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
   
  );
}
