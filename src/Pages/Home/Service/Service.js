import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import './Service.css';

const Service = () => {
    return (
        <div className='service-container text-light'>
            <Slide bottom>
                <div className='text-center mb-5'>
                    <p className='txt'>FEATURES</p>
                    <h3 className='text fw-bold'>What I Do</h3>
                </div>
            </Slide>
            <Container>
                <Row className='g-4 text-center'>
                    <Col sm={12} md={4}>
                        <Flip left>
                            <div className='custom-card'>
                                <h2 className='servie-icon'><i className="fa-solid fa-palette"></i></h2>
                                <h4>Web Design</h4>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                            </div>
                        </Flip>
                    </Col>
                    <Col sm={12} md={4}>
                        <Flip right>
                            <div className='custom-card'>
                                <h2 className='servie-icon'><i className="fa-solid fa-tablet-button"></i></h2>
                                <h4>Responsive</h4>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                            </div>
                        </Flip>
                    </Col>
                    <Col sm={12} md={4}>
                        <Flip left>
                            <div className='custom-card'>
                                <h2 className='servie-icon'><i className="fas fa-laptop-code"></i></h2>
                                <h4>Web Development</h4>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                            </div>
                        </Flip>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;