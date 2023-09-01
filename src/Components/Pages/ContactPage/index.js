import React from "react";
import ContactSection from "../../Utilities/ContactSection";
import PageBanner from "../../Utilities/PageBanner";

const ContactUs = () => {
    return (

        <React.Fragment>

            <PageBanner
                pageTitle={'Contact Us'}
                currentPage={'Contact'}
            />

            <ContactSection />



        </React.Fragment>

    );
}

export default ContactUs;