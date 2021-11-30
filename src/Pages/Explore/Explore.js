import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import './Explore.css';

const Explore = ({ data }) => {
    const { img1, img2, img3, features1, features2, features3, features4, Technology } = data;
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
    };
    return (
        <Container>
            <Row>
                <Col sm={12} md={11} className='mx-auto mt-2'>
                    <div className='slider-card'>
                        <Slider {...settings}>
                            <div>
                                <img width='100%' height='400px' src={img1} alt="" />
                            </div>
                            <div>
                                <img width='100%' height='400px' src={img2} alt="" />
                            </div>
                            <div>
                                <img width='100%' height='400px' src={img3} alt="" />
                            </div>
                        </Slider>
                        <div>
                            <div className='text-center my-4'>
                                <p className='txt'>Information</p>
                                <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>Features & Technology</h3>
                            </div>
                            <div className='text-light'>
                                <h6 className='txt'>Features</h6>
                                <p><i class="fas fa-hand-point-right icon"></i> {features1}</p>
                                <p><i class="fas fa-hand-point-right icon"></i> {features2}</p>
                                <p><i class="fas fa-hand-point-right icon"></i> {features3}</p>
                                <p><i class="fas fa-hand-point-right icon"></i> {features4}</p>
                                <h6 className='txt'>Technology</h6>
                                <p><i class="fas fa-hand-point-right icon"></i> {Technology}.</p>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <a href="#fd" className='form-btn me-2 mt-3'>Live Site</a>
                            <a href="#fd" className='form-btn me-2 mt-3'>Server Site</a>
                            <a href="#fd" className='form-btn me-2 mt-3'>Code Link</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Explore;