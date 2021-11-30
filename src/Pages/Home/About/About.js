import React from 'react';
import img from '../../../images/build.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h4 className='text text-center'>About Me</h4>
            <div className='d-flex align-items-center justify-content-center'>
                <div>
                    <img width='60%' src={img} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, ea! Voluptatibus, omnis sed ducimus veniam, et vitae error quidem minus quas eaque neque consectetur labore natus. Debitis, delectus similique? Delectus quae tenetur labore assumenda nulla exercitationem esse cupiditate veritatis omnis?</p>
                </div>
            </div>
        </div>
    );
};

export default About;