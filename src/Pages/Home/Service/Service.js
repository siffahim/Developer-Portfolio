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
                    <h3 className='text fw-bold'>Whate I Do</h3>
                </div>
            </Slide>
            <Container>
                <Row className='g-4'>
                    <Col sm={12} md={4}>
                        <Flip left>
                            <div className='custom-card'>
                                <h1><i className="fas fa-bars txt"></i></h1>
                                <h3>Web Design</h3>
                                <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                                <h5 className='service-sign'><i className="fas fa-arrow-right txt"></i></h5>
                            </div>
                        </Flip>
                    </Col>
                    <Col sm={12} md={4}>
                        <Flip right>
                            <div className='custom-card'>
                                <h1><i className="fas fa-book-open txt"></i></h1>
                                <h3>Responsive</h3>
                                <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                                <h5 className='service-sign'><i className="fas fa-arrow-right txt"></i></h5>
                            </div>
                        </Flip>
                    </Col>
                    <Col sm={12} md={4}>
                        <Flip left>
                            <div className='custom-card'>
                                <h1><i className="fas fa-laptop-code txt"></i></h1>
                                <h3>Web Development</h3>
                                <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                                <p className='service-sign'><i className="fas fa-arrow-right txt"></i></p>
                            </div>
                        </Flip>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;