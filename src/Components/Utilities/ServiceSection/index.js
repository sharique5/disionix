import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/service/serv-icon1.png';
import thumb2 from '../../../assets/images/service/serv-icon2.png';
import thumb3 from '../../../assets/images/service/serv-icon3.png';
import thumb4 from '../../../assets/images/service/serv-icon4.png';
import thumb5 from '../../../assets/images/service/serv-icon5.png';
import thumb6 from '../../../assets/images/service/serv-icon6.png';

import serviceImg from '../../../assets/images/service/service-img.jpg';

const services = [
    {
        thumb: thumb1,
        title: 'IT Management Services.',
    },
    {
        thumb: thumb2,
        title: 'Backup & Data Recovery.',
    },
    {
        thumb: thumb3,
        title: 'Cloud Managed Services.',
    },
    {
        thumb: thumb4,
        title: 'Cyber Security Services.',
    },
    {
        thumb: thumb5,
        title: 'Software Development.',
    },
    {
        thumb: thumb6,
        title: 'Big Data And Analytics.',
    },
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
                            title={'Choose Service For Manage Your Business'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-xl-9">
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
                    <div className="col-lg-4 col-xl-3">
                        <div className="service-img" style={{ background: `url(${serviceImg})` }}>
                            <div className="service-details-btn">
                                <Link to={"/service-details"} className="btn theme-btn">
                                    {"More Services"}
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

export default ServiceSection;