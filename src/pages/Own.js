import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import "../App.scss";
import Footer from "../components/Footer";

function Own() {
  return (
    <div className="own">
      <div class="bg-own">
        <HeroStatic heroText="Own" />
      </div>
      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="04"
            line={<span></span>}
            bigTitle="Own"
            firstLine="Superyachts are a supersized investment, so you deserve a supersized level of service. "
            blockText="That is exactly what you will find at ASM Yachts.  Firstly, our expert team has an impressive international network with access to the world’s most remarkable yachts, superyachts and megayachts that aren’t available on the open market.  Secondly, their experience in luxury yacht brokerage ensures you are guaranteed to receive a wide range of options tailored to your needs delivered with trusted advice and comprehensive assistance.  Finally, our industry-leading position gives us unique insight into market trends and opportunities, so we know where and when the finest yachts will become available for sale."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Own;
