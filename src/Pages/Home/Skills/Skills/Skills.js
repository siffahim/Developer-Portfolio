import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Others from '../Others/Others';
import Programming from '../Programming/Programming';
import Tools from '../Tools/Tools';
import Web from '../Web/Web';
import './Skills.css';

const Skills = () => {
    return (
        <div className='text-center skills-container'>
            <h4 className='py-4 text-light text'>My SKills</h4>
            <Router>
                <div className='d-flex flex-nowrap justify-content-center'>
                    <Link to='/web' className='nested-link'>Web</Link>
                    <Link to='/programming' className='nested-link'>Programming</Link>
                    <Link to='/others' className='nested-link'>Others</Link>
                    <Link to='/tools' className='nested-link'>Tools</Link>
                </div>
                <br /><br /><br />
                <Routes>
                    <Route path='/' element={<Web />} />
                    <Route path='/web' element={<Web />} />
                    <Route path='/programming' element={<Programming />} />
                    <Route path='/others' element={<Others />} />
                    <Route path='/tools' element={<Tools />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Skills;