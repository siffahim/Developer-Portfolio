import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Projects.css';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('/fackDb.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    //modal 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='slider-container'>
            <div data-aos="fade-up" className='text-center mb-5'>
                <p className='txt'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>My Portfolio</h3>
            </div>
            <Row data-aos="zoom-in" className='g-2'>
                <Col xs={12} md={12}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                        autoplay={{ delay: 4000 }}
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
                            projects.map(project => <SwiperSlide>
                                <div className='project-card text-start'>
                                    <div className='overflow-hidden'>
                                        <img src={project.img} alt="" />
                                    </div>
                                    <div className='text-start'>
                                        <span style={{ background: '#6e7ff7', color: '#fff' }} className='title-card'>React</span>
                                        <span style={{ background: '#4ee56f', color: '#fff' }} className='title-card'>Node</span>
                                        <span style={{ background: '#ffac2c ', color: '#fff' }} className='title-card'>Firebase</span>
                                        <span style={{ background: '#4ee56f', color: '#fff' }} className='title-card'>MongoDb</span>
                                        <span style={{ background: '#ff205d', color: '#fff' }} className='title-card'>Firebase</span>
                                    </div>
                                    <div className='my-3 lh-1'>
                                        <p className='text-light fs-6'>{project.name}</p>
                                        <div>
                                            <p className='text-light'>This web application create for react<button style={{ marginLeft: '-9px' }} className='btn text-light' onClick={handleShow}>...See More</button></p>

                                        </div>
                                    </div>
                                    <div>
                                        <a rel='noreferrer' href={`${project.live}`} target='_blank' className='view-btn me-2 mt-3'><i class="fa-solid fa-eye"></i> Live</a>

                                        <a rel='noreferrer' href={`${project.code}`} target='_blank' className='view-btn me-2 mt-3'><i class="fa-solid fa-code"></i> Code Link</a>

                                        {
                                            project.server && <a rel='noreferrer' href={`${project.server}`} target='_blank' className='view-btn me-2 mt-3'><i class="fa-solid fa-arrow-trend-up"></i> Server Link</a>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Col>
            </Row>
            <ProjectModal
                show={show}
                handleClose={handleClose}
            />
        </div>
    );
};

export default Projects;