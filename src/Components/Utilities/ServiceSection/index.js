import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/service/serv-icon1.png';
import thumb2 from '../../../assets/images/service/serv-icon2.png';
import thumb3 from '../../../assets/images/service/serv-icon3.png';
import thumb4 from '../../../assets/images/service/serv-icon4.png';
import thumb5 from '../../../assets/images/service/serv-icon5.png';
import thumb6 from '../../../assets/images/service/serv-icon6.png';

// import serviceImg from '../../../assets/images/service/service-img.jpg';

const services = [
    {
        thumb: thumb1,
        title: 'Custom Software Development.',
    },
    {
        thumb: thumb2,
        title: 'Mobile App Development.',
    },
    {
        thumb: thumb3,
        title: 'Web Development.',
    },
    {
        thumb: thumb4,
        title: 'Cloud Computing Services.',
    },
    {
        thumb: thumb5,
        title: 'RPA Development.',
    },
    {
        thumb: thumb6,
        title: 'Data Analytics and Business Intelligence.',
    },
    {
        thumb: thumb4,
        title: 'AI and Machine Learning.',
    },
    {
        thumb: thumb5,
        title: 'Cybersecurity Services.',
    },
    {
        thumb: thumb6,
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