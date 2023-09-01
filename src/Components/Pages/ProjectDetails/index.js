import React from "react";
import PageBanner from "../../Utilities/PageBanner";

import detailsImg from '../../../assets/images/project/project-details.jpg'
import { Link } from "react-router-dom";

import projectImg from '../../../assets/images/project/project-result1.jpg'
import projectImg2 from '../../../assets/images/project/project-result2.jpg'

import RelatedProjectSection from "../../Utilities/RelatedProjectSection";
import CallToAction from "../../Utilities/CallToAction";

const ProjectDetails = () => {
    return (
        <React.Fragment>
            <PageBanner
                pageTitle={'Project Details'}
                currentPage={'Project'}
            />
            <section className="project-details-content pt-120 rpt-100 pb-70">
                <div className="container">
                    <div className="project-details-content-inner">
                        <div className="project-details-image">
                            <img src={detailsImg} alt={"Project Details Image"} />
                        </div>
                        <div className="project-info-box">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-12">
                                    <div className="project-info-text">
                                        <h4>{"Project Information"}</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 offset-lg-1">
                                    <div className="client-content">
                                        <ul>
                                            <li><span>{"Clients"} </span> {"Marian Crant"}</li>
                                            <li><span>{"Category"} </span> {"Data Management"}</li>
                                            <li><span>{"Date"} </span> {"22 August 2021"}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="client-content">
                                        <ul>
                                            <li><span>{"Website"} </span> <Link href="https://www.domain.com">{"www.domain.com"}</Link></li>
                                            <li><span>{"Location"} </span> {"America"}</li>
                                            <li><span>{"Duration"} </span> {"04 months."}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2>{"The Best IT Practices in Cloud And Security."}</h2>
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book. It has survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}</p>
                        <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the reease and more recent. Lorem Ipsum is simply dummy text of the pinting and typesetting industry. typesetting, remaining on essentially unchanged. It was popular of the reease and more recent."}</blockquote>
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book. It has survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}</p>
                        <div className="project-result-area">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="project-result-video" style={{ background: `url(${projectImg})` }}>
                                        <a className="video-play mfp-iframe" href="https://www.youtube.com/watch?v=aFWhf2wjJYo&amp;list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
                                            <i className="icofont-ui-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="project-result-image">
                                        <img src={projectImg2} alt="Project Result Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2>{"Project Result & Benefits of Project"}</h2>
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book. It has survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}</p>
                        <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the reease and more recent. Lorem Ipsum is simply dummy text of the pinting and typesetting industry. typesetting, remaining on essentially unchanged. It was popular of the reease and more recent."}</blockquote>

                        <RelatedProjectSection />

                    </div>
                </div>
            </section>
            <CallToAction
                extraClass={'bg-white'}
            />
        </React.Fragment>
    );
}
export default ProjectDetails;