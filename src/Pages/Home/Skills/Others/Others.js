import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import js from '../../../../images/js.png';

const Others = () => {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <div className='skill-card'>
                        <img width='40px' height='40px' src={js} alt="" />
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-bold text-light'>React</h6>
                            <h6 className='text-bold text-light'>75%</h6>
                        </div>
                        <div className='prog'></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Others;