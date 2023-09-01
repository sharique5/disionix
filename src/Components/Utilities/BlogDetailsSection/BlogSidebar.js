import { Link } from "react-router-dom";
import vdoBg from '../../../assets//images/blog/video-widget-bg.jpg'
const blogCat = [
    {
        id: '1',
        catLabel: 'Web Design',
        postCount: '32'
    },
    {
        id: '2',
        catLabel: 'Web Development',
        postCount: '22'
    },
    {
        id: '3',
        catLabel: 'Graphic Design',
        postCount: '25'
    },
    {
        id: '4',
        catLabel: 'Online Marketing',
        postCount: '38'
    },
    {
        id: '5',
        catLabel: 'App Development',
        postCount: '26'
    },
]

const archivePost = [
    {
        id: '1',
        postDate: '25 August 2021',
        title: 'Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.'
    },
    {
        id: '2',
        postDate: '25 August 2021',
        title: 'Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.'
    },
    {
        id: '3',
        postDate: '25 August 2021',
        title: 'Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.'
    },
    {
        id: '4',
        postDate: '25 August 2021',
        title: 'Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.'
    },
]
const BlogSidebar = () => {
    return (
        <aside className="blog-sidebar">
            <div className="sidebar-widget search-box">
                <form method="post" action="contact.html">
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search here..." />
                        <button type="submit"><i className="icofont-search-1"></i></button>
                    </div>
                </form>
            </div>
            <div className="sidebar-widget blog-catagory">
                <h4>{"Blog Catagory"}</h4>
                <div className="course-module">
                    <ul>
                        {
                            blogCat.map((data, index) => (
                                <li key={index}>
                                    <Link to={"/blog-details"}>
                                        <i className="icofont-double-right"></i>
                                        {data.catLabel}
                                        <span>{data.postCount}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget archive-post">
                <h4>{"Archive Post"}</h4>
                {
                    archivePost.map((data, index) => (
                        <div className="posting-content" key={index}>
                            <div className="posting-date">
                                <p>
                                    <i className="icofont-calendar"></i>
                                    {data.postDate}
                                </p>
                            </div>
                            <h6>
                                <Link to={"/blog-details"}>{data.title}</Link>
                            </h6>
                        </div>
                    ))
                }

            </div>
            <div className="sidebar-widget blog-video-widget" style={{ background: `url(${vdoBg})`}}>
                <a className="video-play mfp-iframe" href="https://www.youtube.com/watch?v=aFWhf2wjJYo&amp;list=PLUoqTnNH-2XxOt7UsKlTqbfrA2ucGosCR">
                    <i className="icofont-ui-play"></i>
                </a>
            </div>
        </aside>
    );
}

export default BlogSidebar;