import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css';

const Service = () => {
    return (
        <div className='service-container text-light'>
            <div data-aos="fade-up" className='text-center mb-5'>
                <p className='txt'>FEATURES</p>
                <h3 className='text fw-bold'>What I Do</h3>
            </div>
            <Container>
                <Row className='g-4 text-center'>
                    <Col data-aos="fade-right" sm={12} md={4}>
                        <div className='custom-card'>
                            <h2 className='servie-icon'><i className="fa-solid fa-palette"></i></h2>
                            <h4>Web Design</h4>
                            <p>I'm developer focused on crafting user‑friendly experiences.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" sm={12} md={4}>
                        <div className='custom-card'>
                            <h2 className='servie-icon'><i className="fa-solid fa-tablet-button"></i></h2>
                            <h4>Responsive</h4>
                            <p>I'm developer focused on crafting user‑friendly experiences.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-left" sm={12} md={4}>
                        <div className='custom-card'>
                            <h2 className='servie-icon'><i className="fas fa-laptop-code"></i></h2>
                            <h4>Web Development</h4>
                            <p>I'm developer focused on crafting user‑friendly experiences.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;