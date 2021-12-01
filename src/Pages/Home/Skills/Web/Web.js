import React from 'react';
import { Container } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import './Web.css';

const web = () => {
    return (
        <Container>
            <Flip top>
                <ul className='list-container'>
                    <div className='skill-road'>
                        <li className='react'>React Js</li>
                    </div>
                    <div className='skill-road'>
                        <li className='express'>Express Js</li>
                    </div>
                    <div className='skill-road'>
                        <li className='node'>Node Js</li>
                    </div>
                    <div className='skill-road'>
                        <li className='mongoDb'>MongoDB</li>
                    </div>
                    <div className='skill-road'>
                        <li className='material'>Material UI</li>
                    </div>
                    <div className='skill-road'>
                        <li className='tailwind'>Tailwind</li>
                    </div>
                    <div className='skill-road'>
                        <li className='bootstrap'>Bootstrap</li>
                    </div>
                </ul>
            </Flip>
        </Container>
    );
};

export default web;