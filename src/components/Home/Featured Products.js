import { Row, Col } from "react-bootstrap";
import { FaDove } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import ProductGridOne from "./ProductGridOne";

const FeaturedProducts = () => {
  return (
    <div className="section__new-arrival pt--30 pb--30">
      <SectionTitle
        title="Featured Products"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt."
      />
      <Row>
        <Col lg={6}>
          <div className="featured-product__left">
            <div className="featured-product__detail">
              <h5 className="featured-product__title">Wireless Microphone</h5>
              <div className="featured-product__prices">
                <span className="featured-product__regular-price">$29.99</span>
                <span>-</span>
                <span className="featured-product__sale-price">$19.99</span>
              </div>
            </div>
            <img
              src="./images/products/image 4.png"
              className="featured-products-image"
            />
            
            <Row className="timer">
              <Col>
                <div className="timer__hours">
                  <h4 className="timer__hours__num">2</h4>
                  <p className="timer__hours__text">Hours</p>
                </div>
              </Col>
              <Col>
                <div className="timer__minutes">
                  <h4 className="timer__minutes__num">16</h4>
                  <p className="timer__minutes__text">Minutes</p>
                </div>
              </Col>
              <Col>
                <div className="timer__seconds">
                  <h4 className="timer__seconds__num">27</h4>
                  <p className="timer__seconds__text">Seconds</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}></Col>
      </Row>
    </div>
  );
};
export default FeaturedProducts;
