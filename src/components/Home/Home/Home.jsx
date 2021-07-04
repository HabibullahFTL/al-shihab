import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import LatestBlogs from '../LatestBlogs/LatestBlogs';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
           <Header/>
           <About/>
           <Skills/>
           <LatestBlogs/>
           <PhotoGallery/>
           <Footer/>
        </>
    );
};

export default Home;