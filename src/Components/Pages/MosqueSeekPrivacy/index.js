import React from "react";
import PrivacyBanner from "../../Utilities/PrivacyBanner";
import PrivacyContentSection from "../../Utilities/PrivacyContentSection";

const MosqueSeekPrivacy = () => {
    return (
        <React.Fragment>
            <PrivacyBanner pageTitle={'MosqueSeek'} />
            <PrivacyContentSection />
        </React.Fragment>
    );
}

export default MosqueSeekPrivacy;