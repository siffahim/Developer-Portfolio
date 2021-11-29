import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/circle-1.png';
import Navigation from '../../Share/Navigation/Navigation';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Navigation />
            <Container>
                <Row>
                    <Col sm={12} md={7} className='pt-4'>
                        <h2 className='text-muted'>𝓗𝓮𝓵𝓵𝓸! 𝓘 𝓶</h2>
                        <h3>𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌 𝐅𝐀𝐇𝐈𝐌</h3>
                        <div className='wrapper'>
                            <ul className='daynamic-txt'>
                                <li><span>Mern-stack Developer</span></li>
                                <li><span>Front-end Developer</span></li>
                                <li><span>Full-stack Developer</span></li>
                                <li><span>Back-end Developer</span></li>
                            </ul>
                        </div>
                        <p className='mb-5 text-muted'>A highly skilled developer with strong confidence with high quality and high-performance web applications seeks the rules of junior Software Developer at JavaScript, React, Node, andmodern JavaScript libraries.</p>
                        <a href="#d" className='custom-btn'>Get Resume <i class="fas fa-download"></i></a>
                    </Col>
                    <Col sm={12} md={5}>
                        <img src={img} width='80%' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;