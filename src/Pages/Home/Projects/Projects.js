import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
import './Projects.css';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/fackDb.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='slider-container'>
            <Slide bottom>
                <div className='text-center mb-5'>
                    <p className='txt'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                    <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>My Portfolio</h3>
                </div>
            </Slide>
            <Row className='g-2'>
                <Col xs={12} md={12}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                        autoplay={{ delay: 3000 }}
                        effect={"coverflow"}
                        slidesPerView={1}
                        breakpoints={{
                            688: {
                                slidesPerView: 3
                            }
                        }}
                        spaceBetween={15}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            projects.map(product => <SwiperSlide>
                                <button className='card-btn'>
                                    <div className='project-card text-start'>
                                        <div className='overflow-hidden'>
                                            <img src={product.img1} alt="" />
                                        </div>
                                        <div className='text-start'>
                                            <span style={{ background: '#6e7ff7', color: '#fff' }} className='title-card'>React</span>
                                            <span style={{ background: '#4ee56f', color: '#fff' }} className='title-card'>Node</span>
                                            <span style={{ background: '#ffac2c ', color: '#fff' }} className='title-card'>Firebase</span>
                                            <span style={{ background: '#4ee56f', color: '#fff' }} className='title-card'>MongoDb</span>
                                            <span style={{ background: '#ff205d', color: '#fff' }} className='title-card'>Firebase</span>
                                        </div>
                                        <h5 className='text-light'>{product.name}</h5>
                                        <p className='text-light text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </div>
                                </button>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;