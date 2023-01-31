import { Col, Row } from "react-bootstrap";

const ProductGridOne = () => {
  return (
    <Row className="gx-4 gy-4">
      <Col lg={4} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/productgridone/image 2.png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              iPhone 11 Pro & Pro Max
            </h4>
            <p className="product-one-card__product-price">$299</p>
          </div>
          <div className="product-one-card__label">
            <p className="product-one-card__label-text">New</p>
          </div>
        </div>
      </Col>
      <Col  lg={4} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/productgridone/image 3.png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              iPhone 11 Pro & Pro Max
            </h4>
            <p className="product-one-card__product-price">$299</p>
          </div>
          <div className="product-one-card__label">
            <p className="product-one-card__label-text">New</p>
          </div>
        </div>
      </Col>
      <Col  lg={4} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/productgridone/image 6.png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              iPhone 11 Pro & Pro Max
            </h4>
            <p className="product-one-card__product-price">$299</p>
          </div>
          <div className="product-one-card__label">
            <p className="product-one-card__label-text">New</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default ProductGridOne;
