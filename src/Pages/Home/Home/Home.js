import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Navigation from '../../Share/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Caontact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skills from '../Skills/Skills/Skills';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <Service />
            <Projects />
            <Skills />
            <Caontact />
            <Footer />
        </>
    );
};

export default Home;