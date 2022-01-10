import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../images/fahim.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-center text-md-start'>
                    <Col sm={12} md={7} className='pt-4 order-2 order-md-1 '>
                        <Zoom>
                            <p className='text-muted'>WELCOME TO MY WORLD</p>
                            <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>Hi,<br /> I’M <sapn style={{ color: '#f9004d' }}>𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌</sapn><br />
                                A <span style={{ color: '#f9004d', fontSize: '40px' }}>
                                    <Typewriter
                                        loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        words={['MERN Stack Developer', 'Frontend Developer', 'Full Stack Developer', 'Junior Web Developer']}
                                    />
                                </span>
                            </h1>

                            <p className='mb-5 text-muted'>A highly skilled developer with strong confidence with high quality and high-performance web applications seeks the rules of junior Software Developer at JavaScript, React, Node, andmodern JavaScript libraries.</p>
                        </Zoom>
                        <Slide bottom>
                            <div>
                                <p>FIND WITH ME</p>
                                <a href="https://www.facebook.com/sif.fahim" target='_blank' className='text-light'>
                                    <div className='banner-icon'><i className="fab fa-facebook-f"></i></div>
                                </a>
                                <a href="https://www.instagram.com/siffahim/" target='_blank' className='text-light'>
                                    <div className='banner-icon'><i className="fab fa-instagram"></i></div>
                                </a>
                                <a href="https://www.linkedin.com/in/siffahim/" target='_blank' className='text-light'>
                                    <div className='banner-icon'><i className="fab fa-linkedin-in"></i></div>
                                </a>
                            </div>
                        </Slide>
                    </Col>
                    <Col sm={12} md={5} className=' order-1 order-md-2'>
                        <Slide bottom>
                            <div className='img-container'>
                                <img src={img} width='80%' alt="" />
                            </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;