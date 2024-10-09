import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/project/disionix-project1.png';
import thumb2 from '../../../assets/images/project/disionix-project2.png';
import thumb3 from '../../../assets/images/project/disionix-project3.png';
import thumb4 from '../../../assets/images/project/disionix-project4.png';

import rightImg from '../../../assets/images/project/disionix-project5.png'

import { Link } from "react-router-dom";

const project = [
    {
        thumb: thumb1,
        title: 'AI-Powered Automation.'
    },
    {
        thumb: thumb2,
        title: 'RPA Implementation.'
    },
    {
        thumb: thumb3,
        title: 'Mobile App / Web Development.'
    },
    {
        thumb: thumb4,
        title: 'UI/UX Design Strategy.'
    },
]

const ProjectSection = () => {
    return (
        <section className="project-section pt-110 rpt-90 pb-60" id="project-details">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title */}
                        <SectionTitle
                            label={'Success Stories'}
                            title={'Turning Challenges into Achievements.'}
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
                                                <Link to={"#"} className="project-icon">
                                                    <i className="icofont-arrow-right"></i>
                                                </Link>
                                                <h5><Link to={"#"}>{data.title}</Link></h5>
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
                                <Link to={"#"} className="project-icon">
                                    <i className="icofont-arrow-right"></i>
                                </Link>
                                <h5><Link to={"#"}>{"Machine Learning for Predictive Analytics."}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;