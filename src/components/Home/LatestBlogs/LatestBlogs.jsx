import React from 'react';
import postImg from '../../../img/post_img.png';
import './LatestBlogs.css';

const LatestBlogs = () => {
    return (
        <div className="container">
            <h2 className="title  text-center fw-bold pb-2 mb-5">Latest <span className="text-warning fw-bold">Blog Posts</span></h2>
            <div className="row">
                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>

                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>

                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>

                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>

                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>

                <div className="col-md-6 blog-wrapper d-flex">
                    <div className="blog-thumbnail">
                        <img src={postImg} alt="" className="img-thumbnail" />
                    </div>
                    <div className="blog-content">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <small className="fw-bold">Abdullah Al Shihab</small>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...</p>
                    </div>
                </div>
            </div>
            <div className="load-more-blog text-center my-3">
                <button className="btn fw-bold btn-warning btn-lg">Read more blogs</button>
            </div>
        </div>
    );
};

export default LatestBlogs;