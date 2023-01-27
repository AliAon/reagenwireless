import { Row, Col } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";
import Breadcrumb from "../../common/Breadcrumb";

const ProductDetailsOne = () => {
  return (
    <div className="section__product-details pt--30 pb--30">
      <Row className="gx-5">
        <Col lg={6}>
          <div className="image-gallery">
            <img
              src="./images/products/placeholder (10).png"
              className="image-gallery__img"
            />
            <Row className="mt--20">
              <Col lg={3}>
                <img src="./images/products/arrow.png" />
              </Col>

              <Col lg={2}>
                <img
                  src="./images/products/placeholder (11).png"
                  className="image-gallery__img"
                />
              </Col>

              <Col lg={2}>
                <img
                  src="./images/products/placeholder (11).png"
                  className="image-gallery__img"
                />
              </Col>
              <Col lg={2}>
                <img
                  src="./images/products/placeholder (11).png"
                  className="image-gallery__img"
                />
              </Col>
              <Col lg={3}>
                <img src="./images/products/arrow (1).png" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <Breadcrumb />
          <Row>
            <Col>
              <ul>
                <li>
                  <div className="ratting">
                    <span className="pr-5">5.0</span>
                    <span>
                      <FaStar color="#FFD687" />
                    </span>
                    <span>
                      <FaStar color="#FFD687" />
                    </span>
                    <span>
                      <FaStar color="#FFD687" />
                    </span>
                    <span>
                      <FaStar color="#FFD687" />
                    </span>
                    <span>
                      <FaStar color="#FFD687" />
                    </span>
                  </div>
                </li>
                <li>Review (12)</li>
                <li>|</li>
                <li>Sold 99</li>
              </ul>
            </Col>
            <Col>
              <div>
                <ul>
                  <li>
                    <FaHeart />
                  </li>
                  <li>Add to Wishlist</li>
                </ul>
              </div>
            </Col>
          </Row>
          <h4>Wireless Microphone</h4>
          <ul>
            <li>$29.00</li>
            <li>$99.00</li>
            <li>Save 50%</li>
          </ul>
          <ul>
            <li>Free Delivery</li>
            <li>Available Voucher </li>
            <li>In Stock </li>
          </ul>
          <hr className="line"/>
          <div>
            <h4>Description</h4>
            <p>Wireless Microphone with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetailsOne;
