import React from 'react';
import Footer from '../../Share/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Caontact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skills from '../Skills/Skills/Skills';

const Home = () => {
    return (
        <>
            <title>Portfolio-Home</title>
            <Banner />
            <Service />
            <Projects />
            <Skills />
            <About />
            <Caontact />
            <Footer />
        </>
    );
};

export default Home;