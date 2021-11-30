import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/circle-1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-center text-md-start'>
                    <Col sm={12} md={7} className='pt-4 order-2 order-md-1 '>
                        <p>WELCOME TO MY WORLD</p>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Hi, I’m <sapn style={{ color: '#f9004d' }}>𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌</sapn>
                            <div className='wrapper'>
                                <div className='static-txt'>a</div>
                                <ul className='daynamic-txt'>
                                    <li><span>Mern Stack Developer</span></li>
                                    <li><span>Front End Developer</span></li>
                                    <li><span>Full Stack Developer</span></li>
                                    <li><span>Back End Developer</span></li>
                                </ul>
                            </div>
                        </h1>

                        <p className='mb-5'>A highly skilled developer with strong confidence with high quality and high-performance web applications seeks the rules of junior Software Developer at JavaScript, React, Node, andmodern JavaScript libraries.</p>
                        <div>
                            <p>FIND WITH ME</p>
                            <div className='banner-icon'><i class="fab fa-facebook-f"></i></div>
                            <div className='banner-icon'><i class="fab fa-instagram"></i></div>
                            <div className='banner-icon'><i class="fab fa-linkedin-in"></i></div>
                        </div>
                    </Col>
                    <Col sm={12} md={5} className=' order-1 order-md-2'>
                        <img src={img} width='75%' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;