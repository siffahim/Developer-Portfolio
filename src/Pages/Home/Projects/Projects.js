import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import food1 from '../../../images/projects/food-1.png';
import food2 from '../../../images/projects/food-2.png';
import food3 from '../../../images/projects/food-3.png';
import jewell1 from '../../../images/projects/jewellery-1.png';
import jewell2 from '../../../images/projects/jewellery-2.png';
import jewell3 from '../../../images/projects/jewellery-3.png';
import jewell4 from '../../../images/projects/jewellery-4.png';
import tour2 from '../../../images/projects/Tourism-2.png';
import tour3 from '../../../images/projects/Tourism-3.png';
import tour1 from '../../../images/projects/Tourism.png';
import './Projects.css';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    };
    return (
        <div className='slider-container'>
            <div className='text-center text-light'>
                <h4 className="py-4">My Portfolio</h4>
            </div>
            <Row>
                <Col sm={12} md={4}>
                    <div className='slide-card'>
                        <Slider {...settings}>
                            <div>
                                <img src={jewell1} alt="" />
                            </div>
                            <div>
                                <img src={jewell2} alt="" />
                            </div>
                            <div>
                                <img src={jewell3} alt="" />
                            </div>
                            <div>
                                <img src={jewell4} alt="" />
                            </div>
                        </Slider>
                        <div className='text-center text-light pt-3'>
                            <h4>Jewellery Shop</h4>
                            <p>Services I provide wide range of digital services</p>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='accordion-bg'>
                                <Accordion.Header className='accordion-bg'>View Details</Accordion.Header>
                                <Accordion.Body>
                                    Features:
                                    <ol>
                                        <li>Implemented user interface employing React JS with vanilla CSS, react-bootstrap,Material UI, React-Rating, AOS animation.</li>

                                        <li>Integrated simple google login and sign-up method, register new account, email
                                            & password login with firebase authentication.</li>
                                        <li>
                                            Handling re-direct system with React-Router.
                                        </li>
                                        <li>
                                            Manage dashboard, control admin panel by checking admin and user role.
                                        </li>
                                    </ol>
                                    <li>
                                        Technology Used: React JS, react-router, React-Rating, React API, firebase, mongo dB,
                                        Node JS, Express JS, React Bootstrap, Heroku, Context API, Material UI
                                    </li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='slide-card'>
                        <Slider {...settings}>
                            <div>
                                <img src={tour1} alt="" />
                            </div>
                            <div>
                                <img src={tour2} alt="" />
                            </div>
                            <div>
                                <img src={tour3} alt="" />
                            </div>
                        </Slider>
                        <div className='text-center text-light pt-3'>
                            <h4>Jewellery Shop</h4>
                            <p>Services I provide wide range of digital services</p>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='accordion-bg'>
                                <Accordion.Header className='accordion-bg'>View Details</Accordion.Header>
                                <Accordion.Body>
                                    Features:
                                    <ol>
                                        <li>Implemented user interface employing React JS with vanilla CSS, react-bootstrap,Material UI, React-Rating, AOS animation.</li>

                                        <li>Integrated simple google login and sign-up method, register new account, email
                                            & password login with firebase authentication.</li>
                                        <li>
                                            Handling re-direct system with React-Router.
                                        </li>
                                        <li>
                                            Manage dashboard, control admin panel by checking admin and user role.
                                        </li>
                                    </ol>
                                    <li>
                                        Technology Used: React JS, react-router, React-Rating, React API, firebase, mongo dB,
                                        Node JS, Express JS, React Bootstrap, Heroku, Context API, Material UI
                                    </li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='slide-card'>
                        <Slider {...settings}>
                            <div>
                                <img src={food1} alt="" />
                            </div>
                            <div>
                                <img src={food2} alt="" />
                            </div>
                            <div>
                                <img src={food3} alt="" />
                            </div>
                        </Slider>
                        <div className='text-center text-light pt-3'>
                            <h4>Jewellery Shop</h4>
                            <p>Services I provide wide range of digital services</p>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='accordion-bg'>
                                <Accordion.Header className='accordion-bg'>View Details</Accordion.Header>
                                <Accordion.Body>
                                    Features:
                                    <ol>
                                        <li>Implemented user interface employing React JS with vanilla CSS, react-bootstrap,Material UI, React-Rating, AOS animation.</li>

                                        <li>Integrated simple google login and sign-up method, register new account, email
                                            & password login with firebase authentication.</li>
                                        <li>
                                            Handling re-direct system with React-Router.
                                        </li>
                                        <li>
                                            Manage dashboard, control admin panel by checking admin and user role.
                                        </li>
                                    </ol>
                                    <li>
                                        Technology Used: React JS, react-router, React-Rating, React API, firebase, mongo dB,
                                        Node JS, Express JS, React Bootstrap, Heroku, Context API, Material UI
                                    </li>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;