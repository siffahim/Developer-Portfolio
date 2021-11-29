import React from 'react';
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
        </>
    );
};

export default Home;