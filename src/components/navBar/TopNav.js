import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-scroll";
const TopNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
        <Container fluid={true}>
         
          <Link className="navTitle" to="/">
          <img src={logo}alt=" " className="logoImg" />
            
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav">
              <Link className="navItem" to="scrollToHome" smooth={true} duration={500}>
                Home
              </Link>
              <Link className="navItem" to="/do" smooth={true} duration={500}>
                Features
              </Link>
              <Link className="navItem" to="/portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
              <Link className="navItem" to="contact" smooth={true} offset={-70} duration={500}>
                Resume
              </Link>
              <Link className="navItem" to="/price" smooth={true} duration={500}>
                Pricing
              </Link>
              <Link className="navItem" to="scrollToContact" smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
              <Link className="buyNow" to="/price" smooth={true} duration={500}>
                Buy Now
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default TopNav;
