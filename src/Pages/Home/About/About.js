import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../images/edit.png';
import './About.css';

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div data-aos="fade-up" className='text-center mb-5'>
                <p className='txt text-uppercase'>Information</p>
                <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>About Me</h3>
            </div>
            <div className='about_bg'>
                <Container>
                    <Row className='px-1 d-flex align-items-center'>
                        <Col data-aos="zoom-in-right" xs={12} md={5}>
                            <div className=''>
                                <img src={img} width='70%' alt="" />
                            </div>
                        </Col>
                        <Col data-aos="zoom-in-left" xs={12} md={7}>
                            <div className='about'>
                                <h3 className='icon fw-bold'>Who I am!!!</h3>
                                <h5>I M</h5>
                                <h5>SAIFUL ISLAM FAHIM</h5>
                                <p className='icon'>
                                    <Typewriter
                                        loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        words={['MERN Stack Developer', 'Frontend Developer', 'Full Stack Developer', 'Junior Web Developer']}
                                    />
                                </p>
                                <p>I'm developer focused on crafting user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                                <a href='/SAIFUL ISLAM.pdf' download className='form-btn mt-2'><i className="fas fa-download icon"></i> Download CV</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;