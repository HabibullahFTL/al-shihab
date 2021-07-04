import React from 'react';
import gallereyImg from '../../../img/gallery_test.jpg';
import './PhotoGallery.css'

const PhotoGallery = () => {
    return (
        <div className="container mt-5">
            <h2 className="title  text-center fw-bold pb-2 mb-5 pt-5">Latest <span className="text-warning fw-bold">Blog Posts</span></h2>
            <div className="row gallery">
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="my-2 mx-1 pt-2 pb-0 px-2 gallery-item">
                        <img src={gallereyImg} alt="" className="img-fluid" />
                        <p className="caption">10MS Event</p>
                    </div>
                </div>
            </div>
            <div className="load-more-blog text-center my-3">
                <button className="btn fw-bold btn-warning btn-lg">View More Photo</button>
            </div>
        </div>
    );
};

export default PhotoGallery;