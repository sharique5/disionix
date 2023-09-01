import aboutImg1 from '../../../assets/images/about/about-img1.jpg';
import aboutImg2 from '../../../assets/images/about/about-img2.jpg';
import SectionTitle from '../SectionTitle';

const AboutSection = () => {
    return (
        <section className="about-us pt-120 rpt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-left">
                            <div className="experience-years">
                                <h1>{"25+"}</h1>
                                <h4>{"Years Experience"}</h4>
                            </div>
                            <div className="about-image">
                                <img src={aboutImg1} alt="About Image" />
                            </div>
                            <div className="about-image-two">
                                <img src={aboutImg2} alt="About Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-us-content">
                            <SectionTitle
                                label={'About Us'}
                                title={'We are the best world IT Company. More than 25 years of experience.'}
                            />
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                            <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining essentially unchanged. It was popular of the release and more recent."}</blockquote>
                            <p>{"It has survived not only five centuries, but also the leap into electroni typesetting, remaining essentially unchanged. It was popularised the 1960s with the release and more recent."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;