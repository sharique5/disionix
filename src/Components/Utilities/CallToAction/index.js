import { Link } from "react-router-dom";
import ctaBG from '../../../assets/images/cta-bg.jpg'

const CallToAction = ({extraClass}) => {
    return (

        <section className={`cta-section pb-120 rpb-100 ${extraClass ? extraClass : ''}`}>
            <div className="container">
                <div className="contact-withus" style={{ background: `url(${ctaBG})`}}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-withus-content">
                                <h3>{"Contact With Us. To Require a Detailed Analysis of Your Plan."}</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="contact-withus-num">
                                <Link className="contact-number" to={"#"}>
                                    {"+00 95 788 394"}
                                </Link>
                                <Link to={"/contact"} className="btn theme-btn">
                                    {"Contact Today"}
                                    <i className="icofont-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default CallToAction;