import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";
import SmallCards from "../components/SmallCards";

import "../App.scss";
import Footer from "../components/Footer";

function See() {
  return (
    <div className="see">
      <div class="bg-see">
        <HeroStatic heroText="See" />
      </div>
      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="06"
            line={<span></span>}
            bigTitle="See"
            subtitle="Uncover the ASM Yachts Story"
            title="Simply Superior."
            firstLine="Who needs more than that?  "
            blockText="
            At ASM Yachts, we don’t believe in waffle or fluff.  We believe in keeping things simple, so our results speak for themselves.  Our trusted, straightforward approach  n. "
          />
        </div>
      </div>
      <div className="bg-neutral">
        <SubHero
          mediumTitle="Who We Are "
          firstLine="Simply?"
          blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
        />
      </div>
      <div className="bg-cards">
        <SmallCards />
      </div>
      <div className="bg-white">
        <SubHero
          mediumTitle="Why ASM "
          firstLine="Because we are a complete superyacht management service provider that can deliver the WOW factor."
          blockText="Yes it sounds simple, but it makes all the difference. At ASM Yachts we know how to make dreams come true.  Our track record in conceptual design and innovative technology has resulted in some of the most pioneering projects in the industry.  We are also committed to maintaining a bespoke approach that is tailored to each individual client so you can be assured of extraordinary results and complete privacy, whatever your nautical needs.  ASM Yachts has the precision, imagination and expertise you have been looking for. "
        />
      </div>

      <Footer />
    </div>
  );
}

export default See;
