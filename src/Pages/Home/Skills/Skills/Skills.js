import React, { useState } from 'react';
import Others from '../Others/Others';
import Programming from '../Programming/Programming';
import Tools from '../Tools/Tools';
import Web from '../Web/Web';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState('web');
    return (
        <div className='text-center skills-container'>
            <div data-aos="fade-up" className='text-center mb-5'>
                <p className='txt text-uppercase'>What skill i have</p>
                <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>My Experience</h3>
            </div>
            <div data-aos="zoom-in-up" className='d-flex flex-wrap justify-content-center'>
                <button onClick={() => setSkills('web')} className={skills === 'web' ? 'selected' : 'nested-link'}>Web</button>
                <button onClick={() => setSkills('programming')} className={skills === 'programming' ? 'selected' : 'nested-link'}>Programming</ button>
                <button onClick={() => setSkills('others')} className={skills === 'others' ? 'selected' : 'nested-link'}>Others</button>
                <button onClick={() => setSkills('tools')} className={skills === 'tools' ? 'selected' : 'nested-link'}>Tools</button>
            </div>
            <br /><br /><br />

            {
                skills === 'web' && <Web />
            }
            {
                skills === 'programming' && <Programming />
            }
            {
                skills === 'others' && <Others />
            }
            {
                skills === 'tools' && <Tools />
            }
        </div>
    );
};

export default Skills;