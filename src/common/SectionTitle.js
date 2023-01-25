import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SectionTitle = () => {
  return (
    <Fragment>
      <Row className="justify-content-center pt--20 pb--20">
        <Col lg={4}>
          <h3 className="section__title">New Arrival</h3>
          <p className="section__description text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};
export default SectionTitle;
