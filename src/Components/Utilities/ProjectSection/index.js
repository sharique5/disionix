import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/project/project1.jpg';
import thumb2 from '../../../assets/images/project/project2.jpg';
import thumb3 from '../../../assets/images/project/project3.jpg';
import thumb4 from '../../../assets/images/project/project4.jpg';

import rightImg from '../../../assets/images/project/project5.jpg'

import { Link } from "react-router-dom";

const project = [
    {
        thumb: thumb1,
        title: 'IT Management Services.'
    },
    {
        thumb: thumb2,
        title: 'Branding Development.'
    },
    {
        thumb: thumb3,
        title: 'Technology Prototyping.'
    },
    {
        thumb: thumb4,
        title: 'UI/UX Design Strategy.'
    },
]

const ProjectSection = () => {
    return (
        <section className="project-section pt-110 rpt-90 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title */}
                        <SectionTitle
                            label={'Success Stories'}
                            title={'Successfully Complete All Case of Clients.'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">

                            {
                                project.map((data, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="project-item">
                                            <div className="project-image">
                                                <img src={data.thumb} alt={data.title} />
                                            </div>
                                            <div className="project-content">
                                                <Link to={"/project-details"} className="project-icon">
                                                    <i className="icofont-arrow-right"></i>
                                                </Link>
                                                <h5><Link to={"/project-details"}>{data.title}</Link></h5>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }



                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="project-item project-right-item" style={{ background: `url(${rightImg})` }}>
                            <div className="project-content">
                                <Link to={"/project-details"} className="project-icon">
                                    <i className="icofont-arrow-right"></i>
                                </Link>
                                <h5><Link to={"/project-details"}>{"Product Consultation."}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;