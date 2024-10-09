import React from "react";

// import BlogSection from "../../Utilities/BlogSection";
import CallToAction from "../../Utilities/CallToAction";
import ChooseusSection from "../../Utilities/ChooseusSection";
// import ClientsSection from "../../Utilities/ClientsSection";
import HeroBanner from "../../Utilities/HeroBnner";
import ProjectSection from "../../Utilities/ProjectSection";
import ServiceSection from "../../Utilities/ServiceSection";
// import TestimonialSection from "../../Utilities/TestimonialSection";

const HomePage = () => {
    return (
        <React.Fragment>
            <HeroBanner />
            <ServiceSection />
            {/* <ClientsSection /> */}
            <ChooseusSection />
            <ProjectSection />
            {/* <TestimonialSection /> */}
            <CallToAction />
            {/* <BlogSection /> */}
        </React.Fragment>
    );
}
export default HomePage;