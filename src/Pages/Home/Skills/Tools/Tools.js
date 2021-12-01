import React from 'react';
import { Container } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const Tools = () => {
    return (
        <Container>
            <Flip top>
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
            </Flip>
        </Container>
    );
};

export default Tools;