import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';

const Caontact = () => {
    return (
        <div>
            <h2>Contact Me</h2>
            <Row>
                <Col sm={6}>
                    <div>
                        <h6>Phone:</h6>
                        <p>01860760170</p>
                    </div>
                </Col>
                <Col sm={6}></Col>
            </Row>
        </div>
    );
};

export default Caontact;