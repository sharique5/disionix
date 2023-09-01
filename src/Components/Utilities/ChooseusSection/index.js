import SectionTitle from "../SectionTitle";
import chooseusimg from '../../../assets/images/chooseus/chooseus-img.jpg';
import quotation from '../../../assets/images/chooseus/quotation-icon.png';
const ChooseusSection = () => {
    return (
        <section className="chooseus-section pt-120 rpt-100 pb-120 rpb-95">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="chooseus-left-content">
                            <div className="experience-years">
                                <h1>{'25+'}</h1>
                                <h4>{"Years Experience"}</h4>
                            </div>
                            <div className="chooseus-img">
                                <img src={chooseusimg} alt="Choose Us Image" />
                            </div>
                            <div className="experience-content">
                                <blockquote>
                                    {"It has survived not only five centuries, but also the leap into electronic types remaining essentially unchanged."}
                                </blockquote>
                                <div className="quotation-icon">
                                    <img src={quotation} alt="Quotation" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chooseus-right-content">
                            <SectionTitle
                                label={'Why Choose Us!'}
                                title={'Some Reason Why You Should Choose Us!'}
                            />
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
                            <blockquote>
                                {"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the release and more recent."}
                            </blockquote>
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseusSection;