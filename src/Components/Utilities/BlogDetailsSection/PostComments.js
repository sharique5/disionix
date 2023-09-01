import { Link } from 'react-router-dom';
import thumb1 from '../../../assets/images/blog/commenter1.jpg';
import thumb2 from '../../../assets/images/blog/commenter2.jpg';

const postComments = [
    {
        id: '1',
        thumb: thumb1,
        name: 'Mayra Bolin',
        title: 'Web Developer',
        comment: `It is a long established fact that a reader will be distracted by the readable cont ent of a he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters content here', making.`,
        type: ''
    },
    {
        id: '2',
        thumb: thumb2,
        name: 'Rafaela Levy',
        title: 'Web Developer',
        comment: `It is a long established fact that a reader will be distracted by the readable cont ent of a he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters content here', making.`,
        type: 'child'
    },
]
const PostComments = () => {
    return (

        <div className="comment-box">
            <h4>{"Comments"}</h4>
            {
                postComments.map((data, index) => (
                    <div className={`comment ${data.type == 'child' ? 'style-two' : ''}`} key={index}>
                        <div className="commenter-image">
                            <img src={data.thumb} alt={data.name} />
                        </div>
                        <div className="commenter-info">
                            <div className="commenter-info-top">
                                <div className="commenter-name">
                                    <h5>{data.name}</h5>
                                    <span>{data.title}</span>
                                </div>
                                <Link to={"#"} className="comment-reply">
                                    <i className="icofont-reply"></i> {"Reply"}
                                </Link>
                            </div>
                            <p>{data.comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default PostComments;