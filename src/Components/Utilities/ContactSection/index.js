import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection=()=>{
    return(

        <section className="contact-section py-120 rpy-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <ContactInfo/>
                    </div>
                    <div className="col-lg-7">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ContactSection;