import SectionTitle from "../SectionTitle";

import quotation from '../../../assets/images/testimonial/quotation-icon.png';
import thumb1 from '../../../assets/images/testimonial/testimonial1.png';
import thumb2 from '../../../assets/images/testimonial/testimonial2.png';
import Slider from "react-slick";

const feedback = [
    {
        thumb: thumb1,
        description: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.',
        name: 'Ronnie Aguilar',
        title: 'Web Developer'
    },
    {
        thumb: thumb2,
        description: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.',
        name: 'Darla Harmon',
        title: 'UX Designer'
    },
    {
        thumb: thumb1,
        description: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.',
        name: 'Ronnie Aguilar',
        title: 'Web Developer'
    },
    {
        thumb: thumb2,
        description: 'It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It popular of the release and more recent five and centurbut also these tesetng remaining essentially.',
        name: 'Darla Harmon',
        title: 'UX Designer'
    },
]

const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};
const TestimonialSection = () => {
    return (
        <section className="testimonial-section pb-105 rpb-85">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            label={'Testimonial'}
                            title={'What People Say About Our Company Services.'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings}>
                        {
                            feedback.map((data, index) => (
                                <div className="testimonial-item" key={index}>
                                    <div className="testimonial-inner">
                                        <div className="quotation-img">
                                            <img src={quotation} alt={"Quotation"} />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-imgbox">
                                        <div className="testimonial-img">
                                            <img src={data.thumb} alt={data.name} />
                                        </div>
                                        <div className="testimonial-imgdetails">
                                            <h5>{data.name}</h5>
                                            <span>{data.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;