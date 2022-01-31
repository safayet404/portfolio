import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import araf from '../../assets/images/2.png';
class TopNav extends Component {
    render() {
        return (
            <Fragment>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid={true}>
                        <img src={araf} alt=" " className="logoImg" />
                        <Navbar.Brand className="navTitle" href="#home">Araf</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            
                               
                            </Nav>
                            <Nav>
                                <Link className="navItem" to="/" >Home</Link>
                                <Link className="navItem" to="/do">Features</Link>
                                <Link className="navItem" to="/portfolio">Portfolio</Link>
                                <Link className="navItem" to="/resume">Resume</Link>
                            
                                <Link className="navItem" to="/price">Pricing</Link>
                                <Link className="navItem" to="/contact">Contact</Link>
                                <Button className="buyNow" href="#deets">Buy Now</Button>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </Fragment>
        );
    }
}

export default TopNav;