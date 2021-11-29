import React from 'react';
import Projects from '../../Projects/Projects';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="container" style={{width:"100%",height:"100vh"}}>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;