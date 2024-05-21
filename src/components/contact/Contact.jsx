import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';
import c1 from '../../assets/images/contact1.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../assets/css//style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {

    AOS.init();
    return (
        <div data-aos="fade-right" id="scrollToContact">

            <Container>
                <h3 className='name mt-5'>CONTACT WITH ME</h3>
                <Row>
                    <Col lg={5} md={12} sm={12} className="mt-5 d-flex justify-content-center">

                        <Card className='contact-card'>
                            <img alt=" " className="card-image mt-3" src={c1} />
                            <Card.Body>

                                <h3 className="contact-card-header mt-3">Safayet Hossain</h3>

                                <p className="contact-card-description">House : 153,Primary School Road <br/> Faidabad,Dakshinkhan</p>
                                <p className="contact-addresses-header mt-5" >
                                    Phone : <span className="contact-addresses">01679175553</span>   <br></br>
                                    Email : <span className="contact-addresses">hossainsafayet187@gmail.com</span>

                                </p>

                                <Col>
                                    <p className="topMiniHeader mt-5">find with me</p>
                                    <a className="iconBox2  mt-3" href="https://github.com/safayet404" target='_blank' ><FontAwesomeIcon icon={faGithub} /> </a>
                                    <a className="iconBox2  mt-3" href="https://www.linkedin.com/in/safayet-hossain-090324216/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /> </a>
                                </Col>


                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={7} md={12} sm={12} className="mt-5 card-shadow d-flex justify-content-center">

                        <Form className="p-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Row>
                                    <Col>

                                        <Form.Label className="label p-1">Your Name</Form.Label>
                                        <Form.Control className="input-field p-1" type="text" />
                                    </Col>

                                    <Col>
                                        <Form.Label className="label p-1">Your Mobile</Form.Label>
                                        <Form.Control className="input-field p-1" type="text p-1" />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="label p-1">Your Email</Form.Label>
                                <Form.Control className="input-field p-1" type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="label">Subject</Form.Label>
                                <Form.Control className="input-field p-1" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="label">Type Your Message</Form.Label>
                                <textarea className="w-100 h-250 textarea-field" ></textarea>
                            </Form.Group>

                            <Button className="submit-btn" variant="primary" type="submit">
                                send message <FontAwesomeIcon icon={faLongArrowAltRight} />
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}


export default Contact;