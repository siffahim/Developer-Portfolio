import React from 'react';
import { Container } from 'react-bootstrap';

const Others = () => {
    return (
        <Container>
            <ul data-aos="fade-in" className='list-container'>
                <div className='skill-road'>
                    <li className='native'>React Native</li>
                </div>
                <div className='skill-road'>
                    <li className='next'>Next Js</li>
                </div>
                <div className='skill-road'>
                    <li className='sass'>Sass</li>
                </div>
                <div className='skill-road'>
                    <li className='styleComponent'>Style Component</li>
                </div>
            </ul>
        </Container>
    );
};

export default Others;