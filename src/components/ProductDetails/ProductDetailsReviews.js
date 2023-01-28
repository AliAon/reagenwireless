import { Row, Col, Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaStar } from "react-icons/fa";
const ProductDetailsReviews = () => {
  return (
    <div className="section__product-review-details pt--30 pb--30 mb--40">
      <Row className="gx-5">
        <Col lg={7}>
          <h4 className="product-details__reviews-count-title">
            Reviews (200)
          </h4>
          <div className="reviews-list mt--40">
            <div className="reviews-list-item mb--40">
              <Row>
                <Col lg={1}>
                  <div className="product-details__reviews-list__author-image">
                    <img  className="product-details__reviews-list__author-image__img"src="./images/products/placeholder (12).png" />
                  </div>
                </Col>
                <Col lg={11}>
                  <h4 className="product-details__reviews-list__author-name">Vanille</h4>
                  <Row>
                    <Col lg={3}>
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
                    </Col>
                    <Col>
                      <span className="product-details__reviews-list__review-date">1 Month Ago</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            </div>
            <div className="reviews-list-item  mb--40">
              <Row>
                <Col lg={1}>
                  <div className="product-details__reviews-list__author-image">
                    <img  className="product-details__reviews-list__author-image__img"src="./images/products/placeholder (12).png" />
                  </div>
                </Col>
                <Col lg={11}>
                  <h4 className="product-details__reviews-list__author-name">Vanille</h4>
                  <Row>
                    <Col lg={3}>
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
                    </Col>
                    <Col>
                      <span className="product-details__reviews-list__review-date">1 Month Ago</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            </div>

            <div className="reviews-list-item  mb--40">
              <Row>
                <Col lg={1}>
                  <div className="product-details__reviews-list__author-image">
                    <img  className="product-details__reviews-list__author-image__img"src="./images/products/placeholder (12).png" />
                  </div>
                </Col>
                <Col lg={11}>
                  <h4 className="product-details__reviews-list__author-name">Vanille</h4>
                  <Row>
                    <Col lg={3}>
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
                    </Col>
                    <Col>
                      <span className="product-details__reviews-list__review-date">1 Month Ago</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <h4 className="product-details__add-your-review">Add Your Review</h4>
          <p className="product-details__add-your-text mb--30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.{" "}
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="product-details__review-form__label">
                Name
              </Form.Label>
              <Form.Control type="text" className="contact-form__form-input" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="product-details__review-form__label">
                Email
              </Form.Label>
              <Form.Control type="email" className="contact-form__form-input" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Label className="product-details__review-form__label">
              Review
            </Form.Label>

            <FloatingLabel
              controlId="floatingTextarea2"
              label=""
              className="mb-4"
            >
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: "100px" }}
                className="contact-form__form-input"
              />
            </FloatingLabel>
            <div className="ratting mb--40">
              <span className="pr--5">5.0</span>
              <span>
                <FaStar color="#FFD687" size={20} />
              </span>
              <span>
                <FaStar color="#FFD687" size={20} />
              </span>
              <span>
                <FaStar color="#FFD687" size={20} />
              </span>
              <span>
                <FaStar color="#FFD687" size={20} />
              </span>
              <span>
                <FaStar color="#FFD687" size={20} />
              </span>
            </div>
            <Button type="submit" className="product-details__review-form__btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetailsReviews;
