import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

import serv1 from '../../../assets/images/service/disionix-serv-icon1.png';
import serv2 from '../../../assets/images/service/disionix-serv-icon2.png';
import serv3 from '../../../assets/images/service/disionix-serv-icon3.png';
import serv4 from '../../../assets/images/service/disionix-serv-icon4.png';
import serv5 from '../../../assets/images/service/disionix-serv-icon5.png';
import serv6 from '../../../assets/images/service/disionix-serv-icon6.png';
import serv7 from '../../../assets/images/service/disionix-serv-icon7.png';
import serv8 from '../../../assets/images/service/disionix-serv-icon8.png';
import serv9 from '../../../assets/images/service/disionix-serv-icon9.png';

// import serviceImg from '../../../assets/images/service/service-img.jpg';

const services = [
    {
        thumb: serv1,
        title: 'Custom Software Development.',
    },
    {
        thumb: serv2,
        title: 'Mobile App Development.',
    },
    {
        thumb: serv3,
        title: 'Web Development.',
    },
    {
        thumb: serv4,
        title: 'Cloud Computing Services.',
    },
    {
        thumb: serv5,
        title: 'RPA Development.',
    },
    {
        thumb: serv6,
        title: 'Data Analytics and Business Intelligence.',
    },
    {
        thumb: serv7,
        title: 'AI and Machine Learning.',
    },
    {
        thumb: serv8,
        title: 'Cybersecurity Services.',
    },
    {
        thumb: serv9,
        title: 'Consulting and IT Strategy.',
    },
]

const ServiceSection = () => {
    return (

        <section className="service-section pt-110 rpt-90 pb-70 rpb-100" id="service">
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
                                                    <Link to={"#"}>{data.title}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ServiceSection;