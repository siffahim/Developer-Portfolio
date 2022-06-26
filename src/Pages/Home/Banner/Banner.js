import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../images/fahim.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-center text-md-start'>
                    <Col data-aos="fade-up" xs={12} md={7} className='pt-4 order-2 order-md-1 '>
                        <p className='text-muted'>WELCOME TO MY WORLD</p>
                        <h1 style={{ fontSize: '45px', fontWeight: 'bold', textTransform: 'uppercase' }}>Hi,<br /> I’M <sapn style={{ color: '#f9004d' }}>𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌</sapn><br />
                            A <span style={{ color: '#f9004d', fontSize: '40px', fontWeight: '400' }}>
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    words={['MERN Stack Developer', 'Frontend Developer', 'Full Stack Developer', 'Junior Web Developer']}
                                />
                            </span>
                        </h1>

                        <p className='mb-5 text-muted'>A highly skilled developer with strong confidence with high quality and high-performance web applications seeks the rules of junior Software Developer at JavaScript, React, Node, andmodern JavaScript libraries.</p>
                        <div>
                            <p>FIND WITH ME</p>
                            <a data-aos="zoom-in-down" rel="noreferrer" href="https://github.com/siffahim" target='_blank' className='text-light'>
                                <div className='banner-icon'><i className="fa-brands fa-github"></i></div>
                            </a>
                            <a data-aos="zoom-in-down" rel="noreferrer" href="https://www.linkedin.com/in/siffahim/" target='_blank' className='text-light'>
                                <div className='banner-icon'><i className="fab fa-linkedin-in"></i></div>
                            </a>
                            <a data-aos="zoom-in-down" rel='noreferrer' href="https://www.facebook.com/sif.fahim" target='_blank' className='text-light'>
                                <div className='banner-icon'><i className="fab fa-facebook-f"></i></div>
                            </a>
                        </div>
                    </Col>
                    <Col data-aos="fade-down" xs={12} md={5} className=' order-1 order-md-2'>
                        <div className='img-container'>
                            <img src={img} width='80%' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;