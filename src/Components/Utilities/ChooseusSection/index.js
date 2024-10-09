import SectionTitle from "../SectionTitle";
import chooseusimg from '../../../assets/images/chooseus/disionix-yoe.png';
import quotation from '../../../assets/images/chooseus/quotation-icon.png';
const ChooseusSection = () => {
    return (
        <section className="chooseus-section pt-120 rpt-100 pb-120 rpb-95" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choc =-oseus-left-content">
                            <div className="experience-years">
                                <h1>{'25+'}</h1>
                                <h4>{"Years Experience"}</h4>
                            </div>
                            <div className="chooseus-img">
                                <img src={chooseusimg} alt="Choose Us" />
                            </div>
                            <div className="experience-content">
                                <blockquote>
                                    {"Unlocking Innovation, Driving Transformation. Disionix - Your Trusted Tech Partner"}
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
                                title={'Discover the Disionix Difference: Your Tech Transformation Partner!'}
                            />
                            <div className="chooseus-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"Innovative Solutions"}
                                            </li>
                                            <li>
                                                <i className="icofont-check"></i>
                                                {"Client-Centric Approach"}
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
                                {"At Disionix, we redefine the tech landscape with a relentless pursuit of innovation and a commitment to excellence. Our expert team members are the driving force behind our transformative solutions."}
                            </blockquote>
                            <p>{"We believe that every client is unique, and our client-centric approach ensures that we tailor our services to your specific needs. What sets us apart is not only our innovative solutions but also our unwavering dedication to your success. With 24/7 customer service, we're by your side every step of the way, ensuring that your tech journey is seamless and your goals are achieved. Partner with us, and together, we'll turn your tech challenges into opportunities, leading you toward a brighter digital future."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseusSection;