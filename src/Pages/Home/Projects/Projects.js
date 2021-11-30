import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import healtcare from '../../../images/projects/food-1.png';
import jewellery from '../../../images/projects/jewellery-1.png';
import tourism from '../../../images/projects/Tourism.png';
import './Projects.css';

const Projects = () => {
    return (
        <div className='slider-container'>
            <div className='text-center mb-5'>
                <p className='txt'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>My Portfolio</h3>
            </div>
            <Container>
                <Row className='g-4'>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={jewellery} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={tourism} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={healtcare} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={jewellery} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={tourism} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='project-card'>
                            <div className='overflow-hidden rounded'>
                                <img src={healtcare} alt="" />
                            </div>
                            <p className='txt'>Development</p>
                            <p className='text-project fs-4'>This service provide for design <span className='link-project'><i class="fas fa-external-link-alt"></i></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;