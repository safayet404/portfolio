import React, { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


class Footer extends Component {
    render() {
        return (
            <Fragment>


                <Container className="text-center mt-5">

                    <Row>
                        <Col>
                          
                            <p className="footer-text"> &copy; 2022.All Right Reserved By - Safayet</p>
                        </Col>
                    </Row>

                </Container>


            </Fragment>
        );
    }
}

export default Footer;