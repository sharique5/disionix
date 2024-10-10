import React from "react";
import BlogDetailsSection from "../../Utilities/BlogDetailsSection";
import PageBanner from "../../Utilities/PageBanner";

const BlogDetails = () => {
    return (
        <React.Fragment>

            <PageBanner
                pageTitle={'Blog Details'}
                currentPage={'Blog'}
            />

            <BlogDetailsSection/>

        </React.Fragment>


    );
}

export default BlogDetails;