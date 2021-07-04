import React from 'react';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';
import profileImg from '../../../img/profile.png';
import Typed from 'react-typed';

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center flex-column text-center text-md-start h-100 font-poppins my-4 my-md-0">
                            <h2 className="fw-bold text-dark">Hi, There! I am</h2>
                            <h1 className="py-2 fw-bold text-warning">Abdullah Al Shihab!</h1>
                            <div className="typed-text mb-3 mt-2">
                                I am a <Typed
                                strings={[
                                    'Digital Marketer',
                                    'Content Creator',
                                    'Knowledge Seeker'
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                className="text-warning"
                                loop >
                            </Typed>
                            </div>
                            <p className="my-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, omnis deleniti harum consequuntur debitis reprehenderit rem assumenda velit dolore corrupti laborum eos aut inventore aliquam error magni non natus ea corporis molestias suscipit.
                            </p>
                            <button className="my-2 fw-bold btn btn-outline-warning btn-md py-2 d-block mx-md-0 mx-auto">Contact Me</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column h-100">
                        <img src={profileImg} className="w-75 py-4" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;