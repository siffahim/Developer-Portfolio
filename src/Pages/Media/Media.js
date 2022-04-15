import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Media.css';
const Media = () => {
    return (
        <Container>
            <Row xs={1} md={3} className='g-1'>
                <Col className='media-card'>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/Erp1Elxly98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className='media-card'>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/9ju9O4Ddlww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className='media-card'>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/xRUW-IAh5E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col className='media-card'>
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/TiQ7aug-GwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default Media;