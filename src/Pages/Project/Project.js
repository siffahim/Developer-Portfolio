import React from 'react';
import { Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { img1, name, id } = project;
    return (
        <Col sm={12} md={4}>
            <Slide bottom>
                <div className='project-card'>
                    <div className='overflow-hidden rounded'>
                        <img src={img1} alt="" />
                    </div>
                    <p className='txt'>{name}</p>
                    <Link to={`/detail/${id}`} className='text-project fs-4'><p>This service provide for design <span className='link-project'><i className="fas fa-external-link-alt"></i></span></p></Link>
                </div>
            </Slide>
        </Col>
    );
};

export default Project;