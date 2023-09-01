import { Link } from "react-router-dom";

import post1 from '../../../assets/images/footer/post1.png';
import post2 from '../../../assets/images/footer/post2.png';

const footerPost = [
    {
        thumb: post1,
        title: 'We carry more than just good coding skills.',
        date: '22.01.2021'
    },
    {
        thumb: post2,
        title: 'We carry more than just good coding skills.',
        date: '22.01.2021'
    },
]

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-wrap pt-115 rpt-95 pb-60 rpb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget quick-links">
                                <h4>{"Quick Links"}</h4>
                                <ul>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Pick up locations"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Terms of Payment"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Privacy Policy"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Where to Find Us"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Privacy Policy"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget latest-post">
                                <h4>{"Latest Post"}</h4>
                                {
                                    footerPost.map((data, index) => (

                                        <div className="post-item" key={index}>
                                            <div className="post-image">
                                                <Link to={"/blog-details"}>
                                                    <img src={data.thumb} alt={"Latest Post Image"} />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <h6>
                                                    <Link to={"/blog-details"}>{data.title}</Link>
                                                </h6>
                                                <span>{data.date}</span>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget quick-links support">
                                <h4>{"Support"}</h4>
                                <ul>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Forum Support"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Help & FAQ"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Pricing and Plans"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Cookies Policy"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Help & FAQ"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget quick-links company">
                                <h4>{"Company"}</h4>
                                <ul>
                                    <li>
                                        <Link to={"/about"}>
                                            <i className="icofont-double-right"></i>
                                            {"About Us"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Leadership Team"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Case Studies"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/contact"}>
                                            <i className="icofont-double-right"></i>
                                            {"Locations"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <i className="icofont-double-right"></i>
                                            {"Team Members"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright Area --> */}
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-text text-center">
                        <p><span>{"Copyright"}</span> {"© 2021 | All Rights Reserved"}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer