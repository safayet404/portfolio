import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllPricingCard from './AllPricingCard';

class Pricing extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                      
                        <Col lg={6} md={12} sm={12}>
                        <h6 className="portfolioSubHeader mt-5">Pricing</h6>
                        <h1 className="portfolioHeader"> My Pricing </h1>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                        <AllPricingCard></AllPricingCard>
                        
                         </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Pricing;