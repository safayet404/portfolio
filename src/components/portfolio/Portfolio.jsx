import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                      
                       <p className='projectHead'>01.Project Management System</p>
                        <p className='projectContent'>A robust Project Management System designed to streamline task tracking, team collaboration, and project timelines. Features include task assignment, progress monitoring, and real-time updates to ensure efficient project execution.
                        <br/><br/> 
                        E-mail : admin@gmail.com <br/><br/>
                        Password : safayet</p>
                        
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="gap-3 mt-4 mb-5 middle">
                            <a href="https://github.com/safayet404/task-management-system" target="#blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client Code
                                </button>
                            </a>
                            <a href="https://github.com/safayet404/project-pulse-backend" target="#blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server Code
                                </button>
                            </a>
                            <a href="https://project-management-system-cloud.vercel.app" target="#blank">
                                <button className="border sourceCodeGap btn py-1  bg-slate-950 text-white  rounded-md ">
                                    Live Site
                                </button>
                            </a>
                        </div>
                       
                    </Col>
                    <Col lg={6} md={12} sm={12}><div className="image-container">
                        <div className="image3 ">

                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className='mt-5 '>
                    <Col lg={6} md={12} sm={12}>
                      
                       <p className='projectHead'>02.Shop Management System</p>
                        <p className='projectContent'>It is shop management application for Parul Fabrics Ltd which is fabrics shop where they produce and sell jeans fabrics.This application has some functionality like sell,receive,customer manage and many more.
                        <br/><br/> 
                        E-mail : admin@gmail.com <br/><br/>
                        Password : admin1234</p>
                        
                        <h5 className='name'>Technology : ReactJS, NodeJS, ExpressJS, MongoDB</h5>
                        <div className="gap-3 mt-4 mb-5 middle">
                            <a href="https://github.com/safayet404/parul-fabrics-ltd" target="#blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client Code
                                </button>
                            </a>
                            <a href="https://github.com/safayet404/parul-fabrics-ltd-backend" target="#blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server Code
                                </button>
                            </a>
                            <a href="https://parul-fabrics-ltd.vercel.app" target="#blank">
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
                            <a href="https://github.com/safayet404/local-luminaries-frontend" target="#blank">
                                <button className="border sourceCodeGap btn  py-1 px-3  bg-slate-950 text-white  rounded-md ">
                                    Client Code
                                </button>
                            </a>
                            <a href="https://github.com/safayet404/local-luminaries-backend" target="#blank">
                                <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                    Server Code
                                </button>
                            </a>
                            <a href="https://local-luminaries.vercel.app/" target="#blank">
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

