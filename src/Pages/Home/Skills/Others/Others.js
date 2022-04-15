import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Others = () => {
    return (
        <Container>
            <Fade>
                <ul className='list-container'>
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
            </Fade>
        </Container>
    );
};

export default Others;