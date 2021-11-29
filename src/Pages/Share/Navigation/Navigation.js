import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar className='px-4 header' variant='dark' collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mx-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Resume</Nav.Link>
                    <Nav.Link href="#pricing">Works</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <a href="/SAIFUL ISLAM.pdf" download className='custom-btn' >Dowload <i class="fas fa-download icon"></i></a>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;