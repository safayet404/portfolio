import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Portfolio = () => {
    AOS.init();
    return (
        <div id="scrollToProject">
            <Container>
                <h3 className="name mt-5 mb-4">PROJECTS</h3>
                <Row className='mt-5'>
                    <Col>
                        <p className='projectHead '>01.Parul Fabrics LTD</p>
                        <p className='projectContent'>It is shop management application for Parul Fabrics Ltd which is fabrics shop where they produce and sell jeans fabrics.This application has some functionality like sell,receive,customer manage and many more.
                        <br/><br/> 
                        E-mail : admin@gmail.com <br/><br/>
                        Password : admin</p>
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="flex gap-3 mt-4 flex-column ">
                            <a href="https://github.com/zannat20040/HA-Beauty-Shop" target="_blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client code
                                </button>
                            </a>
                            <a href="https://github.com/zannat20040/HA-beauty-shop-server" target="_blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server code
                                </button>
                            </a>
                            <a href="https://brand-shop-3c930.web.app/" target="_blank">
                                <button className="border sourceCodeGap btn py-1  bg-slate-950 text-white  rounded-md ">
                                    Live Site
                                </button>
                            </a>
                        </div>
                    </Col>
                    <Col><div className="image-container">
                        <div className="image1 "></div>
                    </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                <Col><div className="image-container">
                        <div className="image2 "></div>
                    </div>
                    </Col>
                    <Col>
                        <p className='projectHead'>02.Local Luminaries</p>
                        <p className='projectContent'>It is a tour guide agency website.This application has some functionality tour booking,cancel,tour customization.
                        <br/><br/> 
                        <br/><br/>
                        </p>
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="flex gap-3 mt-4 flex-column ">
                            <a href="https://github.com/zannat20040/HA-Beauty-Shop" target="_blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client code
                                </button>
                            </a>
                            <a href="https://github.com/zannat20040/HA-beauty-shop-server" target="_blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server code
                                </button>
                            </a>
                            <a href="https://brand-shop-3c930.web.app/" target="_blank">
                                <button className="border sourceCodeGap btn py-1  bg-slate-950 text-white  rounded-md ">
                                    Live Site
                                </button>
                            </a>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio

{/* <Container>

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
</Container> */}