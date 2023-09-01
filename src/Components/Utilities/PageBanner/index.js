import { Link } from "react-router-dom";

const PageBanner = ({ pageTitle, currentPage }) => {
    return (

        <section className="page-banner">
            <div className="container">
                <div className="banner-content text-center">
                    <h2>{pageTitle}</h2>
                    <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={"/"}>{"Home"}</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{currentPage}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PageBanner;