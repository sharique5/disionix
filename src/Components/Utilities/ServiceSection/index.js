import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

// import thumb1 from '../../../assets/images/service/serv-icon1.png';
// import thumb2 from '../../../assets/images/service/serv-icon2.png';
// import thumb3 from '../../../assets/images/service/serv-icon3.png';
// import thumb4 from '../../../assets/images/service/serv-icon4.png';
// import thumb5 from '../../../assets/images/service/serv-icon5.png';
// import thumb6 from '../../../assets/images/service/serv-icon6.png';

import softwareDevelopment from '../../../assets/images/service/software-development.png';
import mobileDevelopment from '../../../assets/images/service/mobile-development.png';
import webDevelopment from '../../../assets/images/service/web-development.png';
import cloudDevelopment from '../../../assets/images/service/cloud-service.png';
import rpaDevelopment from '../../../assets/images/service/rpa-development.png';
import business from '../../../assets/images/service/business-analytics.png';
import mlDevelopment from '../../../assets/images/service/machine-learning.png';
import cyberSecurity from '../../../assets/images/service/cyber-security.png';
import consulting from '../../../assets/images/service/consulting.png';

// import serviceImg from '../../../assets/images/service/service-img.jpg';

const services = [
    {
        thumb: softwareDevelopment,
        title: 'Custom Software Development.',
    },
    {
        thumb: mobileDevelopment,
        title: 'Mobile App Development.',
    },
    {
        thumb: webDevelopment,
        title: 'Web Development.',
    },
    {
        thumb: cloudDevelopment,
        title: 'Cloud Computing Services.',
    },
    {
        thumb: rpaDevelopment,
        title: 'RPA Development.',
    },
    {
        thumb: business,
        title: 'Data Analytics and Business Intelligence.',
    },
    {
        thumb: mlDevelopment,
        title: 'AI and Machine Learning.',
    },
    {
        thumb: cyberSecurity,
        title: 'Cybersecurity Services.',
    },
    {
        thumb: consulting,
        title: 'Consulting and IT Strategy.',
    }
]

const ServiceSection = () => {
    return (

        <section className="service-section pt-110 rpt-90 pb-70 rpb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title */}
                        <SectionTitle
                            label={'Our Services'}
                            title={'Techscapes: Our Service Spectrum'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <div className="row">
                            {
                                services.map((data, index) => (
                                    <div className="col-sm-6" key={index}>
                                        <div className="service-item">
                                            <div className="serv-iconimg">
                                                <img src={data.thumb} alt={"Service Icon"} />
                                            </div>
                                            <div className="serv-content">
                                                <h5>
                                                    <Link to={"/service-details"}>{data.title}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-xl-3">
                        <div className="service-img" style={{ background: `url(${serviceImg})` }}>
                            <div className="service-details-btn">
                                <Link to={"/service-details"} className="btn theme-btn">
                                    {"More Services"}
                                    <i className="icofont-double-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    );
}

export default ServiceSection;