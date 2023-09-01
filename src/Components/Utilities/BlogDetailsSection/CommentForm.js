const CommentForm = () => {
    return (

        <div className="blog-comment-form">
            <h4>{"Leave A Comments"}</h4>
            <div className="comment-form">
                <form>
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
                            <textarea className="form-control custom-textarea" id="message:" name="message:" rows="6" placeholder="Message:" required></textarea>
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

export default CommentForm;