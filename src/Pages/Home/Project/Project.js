import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';



const Project = ({ project }) => {
    const { img1, name, id } = project;
    const navigate = useNavigate();
    const handleDetail = id => {
        navigate(`/detail/${id}`);
    }
    return (
        <Col xs={12} md={6}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                autoplay={{ delay: 3000 }}
                effect={"coverflow"}
                slidesPerView={3}
                spaceBetween={15}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
            >
                {
                    project.map(product => <SwiperSlide>
                        <button className='card-btn' onClick={() => handleDetail(id)}>
                            <div className='project-card'>
                                <div className='overflow-hidden'>
                                    <img src={img1} alt="" />
                                </div>
                                <div className='project-card-text'>
                                    <p className='project-name'>{name}</p>
                                </div>
                            </div>
                        </button>
                    </SwiperSlide>)
                }
            </Swiper>
        </Col>
    );
};

export default Project;