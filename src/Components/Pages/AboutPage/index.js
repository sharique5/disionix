import React from "react";
import AboutSection from "../../Utilities/AboutSection";
import AboutChooseUsSection from "../../Utilities/AboutSection/AboutChooseUsSection";
import CallToAction from "../../Utilities/CallToAction";
import ClientsSection from "../../Utilities/ClientsSection";
import PageBanner from "../../Utilities/PageBanner";
import TeamSection from "../../Utilities/TeamSection";

const About = () => {
    return (
        <React.Fragment>
            <PageBanner
                pageTitle={'About Us'}
                currentPage={'About'}
            />
            <AboutSection />
            <AboutChooseUsSection />
            <ClientsSection />
            <TeamSection />
            <CallToAction
                extraClass={'bg-white'}
            />
        </React.Fragment>
    );
}

export default About;