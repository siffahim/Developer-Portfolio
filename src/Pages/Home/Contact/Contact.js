import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';

const Caontact = () => {
    return (
        <div className='form-container'>
            <h2 className='text-center py-5'>Contact Me</h2>
            <Row>
                <Col sm={3}>
                    <div className='contact-card'>
                        <h6>Phone:</h6>
                        <p>01860760170</p>
                    </div>
                    <div className='contact-card'>
                        <h6>Phone:</h6>
                        <p>01860760170</p>
                    </div>
                    <div className='contact-card'>
                        <h6>Phone:</h6>
                        <p>01860760170</p>
                    </div>
                </Col>
                <Col sm={9}>
                    <form action="">
                        <div className='d-flex'>
                            <input type="text" name="name" placeholder='Name' className='form-control' />
                            <input type="email" name="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <input type="number" name="name" placeholder='Number' className='form-control' />
                            <input type="text" name="email" placeholder='Subject' className='form-control' />
                        </div>
                        <textarea name='message' placeholder='Message' rows="5" className='form-control custom-bg'></textarea><br />
                        <button>Send Message</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Caontact;