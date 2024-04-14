import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faJs, faLinkedin, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faReact, faLaravel } from "@fortawesome/free-brands-svg-icons";
import '../../assets/css/responsive.css';
class Home extends Component {
    render() {
        return (
            <div data-aos="fade-right" id="scrollToHome">
                <Container className="margins-top">
                    <Row>
                        <Col className="home1">
                            <Row>
                                <h6 className="topMiniHeader">WELCOME TO MY WORLD </h6>
                                <h1 className="topHeader mt-5">Hi, I’m <span className="name">Safayet, </span> <br></br>
                                <span className='subtitle'>A passionate web developer with a flair for crafting elegant and efficient solutions</span> </h1>


                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <p className="topMiniHeader">find with me</p>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faFacebookF} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faInstagram} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faLinkedin} /> </a>
                                </Col>

                                <Col>
                                    <p className="topMiniHeader">Best Skill On</p>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon className="iconColor" icon={faReact} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faNodeJs} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon className="iconColor" icon={faJs} /> </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <hr></hr>
                </Container>
            </div>
        );
    }
}

export default Home;