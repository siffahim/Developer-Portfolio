import React from 'react';

const Footer = () => {
    const footer = {
        textAlign: 'center',
        padding: '10px 0',
        borderTop: '1px solid #18181a',
        backgroundColor: "#191c26",
        color: "#fff",
        paddingTop: '20px'
    }
    return (
        <div style={footer}>
            <p className='text-muted'>Design and Developed by - Fahim</p>
        </div>
    );
};

export default Footer;