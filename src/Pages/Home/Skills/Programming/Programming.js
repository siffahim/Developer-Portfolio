import React from 'react';
import { Container } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const Programming = () => {
    return (
        <Container>
            <Flip top>
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
            </Flip>
        </Container>
    );
};

export default Programming;