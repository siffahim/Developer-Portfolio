import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Tools = () => {
    return (
        <Container>
            <Fade>
                <ul className='list-container'>
                    <div className='skill-road'>
                        <li className='git'>Git</li>
                    </div>
                    <div className='skill-road'>
                        <li className='firebase'>Firebase</li>
                    </div>
                    <div className='skill-road'>
                        <li className='heroku'>Heroku</li>
                    </div>
                    <div className='skill-road'>
                        <li className='netlify'>Netlify</li>
                    </div>
                    <div className='skill-road'>
                        <li className='github'>Github</li>
                    </div>
                </ul>
            </Fade>
        </Container>
    );
};

export default Tools;