import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <div className='service-container text-light'>
            <div className='text-center'>
                <p className='txt'>FEATURES</p>
                <h3 className='text fw-bold'>Whate I Do</h3>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div className='custom-card'>
                            <h1><i class="fas fa-bars txt"></i></h1>
                            <h3>Web Design</h3>
                            <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                            <h5 className='service-sign'><i class="fas fa-arrow-right txt"></i></h5>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='custom-card'>
                            <h1><i class="fas fa-book-open txt"></i></h1>
                            <h3>Responsive</h3>
                            <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                            <h5 className='service-sign'><i class="fas fa-arrow-right txt"></i></h5>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='custom-card'>
                            <h1><i class="fas fa-laptop-code txt"></i></h1>
                            <h3>Web Development</h3>
                            <h6>I'm developer focused on crafting user‑friendly experiences.</h6>
                            <p className='service-sign'><i class="fas fa-arrow-right txt"></i></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;