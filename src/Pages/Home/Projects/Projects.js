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
                <h4 className="py-4 text">My Portfolio</h4>
            </div>
            <Row>
                <Col sm={12} md={6}>
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

                        </Slider>
                        <div className='ps-2 text-light pt-3'>
                            <h6>Jewellery Shop</h6>
                            <p>Services I provide wide range of digital services</p>
                            <a target="_blank" href='https://jewellery-ec2de.web.app/' className='live-site'>Veiw Site <i class="fas fa-expand-alt"></i></a>
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
                <Col sm={12} md={6}>
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
                        <div className='ps-2 text-light pt-3'>
                            <h6>Travel Tourism</h6>
                            <p>Services I provide wide range of digital services</p>
                            <a href='https://tourism-75e22.web.app/' target='_blank' className='live-site'>Veiw Site <i class="fas fa-expand-alt"></i></a>
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
                <Col sm={12} md={6}>
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
                        <div className='ps-2 text-light pt-3'>
                            <h6>Healthcare</h6>
                            <p>Services I provide wide range of digital services</p>
                            <a href='https://healthcare-f0a15.web.app/' target="_blank" className='live-site'>Veiw Site <i class="fas fa-expand-alt"></i></a>
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