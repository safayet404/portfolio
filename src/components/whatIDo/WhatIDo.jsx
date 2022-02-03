import React, { Component,Fragment } from 'react';
import {Container ,Row,Col,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPaintRoller,faWifi,faLaptop,faFolder,faTv} from '@fortawesome/free-solid-svg-icons'
class WhatIDo extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="mt-5 margin-top-do">
                     <h4 className="short-Heading">Features</h4>
                     <h1 className="long-Heading">What I Do</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="projectCard">
                               <p className="icon"> <FontAwesomeIcon icon={faBookOpen} /></p>
                               <h4 className="cardHeader">Business Strategy</h4> 
                               <p className="cardContent">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>

                               
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="projectCard">
                            <p className="icon"> <FontAwesomeIcon icon={faLaptop} /></p>
                                <h4 className="cardHeader">Web Development</h4>
                                <p className="cardContent">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                               
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="projectCard">
                            <p className="icon"> <FontAwesomeIcon icon={faPaintRoller} /></p>
                                <h4 className="cardHeader">App Development</h4>
                                <p className="cardContent">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                              
                                
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="projectCard">
                            <p className="icon"> <FontAwesomeIcon icon={faWifi} /></p>
                                <h4 className="cardHeader">Site Responsive</h4>
                                <p className="cardContent">always free from repetition, injected humour, or non-characteristic words etc.</p>
                                
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="projectCard">
                            <p className="icon"> <FontAwesomeIcon icon={faFolder} /></p>
                                <h4 className="cardHeader">Artificail Inteliggence</h4>
                                <p className="cardContent">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>

                               
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            
                            <Card className="projectCard">
                            <p className="icon"> <FontAwesomeIcon icon={faTv} /></p>
                                <h4 className="cardHeader">API Creation</h4>
                                <p className="cardContent">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WhatIDo;