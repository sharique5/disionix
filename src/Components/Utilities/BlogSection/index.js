import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/blog/blog1.jpg';
import thumb2 from '../../../assets/images/blog/blog2.jpg';
import thumb3 from '../../../assets/images/blog/blog3.jpg';
import thumb4 from '../../../assets/images/blog/blog4.jpg';
import { Link } from "react-router-dom";

const posts = [
    {
        thumb: thumb1,
        date: '22 January, 2021',
        title: 'It uses a dictionary of over combined handful.',
        excerpt: 'It has survived not only five centuries typesetting remaining essentially was the release more recent.'
    },
    {
        thumb: thumb2,
        date: '22 January, 2021',
        title: 'Efficiently monetize models transparent sources.',
        excerpt: 'It has survived not only five centuries typesetting remaining essentially was the release more recent.'
    },
    {
        thumb: thumb3,
        date: '22 January, 2021',
        title: 'Market Insights To Manage People Related Costs.',
        excerpt: 'It has survived not only five centuries typesetting remaining essentially was the release more recent.'
    },
    {
        thumb: thumb4,
        date: '22 January, 2021',
        title: 'New Remote Workers Visible To Security.',
        excerpt: 'It has survived not only five centuries typesetting remaining essentially was the release more recent.'
    },
]

const BlogSection = () => {
    return (

        <section className="blog-section pt-110 rpt-90 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            label={'Blog Post'}
                            title={'Some Latest Articles From Our News Feed.'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="row">
                    {
                        posts.map((data, index) => (

                            <div className="col-lg-6" key={index}>
                                <div className="blog-item">
                                    <div className="blog-image" style={{ background: `url(${data.thumb})` }}></div>
                                    <div className="blog-content">
                                        <span className="date">{data.date}</span>
                                        <h5><Link to={"/blog-details"}>{data.title}</Link></h5>
                                        <p>{data.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>

    );
}

export default BlogSection;