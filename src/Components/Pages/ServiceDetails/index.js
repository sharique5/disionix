import React from "react";
import CallToAction from "../../Utilities/CallToAction";
import PageBanner from "../../Utilities/PageBanner";
import ServiceDetailsSection from "../../Utilities/ServiceDetailsSection/ServiceDetailsSection";
import TeamSection from "../../Utilities/TeamSection";

const ServiceDetails = () => {
    return (
        <React.Fragment>

            <PageBanner
                pageTitle={'Service Details'}
                currentPage={'Service'}
            />

            <ServiceDetailsSection />

            <CallToAction/>
            <TeamSection/>

        </React.Fragment>
    );
}

export default ServiceDetails;