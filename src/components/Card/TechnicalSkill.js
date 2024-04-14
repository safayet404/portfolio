import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const TechnicalSkill = ({ data, cardIndex }) => {
  return (
    <div>
          <Container className="mt-5">
            <Row>
      {data[cardIndex].map((item) => {
        return (
              <Col data-aos={item.aos} lg={6} md={6} sm={12}>
                <div>
                  <p className="name">{item.tech}</p>
                  <progress
                    className="skillBar"
                    value={item.value}
                    max="100"
                  ></progress>
                </div>
              </Col>
        );
      })}
            </Row>
          </Container>
    </div>
  );
};

export default TechnicalSkill;
