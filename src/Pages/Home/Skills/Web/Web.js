import React from 'react';
import { Container } from 'react-bootstrap';
import './Web.css';

const web = () => {
    return (
        <Container>
            <ul className='list-container'>
                <li className='react'>React Js</li>
                <li className='express'>Express Js</li>
                <li className='node'>Node Js</li>
                <li className='mongoDb'>MongoDB</li>
                <li className='material'>Material UI</li>
                <li className='tailwind'>Tailwind</li>
                <li className='bootstrap'>Bootstrap</li>
            </ul>
        </Container>
    );
};

export default web;