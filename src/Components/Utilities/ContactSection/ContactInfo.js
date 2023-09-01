import contactImg from '../../../assets/images/get-touch-img.png';
const ContactInfo = () => {
    return (
        <div className="get-touch-left">
            <div className="info-box">
                <div className="info-icon">
                    <i className="icofont-google-map"></i>
                </div>
                <div className="info-details">
                    <p>{"61 South Big Rock Cove Lane Lake Zurich, Villad 60047"}</p>
                </div>
            </div>
            <div className="info-box">
                <div className="info-icon">
                    <i className="icofont-phone"></i>
                </div>
                <div className="info-details">
                    <a href="callto:88999666444">{"+88-999-666-444"}</a>
                    <a href="callto:88999333555">{"+88-999-333-555"}</a>
                </div>
            </div>
            <div className="info-box">
                <div className="info-icon">
                    <i className="icofont-email"></i>
                </div>
                <div className="info-details">
                    <a href="mailto:yourmail@domain.com">{"yourmail@domain.com"}</a>
                    <a href="mailto:support@domain.com">{"support@domain.com"}</a>
                </div>
            </div>
            <div className="get-touch-img">
                <img src={contactImg} alt={"Get Touch Image"} />
            </div>
        </div>
    );
}

export default ContactInfo;