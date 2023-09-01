import Sidebar from "./Sidebar";
import detailsImg from '../../../assets/images/service/service-details.jpg';
import workImg1 from '../../../assets/images/service/work-img1.png';
import workImg2 from '../../../assets/images/service/work-img2.png';

const ServiceDetailsSection = ()=>{
    return(
        <section className="service-details pt-120 rpt-100 pb-115 rpb-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-8">
                        <div className="service-details-content">
                            <div className="service-details-image">
                                <img src={detailsImg} alt="Service Details Image" />
                                <a className="video-play mfp-iframe" href="https://www.youtube.com/watch?v=aFWhf2wjJYo&list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
                                    <i className="icofont-ui-play"></i>
                                </a>
                            </div>
                            <h2>{"IT Management Service"}</h2>
                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}</p>
                            <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the reease and more recent. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</blockquote>
                            <div className="work-part-content">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="work-left">
                                            <div className="work-image">
                                                <img src={workImg1} alt="Work Image" />
                                            </div>
                                            <div className="work-image-two">
                                                <img src={workImg2} alt="Work Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="work-content">
                                            <h2>{"How it work?"}</h2>
                                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book."}</p>
                                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book."}</p>
                                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy."}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>{"Help challenge critical activities"}</h2>
                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."}</p>
                            <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the reease and more recent. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}</blockquote>
                            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of type and scrambled it to make a type specimen book."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceDetailsSection;