import React from 'react';
import { Container } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const Others = () => {
    return (
        <Container>
            <Flip top>
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
            </Flip>
        </Container>
    );
};

export default Others;