import { Link } from 'react-router-dom'
import projectImg1 from '../../../assets/images/project/project1.jpg'
import projectImg2 from '../../../assets/images/project/project2.jpg'
import projectImg3 from '../../../assets/images/project/project4.jpg'
const rProject = [
    {
        id: '1',
        thumb: projectImg1,
        title: 'IT Management Services.'
    },
    {
        id: '2',
        thumb: projectImg2,
        title: 'Branding Development.'
    },
    {
        id: '3',
        thumb: projectImg3,
        title: 'UI/UX Design Strategy.'
    },
]
const RelatedProjectSection = () => {
    return (

        <div className="related-project">
            <h2>{"Related Project"}</h2>
            <div className="row">
                {
                    rProject.map((data, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="project-item">
                                <div className="project-image">
                                    <img src={data.thumb} alt={data.title} />
                                </div>
                                <div className="project-content">
                                    <Link to={"/project-details"} className="project-icon">
                                        <i className="icofont-arrow-right"></i>
                                    </Link>
                                    <h5>
                                        <Link to={"/project-details"}>
                                            {data.title}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>

    );
}

export default RelatedProjectSection;