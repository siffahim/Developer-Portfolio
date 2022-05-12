import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <ScrollToTop data-aos="fade-down" width='20' height='20' style={{ background: '#1f2125' }} color='#f9004d' smooth top='700' />
            <p className='text-muted'>Design and Developed by - Fahim</p>
        </div>
    );
};

export default Footer;