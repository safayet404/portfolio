import React from 'react';
import '../../assets/css/style.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from '@fortawesome/free-solid-svg-icons'
const PricingCard = ({ data, cardIndex }) => {
    return (
        <div>

            {data[cardIndex].map(item => {


                return (
                    <div className="card  mt-5">
                        <div className="p-5">

                            <Row>
                                <Col lg={8} md={8} sm={8}>
                                    <h5 className="price-card-header">{item.basicTitle}</h5>
                                    <h5 className="price-card-header">{item.standardTitle}</h5>
                                    <h5 className="price-card-header">{item.premiumTitle}</h5>
                                </Col>

                                <Col lg={4} md={4} sm={4}>
                                    <h6 className="price-list">{item.basicPrice}</h6>
                                    <h6 className="price-list">{item.standardPrice}</h6>
                                    <h6 className="price-list">{item.premiumPrice}</h6>
                                </Col>
                            </Row>

                           <Col>
                           <h5 className="price-box-description">{item.basicDescrption}</h5>
                           <h5 className="price-box-description">{item.standardDescrption}</h5>
                           <h5 className="price-box-description">{item.premiumDescrption}</h5>
                           </Col>

                            <Row>
                                <Col className="mt-5">

                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.one}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.two}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.three}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.four}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.five}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.six}</p>



                                </Col>

                                <Col  className="mt-5">
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.seven}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.eight}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.nine}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.ten}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.eleven}</p>
                                    <p className="price-box-item p-1"> <FontAwesomeIcon className='color' icon={faCheck} />{item.twelve}</p>
                                </Col>
                            </Row>

                        </div>
                    </div>
                )


            })}

        </div>
    );
}

export default PricingCard;