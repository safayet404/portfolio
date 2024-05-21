import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Portfolio = () => {
    AOS.init();
    return (
        <div data-aos="fade-right" id="scrollToProject">
            <Container>
                <h3 className="name mt-5 mb-4">PROJECTS</h3>
                <Row className='mt-5 '>
                    <Col lg={6} md={12} sm={12}>
                      
                       <p className='projectHead'>01.Parul Fabrics LTD</p>
                        <p className='projectContent'>It is shop management application for Parul Fabrics Ltd which is fabrics shop where they produce and sell jeans fabrics.This application has some functionality like sell,receive,customer manage and many more.
                        <br/><br/> 
                        E-mail : admin@gmail.com <br/><br/>
                        Password : admin1234</p>
                        
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="gap-3 mt-4 mb-5 middle">
                            <a href="https://github.com/safayet404/parul-fabrics-ltd" target="_blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client Code
                                </button>
                            </a>
                            <a href="https://github.com/safayet404/parul-fabrics-ltd-backend" target="_blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server Code
                                </button>
                            </a>
                            <a href="https://parul-fabrics-ltd.onrender.com" target="_blank">
                                <button className="border sourceCodeGap btn py-1  bg-slate-950 text-white  rounded-md ">
                                    Live Site
                                </button>
                            </a>
                        </div>
                       
                    </Col>
                    <Col lg={6} md={12} sm={12}><div className="image-container">
                        <div className="image1 ">

                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                
                    <Col lg={6} md={12} sm={12}>
                        <p className='projectHead'>02.Local Luminaries</p>
                        <p className='projectContent'>It is a tour guide agency website.This application has some functionality tour booking,cancel,tour customization.
                       
                        </p>
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="gap-3 mt-4">
                            <a href="https://github.com/safayet404/local-luminaries-frontend" target="_blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client Code
                                </button>
                            </a>
                            <a href="https://github.com/safayet404/local-luminaries-backend" target="_blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server Code
                                </button>
                            </a>
                            <a href="https://local-luminaries.onrender.com/" target="_blank">
                                <button className="border sourceCodeGap btn py-1   text-white  rounded-md ">
                                    Live Site
                                </button>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}><div className="image-container mb-5 mt-5">
                        <div className="image2"></div>
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