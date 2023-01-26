import { Row, Col } from "react-bootstrap";
import { FaDove } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import ProductGridOne from "./ProductGridOne";

const FeaturedProducts = () => {
  return (
    <div className="section__featured-product pt--30 pb--30">
      <SectionTitle
        title="Featured Products"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt."
         width={4}
         align="center"

      />
      <Row>
        <Col lg={6}>
          <div className="featured-product__left">
            <div className="featured-product__detail pb--20">
              <h5 className="featured-product__title">Wireless Microphone</h5>
              <div className="featured-product__prices">
                <span className="featured-product__regular-price">$29.99</span>
                <span>-</span>
                <span className="featured-product__sale-price">$19.99</span>
              </div>
            </div>
            <img
              src="./images/products/image 4.png"
              className="featured-products-image-main"
            />

            <Row className="timer pt--20 pl--30 pr--30 pb--20">
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
        <Col lg={6}>
          <div className="featured-product__top mb--20">
            <Row>
              <Col lg={6}>
                <img
                  src="./images/products/image 5.png"
                  className="featured-product__top-image"
                />
              </Col>
              <Col lg={6}>
                <div className="featured-product-detail">
                  <div className="featured-product__detail pb--20">
                    <h5 className="featured-product__top__label">
                      Limited Offer
                    </h5>
                    <h5 className="featured-product__top__title">
                      Smart Watch New Series
                    </h5>
                    <div className="featured-produc__top__prices">
                      <span className="featured-product__top__regular-price">
                        $29.99
                      </span>
                      <span>-</span>
                      <span className="featured-product__top__sale-price">
                        $19.99
                      </span>
                    </div>
                  </div>
                  <Row className="timer  gx-2">
                    <Col lg={4}>
                      <div className="timer__hours">
                        <h4 className="featured-product__top__timer__hours__num">
                          2
                        </h4>
                        <p className="featured-product__top__timer__hours__text">
                          Hours
                        </p>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="timer__minutes">
                        <h4 className="featured-product__top__timer__minutes__num">
                          16
                        </h4>
                        <p className="featured-product__top__timer__minutes__text">
                          Minutes
                        </p>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="timer__seconds">
                        <h4 className="featured-product__top__timer__seconds__num">
                          27
                        </h4>
                        <p className="featured-product__top__timer__seconds__text">
                          Seconds
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="featured-product__top">
            <Row>
              <Col lg={6}>
                <img
                  src="./images/products/image 7.png"
                  className="featured-product__top-image"
                />
              </Col>
              <Col lg={6}>
                <div className="featured-product-detail">
                  <div className="featured-product__detail pb--20">
                    <h5 className="featured-product__top__label">
                      Limited Offer
                    </h5>
                    <h5 className="featured-product__top__title">
                      JBL Xtreme Portable Wireless Bluetooth Speaker
                    </h5>
                    <div className="featured-produc__top__prices">
                      <span className="featured-product__top__regular-price">
                        $29.99
                      </span>
                      <span>-</span>
                      <span className="featured-product__top__sale-price">
                        $19.99
                      </span>
                    </div>
                  </div>
                  <Row className="timer  gx-2">
                    <Col lg={4}>
                      <div className="timer__hours">
                        <h4 className="featured-product__top__timer__hours__num">
                          2
                        </h4>
                        <p className="featured-product__top__timer__hours__text">
                          Hours
                        </p>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="timer__minutes">
                        <h4 className="featured-product__top__timer__minutes__num">
                          16
                        </h4>
                        <p className="featured-product__top__timer__minutes__text">
                          Minutes
                        </p>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="timer__seconds">
                        <h4 className="featured-product__top__timer__seconds__num">
                          27
                        </h4>
                        <p className="featured-product__top__timer__seconds__text">
                          Seconds
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FeaturedProducts;
