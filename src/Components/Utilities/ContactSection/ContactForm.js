const ContactForm = () => {
    return (

        <div className="get-touch-right">
            <h3>{"Get in Touch:"}</h3>
            <div className="contact-form">
                <form action="#">
                    <div className="form-row">
                        <div className="col-12">
                            <input type="text" className="form-control custom-input" id="name" name="name" placeholder="Name:" required />
                        </div>
                        <div className="col-12">
                            <input type="email" className="form-control custom-input" id="email" name="email" placeholder="Email:" required />
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control custom-input" id="number" name="number" placeholder="Phone:" />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control custom-textarea" id="message:" name="message:" rows="7" placeholder="Message:" required></textarea>
                        </div>
                    </div>
                    <div className="text-center col-12">
                        <button type="submit" className="btn submit">
                            {"Submit Comment"}
                            <i className="icofont-arrow-right"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;