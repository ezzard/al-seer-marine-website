import React from "react";

import HeroStatic from "./components/HeroStatic";
import SubHero from "./components/SubHero";
import RunContent from "./components/RunContent";

import "./App.scss";
import Footer from "./components/Footer";

function Run() {
  return (
    <div className="run">
      <div className="bg-run">
        <HeroStatic heroText="Run" />
      </div>
      <div className="sub-hero-viewport">
        <SubHero
          line={<span></span>}
          number="01"
          bigTitle="Run"
          subtitle="Discover our 360° approach to luxury yacht management "
          firstLine="Because you deserve the best. "
          blockText="
          As the world of superyachts enters a new frontier, ASM Yachts is making waves as the name to trust in yacht management.  Our expert team is available around the clock to provide you with full-service support, tailored to your needs.  From berthing to operations, accounts to crew, technical support to emergency response, we have the knowledge and experience to protect your investment, both on and off the water.  That way, you can focus on living your ocean life to the fullest.     "
        />
      </div>
      <RunContent />
      <Footer />
    </div>
  );
}

export default Run;
