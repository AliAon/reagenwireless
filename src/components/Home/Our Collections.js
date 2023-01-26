import { Row, Col } from "react-bootstrap";
import { FaDove } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import ProductGridOne from "./ProductGridOne";

const OurCollections = () => {
  return (
    <div className="section__our-collection pt--30 pb--30">
      <SectionTitle
        title="Our Collections"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt."
         width={4}
         align="center"

      />
      <Row>
        <Col lg={6}>
          <div className="collection">
            <img
              src="./images/collection/placeholder.png"
              className="collection__img"
            />
            <div className="collection__detail">
              <h4 className="collection__detail__title">
                Gaming PC Collection
              </h4>
              <p className="collection__detail__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="collection">
            <img
              src="./images/collection/placeholder (1).png"
              className="collection__img"
            />
            <div className="collection__detail">
              <h4 className="collection__detail__title">Camera Collection</h4>
              <p className="collection__detail__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OurCollections;
