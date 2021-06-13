import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import "../App.scss";
import Footer from "../components/Footer";

function Crew() {
    return (
        <div className="crew">
            <div class="bg-crew">
                <HeroStatic heroText="Crew" />
            </div>
            <div className="bg-sub-hero">
                <div className="sub-hero-viewport">
                    <SubHero
                        number="05"
                        line={<span className="line"></span>}
                        bigTitle="Crew"
                        firstLine={
                            <span>
                                Superyachts need super crews. <strong>That is where you come in.</strong>
                            </span>
                        }
                        blockText={
                            <span>
                                Yachting is one of the most exciting and dynamic industries in the world. Joining the
                                crew of a superyacht introduces you to a world of adventure, travel and friendship. At
                                ASM Yachts we provide you with the experience and training to work on some of the
                                world’s most beautiful vessels in some of the world’s most amazing places.
                            </span>
                        }
                    />
                </div>
            </div>
            <div className="bg-neutral">
                <SubHero
                    mediumTitle="You bring the passion, we’ll do the rest "
                    blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
                    bold={<br />}
                    subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
                />
            </div>
            <div className="bg-white">
                <SubHero
                    mediumTitle="Get ready for limitless possibilities "
                    blockText="At ASM Yachts we have the expertise and the imagination to help you implement the right look and feel for your existing yacht.  From choosing a designer to monitoring recondition to negotiating contracts, your dedicated account manager will handle all of the repairs, maintenance, renovation, servicing, remodelling and reconstruction that are necessary to get your yacht to where you want it.  Our vast network of suppliers and partners allows our team to deliver exceptional, tailored results that are cost-effective and always on-schedule."
                    bold={<br />}
                    subText="Remember, at ASM Yachts, we have you covered, from bow to stern.  "
                />
            </div>

            <Footer />
        </div>
    );
}

export default Crew;
