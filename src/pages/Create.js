import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import "../App.scss";
import Footer from "../components/Footer";

function Create() {
  return (
    <div className="create">
      <div class="bg-create">
        <HeroStatic heroText="Create" />
      </div>
      <div className="bg-sub-hero">
        <div className="sub-hero-viewport">
          <SubHero
            number="03"
            line={<span className="line"></span>}
            bigTitle="Create"
            subtitle="Fuel your dreams with our bespoke Yacht Building division"
            firstLine={
              <span>
                Dream, Build, Support. It might sound a little like the ABCs,
                but this simple, three step ethos is why ASM Yachts has
                cultivated an award-winning reputation for
                <strong> bespoke yacht craftsmanship</strong>.
              </span>
            }
            blockText={
              <span>
                From the start, our innovative maritime architects will help
                explore your vision to create the perfect look for your fully or
                semi customized <strong>dream</strong> vessel. Then our expert
                construction team will provide the technical, engineering and
                manufacturing experience to <strong>build</strong> a yacht
                completely tailored to your personal preferences. Throughout the
                entire process you will have the
                <strong> support</strong> of a dedicated account manager who can
                take you through every step and give you peace of mind.
              </span>
            }
          />
        </div>
      </div>
      <div className="bg-neutral">
        <SubHero
          mediumTitle="Refit &amp; Retrofit"
          firstLine={
            <span>
              Steering you towards <strong>perfection.</strong>
            </span>
          }
          blockText={
            <span>
              At ASM Yachts we have the expertise and the imagination to help
              you implement the right look and feel for your existing yacht.
              From choosing a designer to monitoring recondition to negotiating
              contracts, your <strong>dedicated account manager</strong> will
              handle all of the repairs, maintenance, renovation, servicing,
              remodelling and reconstruction that are necessary to get your
              yacht to where you want it. Our vast network of suppliers and
              partners allows our team to{" "}
              <strong>
                deliver exceptional, tailored results that are cost-effective
                and always on-schedule.
              </strong>
            </span>
          }
          bold={<br />}
          subText="Remember, at ASM Yachts, we have you covered, from bow to stern."
        />
      </div>
      <div className="footer-navigation">
        <div className="button-description">
          <p>Click to visit:</p>
          <a href="/run">RUN</a>
        </div>
        <div className="vl"></div>
        <div className="button-description">
          <p>Click to visit:</p>
          <a href="/own">OWN</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Create;
