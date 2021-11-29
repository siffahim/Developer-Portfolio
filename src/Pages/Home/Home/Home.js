import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Banner from '../Banner/Banner';
import Caontact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skills from '../Skills/Skills/Skills';

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <Skills />
            <Projects />
            <Caontact />
            <Footer />
        </>
    );
};

export default Home;