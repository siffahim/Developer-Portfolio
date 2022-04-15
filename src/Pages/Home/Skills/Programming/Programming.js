import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Programming = () => {
    return (
        <Container>
            <Fade>
                <ul className='list-container'>
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
            </Fade>
        </Container>
    );
};

export default Programming;