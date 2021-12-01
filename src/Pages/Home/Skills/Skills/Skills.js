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
            <h4 className='py-4 text-light text'>My SKills</h4>
            <div className='d-flex flex-wrap justify-content-center'>
                <button onClick={() => setSkills('web')} className='nested-link'>Web</button>
                <button onClick={() => setSkills('programming')} className='nested-link'>Programming</ button>
                <button onClick={() => setSkills('others')} className='nested-link'>Others</button>
                <button onClick={() => setSkills('tools')} className='nested-link'>Tools</button>
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