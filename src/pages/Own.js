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
                        line={<span className="line"></span>}
                        bigTitle="Own"
                        firstLine={
                            <span>
                                Superyachts are a <strong>supersized investment</strong>, so you deserve a{" "}
                                <strong>supersized level of service.</strong>
                            </span>
                        }
                        blockText={
                            <span>
                                That is exactly what you will find at ASM Yachts. Firstly, our expert team has an
                                impressive international network with{" "}
                                <strong>access to the world’s most remarkable yachts</strong>, superyachts and
                                megayachts that aren’t available on the open market. Secondly, their experience in
                                <strong> luxury yacht brokerage</strong> ensures you are guaranteed to receive a wide
                                range of options tailored to your needs delivered with trusted advice and comprehensive
                                assistance. Finally, our industry-leading position gives us{" "}
                                <strong>unique insight into market trends and opportunities</strong>, so we know where
                                and when the finest yachts will become available for sale.
                            </span>
                        }
                        bold={<br />}
                        subText={
                            <span>
                                That is why at ASM Yachts you fill find <strong>supersized satisfaction</strong> every
                                step of the way.
                            </span>
                        }
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Own;
