import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";
import AyurvedaVsAllopathyAnalysis from "../Components/AyurvedaVsAllopathyAnalysis";
import Slider  from "../Components/Slider";
import FAQs from "../Components/FAQs";
// import Survey from "../Components/Survey";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Slider/>
      <About />
      <AyurvedaVsAllopathyAnalysis />
      <FAQs />
      
      
      <Footer />
    </div>
  );
}

export default Home;
