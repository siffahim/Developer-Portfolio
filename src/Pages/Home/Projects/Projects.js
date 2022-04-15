import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Project from '../Project/Project';
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
            <Container>
                <Row className='g-2'>
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;