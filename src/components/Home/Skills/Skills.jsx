import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="container text-center my-skills">
            <h2 className="title  text-center fw-bold pb-2 mb-5"><span className="text-warning fw-bold">MY </span>SKILLS!</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" >
                <div className="col">
                    <div className="card h-100 skill">
                        <div className="card-body">
                            <span className="skill-icon">
                                <i className="fas fa-bullhorn"></i>
                            </span>
                            <h5 className="text-center text-effect">Digital Marketing</h5>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 skill">
                        <div className="card-body">
                            <span className="skill-icon">
                                <i className="fas fa-user-tie"></i>
                            </span>
                            <h5 className="text-center text-effect">Public Speaking</h5>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 skill">
                        <div className="card-body">
                            <span className="skill-icon">
                                <i className="fab fa-youtube"></i>
                            </span>
                            <h5 className="text-center text-effect">Content Creation</h5>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;