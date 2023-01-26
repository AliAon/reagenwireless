import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";

const AboutInfo = () => {
  return (
    <Fragment>
      <Row className="aboutinfo-section pt--20 pb--20">
        <Row>
          <Col>
          <SectionTitle
           title="About Reagan"
           description=" We are here to provide a place special for electronic devices.
              Although we only operated for 2 years but we always provide the
              best service for customers and all the sellers who use our
              website. With the hope that it can help improve a better life
              using various electronic goods with the latest technology, we are
              all ears to any suggestion from our dear customers"
              width={8}
              />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="" />
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
};
export default AboutInfo;
