import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import PostComments from "./PostComments";

import blogImg from '../../../assets/images/blog/blog-details1.jpg'
import blogImg2 from '../../../assets/images/blog/blog-details2.jpg'

const BlogDetailsContent = () => {
    return (

        <div className="blog-details-content">
            <div className="blog-details-image">
                <img src={blogImg} alt={"Blog Details Image One"} />
                <div className="blog-publish-date">
                    <span>{"22 June"}</span>
                </div>
            </div>
            <h3>{"The Best IT Practices in Cloud And Security."}</h3>
            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of scrambled it to make a type specimen book. It has survived not only five centuries, but also the electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with Letraset sheets containing Lorem Ipsum passages."}</p>
            <blockquote>{"It has survived not only five centuries, but also the leap into the typesetting, remaining unchanged. It was popular of the reease and more recent. Lorem Ipsum is simply dummy printing and typesetting industry."}</blockquote>
            <div className="blog-middle-image">
                <img src={blogImg2} alt={"Blog Details Image Two"} />
            </div>
            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with Letraset sheets containing Lorem Ipsum passages."}</p>
            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of electronic typesetting, remaining essentially unchanged."}</p>
            <h3>{"Help challenge critical activities"}</h3>
            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ustry's standard dummy text ever since the 1500s, when an unknown printer took and galley of electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with Letraset sheets containing Lorem Ipsum passages."}</p>
            <div className="tags">
                <ul>
                    <li>{"Tags:"}</li>
                    <li><Link to={"#"}>{"Medical"}</Link></li>
                    <li><Link to={"#"}>{"Doctors"}</Link></li>
                    <li><Link to={"#"}>{"Theraphi"}</Link></li>
                </ul>
            </div>

            {/* comments */}
            <PostComments />
            {/* Comment form */}
            <CommentForm />
        </div>

    );
}
export default BlogDetailsContent;