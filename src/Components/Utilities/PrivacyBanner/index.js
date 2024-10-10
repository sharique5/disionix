const PrivacyBanner = ({ pageTitle, currentPage }) => {
    return (
        <section className="privacy-banner">
            <div className="container">
                <div className="banner-content text-center">
                    <h2>{pageTitle}</h2>
                    <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    Privacy Policy
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrivacyBanner;