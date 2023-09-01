import { Link } from 'react-router-dom';
import heroShape from '../../../assets/images/hero/hero-shape.png'
import heroBg from '../../../assets//images/hero/hero-bg.jpg'

const HeroBanner = () => {
    return (
        <section className="hero-section" style={{ background: `url(${heroBg})` }}>
            <div className="hero-shape">
                <img src={heroShape} alt="Hero Shape Image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content">
                            <h1>{"IT Management Service & Support for Your Business."}</h1>
                            <p>{"Keep your business safe & ensure high availability."}</p>
                            <Link to={"/service-details"} className="btn theme-btn">
                                {"Find Solusion"}
                                <i className="icofont-double-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;