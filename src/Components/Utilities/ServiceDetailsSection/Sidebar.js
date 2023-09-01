import { Link } from "react-router-dom";

import contactImg from '../../../assets/images/service/video-widget-bg.jpg'

const serviceList = [
    {
        id: '1',
        service: 'Web Development'
    },
    {
        id: '2',
        service: 'Data Management'
    },
    {
        id: '3',
        service: 'Cyber Security'
    },
    {
        id: '4',
        service: 'Software Development'
    },
    {
        id: '5',
        service: 'Cloud Management'
    },
]
const Sidebar = () => {
    return (

        <div className="service-sidebar">
            <div className="sidebar-widget service-widget">
                <h4>{"All Services"}</h4>
                <ul>
                    {
                        serviceList.map((data, index) => (
                            <li key={index}><Link to={"/service-details"}>{data.service}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebar-widget service-video-widget text-center" style={{ background: `url(${contactImg})` }}>
                <Link className="video-play mfp-iframe" to="https://www.youtube.com/watch?v=aFWhf2wjJYo&list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
                    <i className="icofont-ui-play"></i>
                </Link>
                <div className="project-text">
                    <h4>{"Have any project in you mind?"}</h4>
                    <Link to={"#"}>{"+00 66 97 83"}</Link>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;