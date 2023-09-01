import BlogDetailsContent from "./BlogDetailsContent";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsSection = () => {
    return (

        <section className="blog-details py-120 rpy-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <BlogSidebar />
                    </div>
                    <div className="col-lg-8">
                        <BlogDetailsContent />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BlogDetailsSection;