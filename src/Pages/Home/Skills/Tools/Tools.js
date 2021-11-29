import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import git from '../../../../images/3456772.png';
import netlify from '../../../../images/5163699.png';
import firebase from '../../../../images/firebase.png';
import github from '../../../../images/github.png';
import heroku from '../../../../images/heroku.png';

const Tools = () => {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={git} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={firebase} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={heroku} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={github} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={netlify} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Tools;