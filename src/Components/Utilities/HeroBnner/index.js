import { Link } from 'react-router-dom';
import heroShape from '../../../assets/images/hero/hero-shape.png'
import heroBg from '../../../assets//images/hero/disionix-hero-bg.png'

const HeroBanner = () => {
    return (
        <section className="hero-section" style={{ background: `url(${heroBg})` }} id="home">
            <div className="hero-shape">
                <img src={heroShape} alt="Disionix Hero Shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-content">
                            <h1>{"Disionix: Shaping Tomorrow's Solutions Today"}</h1>
                            <p>{"Innovative Technology for a Brighter Future"}</p>
                            <Link
                                className="btn theme-btn"
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:admin@disionix.com";
                                    e.preventDefault();
                                }}
                            >
                                {"Say Hello"}
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