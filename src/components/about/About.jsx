import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import safayet from "../../assets/images/safayet4.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
    AOS.init();
    return (
        <div id="scrollToAbout">
            <Container>
                <Row>
                    <Col className='topContent' lg={6}>
                        <h3 className='name mb-5'>KNOW ME</h3>
                        <p>
                            I'm  a passionate web developer dedicated to crafting innovative digital experiences that leave a lasting impact. With a keen eye for detail and a drive for excellence, I specialize in creating dynamic websites that not only look stunning but also function flawlessly across all platforms.
                            <br />
                            <br />
                            My journey into the world of web development began with a fascination for technology and a desire to bring creative visions to life. Over the years, I've honed my skills in a variety of programming languages, including HTML, CSS, JavaScript, and more, allowing me to turn ideas into reality with precision and efficiency.
                            <br />
                            <br />
                            What sets me apart is not just my technical expertise, but also my commitment to understanding each client's unique needs and objectives. Whether you're a small business looking to establish an online presence or a large corporation in need of a complex web solution, I'll work closely with you every step of the way to deliver a tailored solution that exceeds your expectations.
                            <br />
                            <br />
                            Beyond coding, I'm deeply passionate about staying up-to-date with the latest trends and technologies in the ever-evolving landscape of web development. This ensures that my clients receive cutting-edge solutions that are both timeless and forward-thinking.
                        </p>
                    </Col>
                    <Col lg={6}>
                       <img className='bigImage' src={safayet} alt="image" />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About