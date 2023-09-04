import SectionTitle from "../SectionTitle";

// import thumb1 from '../../../assets/images/project/project1.jpg';
// import thumb2 from '../../../assets/images/project/project2.jpg';
// import thumb3 from '../../../assets/images/project/project3.jpg';
// import thumb4 from '../../../assets/images/project/project4.jpg';

// import rightImg from '../../../assets/images/project/project5.jpg'

import aiPoweredAutomation from '../../../assets/images/project/ai-powered-automation.png';
import roboticProcessAutomation from '../../../assets/images/project/robotic-process-automation.png';
import webAppDevelopment from '../../../assets/images/project/web-app-development.png';
import uiUxMock from '../../../assets/images/project/ui-ux-mock.png';
import preddictive from '../../../assets/images/project/predictive-analysis.png'

import { Link } from "react-router-dom";

const project = [
    {
        thumb: aiPoweredAutomation,
        title: 'AI-Powered Automation.'
    },
    {
        thumb: roboticProcessAutomation,
        title: 'RPA Implementation.'
    },
    {
        thumb: webAppDevelopment,
        title: 'Mobile App / Web Development.'
    },
    {
        thumb: uiUxMock,
        title: 'UI/UX Design Strategy.'
    },
]

const ProjectSection = () => {
    return (
        <section className="pt-110 rpt-90 pb-60">
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
                                                <Link to={"/#"} className="project-icon">
                                                    <i className="icofont-arrow-right"></i>
                                                </Link>
                                                <h5><Link to={"/#"}>{data.title}</Link></h5>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }



                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="project-item project-right-item" style={{ background: `url(${preddictive})` }}>
                            <div className="project-content">
                                <Link to={"/#"} className="project-icon">
                                    <i className="icofont-arrow-right"></i>
                                </Link>
                                <h5><Link to={"/"}>{"Machine Learning for Predictive Analytics."}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;