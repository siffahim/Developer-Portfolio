import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';

const Caontact = () => {
    return (
        <div className='form-container'>
            <h4 className='text-center py-4'>Contact Me</h4>
            <Row>
                <Col sm={12} md={3}>
                    <div className='contact-card'>
                        <h2><i class="fas fa-phone-alt"></i></h2>
                        <p>01860760170</p>
                    </div>
                    <div className='contact-card'>
                        <h2><i class="fas fa-envelope"></i></h2>
                        <p>siffahim25@gmail.com</p>
                    </div>
                    <div className='contact-card'>
                        <h2><i class="fas fa-map-marked-alt"></i></h2>
                        <p>Mogbazer-12,Dhaka,Bangladesh</p>
                    </div>
                </Col>
                <Col sm={12} md={9}>
                    <form action="https://formsubmit.co/siffahim25@gmail.com" method="POST">
                        <Row>
                            <Col sm={12} md={6}>
                                <input type="text" name="name" placeholder='Name' className='form-control' />
                                <input type="hidden" name="_next" value="https://thankyouforsend.netlify.app/" />
                                <input type="hidden" name="_captcha" value="false" />
                            </Col>
                            <Col sm={12} md={6}>
                                <input type="email" name="email" placeholder='Email' className='form-control' />
                            </Col>
                        </Row>
                        <textarea name='message' placeholder='Message' rows="5" className='form-control custom-bg'></textarea><br />
                        <button className='form-btn'>Send Message</button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Caontact;