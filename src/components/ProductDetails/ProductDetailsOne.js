import { Row, Col, Form } from "react-bootstrap";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import Breadcrumb from "../../common/Breadcrumb";
import { FaTruck, FaMoneyBill } from "react-icons/fa";
import { VscPackage } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
const ProductDetailsOne = () => {
  return (
    <div className="section__product-details pt--30 pb--30">
      <Row className="gx-5">
        <Col lg={7}>
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
        <Col lg={5}>
          <Breadcrumb />
          <Row>
            <Col lg={6}>
              <ul className="product___reviews-info-list">
                <li>
                  <div className="ratting">
                    <span className="pr--5">5.0</span>
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
                <li>
                  <p className="product-details__review-count">Review (12)</p>
                </li>
                <li>
                  <p className="product-details__bar">|</p>
                </li>
                <li>
                  <p className="product-details__sold">Sold 99</p>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="product-details__wish-container">
                <ul className="product-details__wish-heart">
                  <li className="pr--10">
                    <FaHeart color="#3267E3" />
                  </li>
                  <li className="product-details__add-to-wishlist">
                    Add to Wishlist
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <h4 className="product-details__product-title">
            Wireless Microphone
          </h4>
          <Row className="mb--40">
            <Col lg={6}>
              <ul className="product-details__prices">
                <li>
                  <h4 className="product-details__regular-price">$29.00</h4>
                </li>
                <li>
                  <h6 className="product-details__sale-price">$99.00</h6>
                </li>
                <li>
                  <button className="product-details__discount-price">
                    Save 50%
                  </button>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <ul className="product-details__delivery-info">
                <li>
                  <span className="pr--5">
                    <FaTruck size={18} color="#3267E3" />
                  </span>
                  <span className="product-details__delivery-free-delivery">
                    Free Delivery
                  </span>
                </li>
                <li>
                  <span className="pr--5">
                    <FaMoneyBill size={18} color="#3267E3" />
                  </span>
                  <span className="product-details__delivery-free-delivery">
                    Available Voucher
                  </span>{" "}
                </li>
                <li>
                  <span className="pr--5">
                    <VscPackage size={18} color="#3267E3" />
                  </span>
                  <span className="product-details__delivery-free-delivery">
                    In Stock{" "}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>

          <hr className="line" />
          <div>
            <p className="product-details__description">Description</p>
            <p className="product-details__description-text">
              Wireless Microphone with the new style, shockproof, clear voice
              reception that suitable for recording, online meeting, vlogging,
              and calling. Free casing with high-quality zipper.
            </p>
          </div>
          <Row>
            <Col lg={2}>
              <label>Quantity</label>
            </Col>
            <Col>
              <Form>
                <InputGroup className="mb-3">
                  <Row>
                    <Col lg={6}>
                      <Button variant="outline-secondary" id="button-addon1">
                        <FaMinus />
                      </Button>
                      <Form.Control
                        aria-label=""
                        aria-describedby="basic-addon2"
                        type="text"
                        step="1"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        <FaPlus />
                      </Button>
                    </Col>
                    <Col lg={2}>
                      <Button>Chat</Button>
                    </Col>
                    <Col lg={2}>
                      <Button>Add To Cart</Button>
                    </Col>
                  </Row>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetailsOne;
