import React from 'react';
import { Container } from 'react-bootstrap';

const Tools = () => {
    return (
        <Container>
            <ul className='list-container'>
                <li className='git'>Git</li>
                <li className='firebase'>Firebase</li>
                <li className='heroku'>Heroku</li>
                <li className='netlify'>Netlify</li>
                <li className='github'>Github</li>
            </ul>
        </Container>
    );
};

export default Tools;