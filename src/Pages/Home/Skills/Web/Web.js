import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bootstrap from '../../../../images/bootstrap.png';
import css from '../../../../images/css.png';
import express from '../../../../images/express_js-161052138fa79136c0474521906b55e2.png';
import html from '../../../../images/html.png';
import material from '../../../../images/MaterialUi.png';
import mongo from '../../../../images/mongodb.png';
import node from '../../../../images/node js.png';
import react from '../../../../images/React.png';
import tailwind from '../../../../images/Tailwind-img.png';
import './Web.css';

const web = () => {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={react} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={express} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={node} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={mongo} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={tailwind} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={material} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={bootstrap} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={css} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={html} alt="" />
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

export default web;