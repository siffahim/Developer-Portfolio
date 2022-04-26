import React from 'react';
import { Container } from 'react-bootstrap';

const Programming = () => {
    return (
        <Container>
            <ul data-aos="fade-in" className='list-container'>
                <div className='skill-road'>
                    <li className='javascript'>JavaScript</li>
                </div>
                <div className='skill-road'>
                    <li className='typescript'>Typescript</li>
                </div>
                <div className='skill-road'>
                    <li className='python'>Python</li>
                </div>
            </ul>
        </Container>
    );
};

export default Programming;