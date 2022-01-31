import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import p1 from '../../assets/images/portfolio-01.webp';
import p2 from '../../assets/images/portfolio-02.webp';
import p3 from '../../assets/images/portfolio-03.webp';
import p4 from '../../assets/images/portfolio-04.webp';
import p5 from '../../assets/images/portfolio-05.webp';
import p6 from '../../assets/images/portfolio-06.webp';

class Portfolio extends Component {
    render() {
        return (
            <Fragment>

                <Container>

                    <h5 className="portfolioSubHeader text-center margin-top">Visit my portfolio and keep your feedback</h5>
                    <h1 className="portfolioHeader text-center">My Portfolio</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p1} alt=" " />
                                <h4 className="portfolioCardHeader">Developmet</h4>
                                <p className="portfolioCardContent">The services provide for design</p>


                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p2} alt=" " />
                                <h4 className="portfolioCardHeader">Application</h4>
                                <p className="portfolioCardContent">Mobile app landing design & app maintain</p>

                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p3} alt=" " />
                                <h4 className="portfolioCardHeader">Photoshop</h4>
                                <p className="portfolioCardContent">Logo design creativity & Application</p>


                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p4} alt=" " />
                                <h4 className="portfolioCardHeader">Figma</h4>
                                <p className="portfolioCardContent">Mobile app landing design & Services</p>

                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">
                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p5} alt=" " />
                                <h4 className="portfolioCardHeader">Artificail Inteliggence</h4>
                                <p className="portfolioCardContent">Design for tecnology & services</p>


                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2 mt-5">

                            <Card className="portfolioCard">
                                <img className="portfolioCardImg" src={p6} alt=" " />
                                <h4 className="portfolioCardHeader">API Creation</h4>
                                <p className="portfolioCardContent">App for tecnology & services</p>

                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Portfolio;