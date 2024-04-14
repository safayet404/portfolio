import React from "react";
import "../../assets/css/style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => {
        return (
        
          <Container>
            <Row>
              <Col>
              <div className="educationCard mt-4">
                <div data-aos={item.aos} className="card-body  p-4">
                  <div className="d-flex flex-wrap justify-content-between  items-end">
                    <h3 className="name">
                      {item.degree}{" "}
                    </h3>
                    <span className="projectContent">({item.session})</span>
                  </div>
                  <p className="projectContent">{item.institute} </p>
                  <button className="border sourceCodeGap btn  py-1  bg-slate-950 text-white  rounded-md ">
                                  {item.cgpa}
                    </button>
                </div>
              </div>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Card;
