import { Link } from "react-router-dom";

const AboutChooseUsSection = () => {
    return (
        <section className="about-choose-us pt-120 rpt-100 pb-115 rpb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-video-area">
                            <a className="video-play mfp-iframe" href="https://www.youtube.com/watch?v=aFWhf2wjJYo&list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
                                <i className="icofont-ui-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-choose-us-left">
                            <div className="section-title">
                                <h2>{"Some Reason Why You Should Choose Us!"}</h2>
                            </div>
                            <div className="chooseus-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"Simplify Communication"}
                                            </li>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"Eliminate Repeat Entry"}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"24/7 Customer Service"}
                                            </li>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"Expert Team Members"}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the release and more recent."}</blockquote>
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-choose-us-right">
                            <h2>{"We are Creative & Professional"} <span>{"Our Mission And Vission."}</span></h2>
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                            <Link to={"/about"} className="btn theme-btn">{"Read More"}
                                <i className="icofont-double-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutChooseUsSection;