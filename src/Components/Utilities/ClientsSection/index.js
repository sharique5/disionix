import { Link } from "react-router-dom";
import thaumb1 from '../../../assets/images/partners/partner-logo1.png';
import thaumb2 from '../../../assets/images/partners/partner-logo2.png';
import thaumb3 from '../../../assets/images/partners/partner-logo3.png';
import thaumb4 from '../../../assets/images/partners/partner-logo4.png';

const clients = [
    {
        thumb: thaumb1,
        title: 'Partner Logo'
    },
    {
        thumb: thaumb2,
        title: 'Partner Logo'
    },
    {
        thumb: thaumb3,
        title: 'Partner Logo'
    },
    {
        thumb: thaumb4,
        title: 'Partner Logo'
    },
]


const ClientsSection = () => {
    return (
        <section className="partner-section">
            <div className="container">
                <div className="partners-group">
                    <div className="row">
                        {
                            clients.map((data, index) => (
                                <div className="col-md-3 col-6" key={index}>
                                    <div className="partner-logo">
                                        <Link to={"#"}>
                                            <img src={data.thumb} alt={data.title} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection;
