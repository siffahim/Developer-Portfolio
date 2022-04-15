import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { img1, name, id } = project;
    const navigate = useNavigate();
    const handleDetail = id => {
        navigate(`/detail/${id}`);
    }
    return (
        <Col sm={12} md={4} className='p-1'>
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
        </Col>
    );
};

export default Project;