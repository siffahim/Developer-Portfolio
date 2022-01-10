import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import img from '../../../images/build.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container' id='about'>
            <Slide left>
                <div className='text-center mb-5'>
                    <p className='txt'>Information</p>
                    <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>About Me</h3>
                </div>
            </Slide>
            <Row className='px-1'>
                <Col sm={12} md={5}>
                    <Slide left>
                        <div className='about-img'>
                            <img src={img} width='100%' alt="" />
                        </div>
                    </Slide>
                </Col>
                <Col sm={12} md={7}>
                    <Slide right>
                        <div className='about'>
                            <h3 className='txt fw-bold'>I M</h3>
                            <h3 className='fs-4'>SAIFUL ISLAM FAHIM</h3>
                            <p className='txt'>Front End Devepler || MERN Stack Developer</p>
                            <p>I'm developer focused on crafting user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                            <hr />
                            <h4 className='txt'>PERSONAL INFO</h4>
                            <Row>
                                <Col sm={12} md={6}>
                                    <p><span className='text-muted'>Name:</span> Saiful Islam Fahim</p>
                                    <p><span className='text-muted'>Nickname:</span> Fahim</p>
                                    <p><span className='text-muted'>Age:</span> 20 Years</p>
                                    <p><span className='text-muted'>Nationality:</span> BD</p>
                                    <p><span className='text-muted'>Freelance:</span> Not All</p>
                                </Col>
                                <Col sm={12} md={6}>
                                    <p><span className='text-muted'>Address:</span> Mogbazer-12, Dhaka</p>
                                    <p><span className='text-muted'>Phone:</span> 01860760170</p>
                                    <p><span className='text-muted'>Email:</span> siffahim25@gmail.com</p>
                                    <p><span className='text-muted'>Language:</span> Bangla (Native)</p>
                                    <p><span className='text-muted'>Language:</span> English (Basic Spoking)</p>
                                </Col>
                            </Row>
                            <a href='SAIFUL ISLAM.pdf' download className='form-btn mt-2'><i className="fas fa-download icon"></i> Download CV</a>
                        </div>
                    </Slide>
                </Col>
            </Row>
        </div>
    );
};

export default About;