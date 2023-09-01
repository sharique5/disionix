import SectionTitle from "../SectionTitle";

import thumb1 from '../../../assets/images/team/team-member1.jpg';
import thumb2 from '../../../assets/images/team/team-member2.jpg';
import thumb3 from '../../../assets/images/team/team-member3.jpg';

const team = [
    {
        thumb: thumb1,
        name: 'Sharyl Etheridge',
        title: 'Consultant Officer'
    },
    {
        thumb: thumb2,
        name: 'Brittaney Hickson',
        title: 'Web Developer'
    },
    {
        thumb: thumb3,
        name: 'Rosalina Sheldon',
        title: 'UI Designer'
    },
]

const TeamSection = () => {
    return (

        <section className="team-section pt-110 rpt-90 pb-120 rpb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            label={'Team Members'}
                            title={'Our Professional Team Members'}
                            extraClass={'text-center'}
                        />
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="border-shap"></div>
                    {
                        team.map((data, index) => (
                            <div className="team-member" key={index}>
                                <div className="member-image">
                                    <img src={data.thumb} alt={data.name} />
                                </div>
                                <div className="member-desc">
                                    <h5>{data.name}</h5>
                                    <span>{data.title}</span>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>

    );
}

export default TeamSection;
