import React from 'react';
import './About.css';
import profileAbout from '../../../img/profile_about.jpg'

const About = () => {
    return (
        <section className="about py-5">
            <div className="container py-5">
                <h2 className="title  text-center fw-bold pb-2 mb-5">About <span className="text-warning fw-bold">Me</span></h2>
                <div className="row">
                    <div className="col-md-5 text-center">
                        <img src={profileAbout} alt="" className="img-thumbnail w-75" />
                    </div>
                    <div className="col-md-7">
                        <h3 className="pb-2 pt-4 text-center text-md-start">I am Abdullah Al Shihab</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, omnis deleniti harum consequuntur debitis reprehenderit rem assumenda velit dolore corrupti laborum eos aut inventore aliquam error magni non natus ea corporis molestias suscipit sit temporibus! Ut voluptate consequuntur maiores doloremque hic atque dolorem quasi sint, deleniti perspiciatis soluta nisi quae cumque velit, enim, nostrum a nihil vitae ipsam. Necessitatibus enim provident vel ducimus possimus, iure sunt aspernatur, ullam, autem rerum veniam ipsam esse. Iste iure autem aliquam dolor eveniet quos! Commodi possimus excepturi nemo velit, cupiditate non. Nihil perspiciatis sapiente, sequi consectetur, similique, doloremque esse deserunt tempore iste incidunt iusto!</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;