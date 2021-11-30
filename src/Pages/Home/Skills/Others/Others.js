import React from 'react';
import { Container } from 'react-bootstrap';

const Others = () => {
    return (
        <Container>
            <ul className='list-container'>
                <li className='native'>React Native</li>
                <li className='next'>Next Js</li>
                <li className='sass'>Sass</li>
                <li className='styleComponent'>Style Component</li>
            </ul>
        </Container>
    );
};

export default Others;