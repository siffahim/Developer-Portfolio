import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic1 from '../../../images/1.svg';
import pic2 from '../../../images/2.svg';
import pic3 from '../../../images/4.svg';
import './Service.css';

const Service = () => {
    return (
        <div className='service-container text-light'>
            <div className='text-center'>
                <h4>Whate I Do</h4>
                <p>Services I provide wide range of digital services</p>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic2} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic3} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic2} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-between custom-card'>
                            <div>
                                <h5>WEB DESIGN</h5>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div>
                                <img src={pic3} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;