import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar className='px-4 header' sticky="top" variant='dark' collapseOnSelect expand="lg">
            <Navbar.Brand href="#home"><span>Ƹ̵̡Ӝ̵̨̄Ʒ𝐹𝒜𝐻𝐼𝑀</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mx-auto">
                    <Nav.Link className='custom-btn' href="#about">About</Nav.Link>
                    <Nav.Link className='custom-btn' href="#features">Resume</Nav.Link>
                    <Nav.Link className='custom-btn' href="#pricing">Works</Nav.Link>
                    <Nav.Link className='custom-btn' href="#pricing">Blog</Nav.Link>
                    <Nav.Link className='custom-btn' href="#pricing">Contact</Nav.Link>
                </Nav>
                <a href="/SAIFUL ISLAM.pdf" download className='custom-btn' >Resume <i class="fas fa-download"></i></a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;