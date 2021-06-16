import React from "react";

import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import HomeSectionForm from "../components/HomeSectionForm";
import Footer from "../components/Footer";

import "../App.scss";

function Home() {
    return (
        <div>
            <Hero heroText="A LEADING YACHT &amp; MARINE COMPANY" />
            <HomeSection />
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <HomeSectionForm />
            <Footer />
        </div>
    );
}

export default Home;
