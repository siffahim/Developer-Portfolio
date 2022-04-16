import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    const navigate = useNavigate();
    const handleMedia = () => {
        navigate('/media')
    }
    return (
        <Navbar className='px-4 header' sticky="top" variant='dark' collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><span>𝐹𝒜𝐻𝐼𝑀</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mx-auto">
                    <Nav.Link className='custom-btn' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className='custom-btn' as={HashLink} to="/home#about">About</Nav.Link>
                    <Nav.Link className='custom-btn' target="_blank" href="https://drive.google.com/file/d/1iSGw_Qrg-ov_gJMt1EwhKg54noPyDySi/view?usp=sharing">Resume</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link className='custom-btn' as={HashLink} to="/home#contact">Contact</Nav.Link>
                </Nav>
                <a href="/SAIFUL ISLAM.pdf" download className='custom-btn me-0' >Resume <i className="fas fa-download"></i></a>
                <button onClick={handleMedia} className='btn-media ms-4'><i className="fas fa-play-circle"></i></button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;