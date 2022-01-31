import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGem} from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faReact,faLaravel } from "@fortawesome/free-brands-svg-icons";
class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container className="margin-top">
                    <Row>
                        <Col className="home1">
                            <Row>
                                <h6 className="topMiniHeader">WELCOME TO MY WORLD </h6>
                                <h1 className="topHeader mt-5">Hi, I’m <span className="name">Safayet, </span> <br></br>
                                    a Professional Developer </h1>
                                <h6 className="mt-5 topContent">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</h6>


                            </Row>
                            <Row className="margin-top">
                                <Col>
                                    <p className="topMiniHeader">find with me</p>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faFacebookF} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faInstagram} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon icon={faLinkedin} /> </a>
                                </Col>

                                <Col>
                                <p className="topMiniHeader">Best Skill On</p>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon className="iconColor" icon={faGem} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon className="iconColor" icon={faReact} /> </a>
                                    <a className="iconBox mt-3" href="http://facebook.com" ><FontAwesomeIcon className="iconColor" icon={faLaravel} /> </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <hr></hr>
                </Container>
            </Fragment>
        );
    }
}

export default Home;