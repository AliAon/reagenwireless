import { Col, Row,ProgressBar } from "react-bootstrap";

const ProductGridTwo = () => {
  return (
    <Row>
      <Col lg={3}>
      <div className="fresh-sale-gird__left__item-detail ">
              <h4 className="fresh-sale-gird-counter__title">Up to 30% Off!</h4>
            <img
              src="./images/products/image 8.png" className="fresh-sale-grid-image-main"/>
                <h6 className="fresh-sale-gird-counter__subtitle">Sale End In:</h6>
                <Row className="timer pt--20 pl--10 pr--10 pb--20 gx-2">
              <Col lg={4}>
                <div className="fresh-sale-gird-timer__hours">
                  <h4 className="fresh-sale-gird-timer__hours__num">2</h4>
                  <p className="fresh-sale-gird-timer__hours__text">Hours</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="fresh-sale-gird-timer__minutes">
                  <h4 className="fresh-sale-gird-timer__minutes__num">16</h4>
                  <p className="fresh-sale-gird-timer__minutes__text">Minutes</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="fresh-sale-gird-timer__seconds">
                  <h4 className="fresh-sale-gird-timer__seconds__num">27</h4>
                  <p className="fresh-sale-gird-timer__seconds__text">Seconds</p>
                </div>
              </Col>
            </Row>
          </div>
      </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (2).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Wireless Headphone</h5>
              <div className="product-two-card__product__prices">
                <span className="product-two-card__product__regular-price">$29.99</span>
                <span>-</span>
                <span className="product-two-card__product__sale-price">$19.99</span>
              </div>
            </div>
          </div>
          <div className="product-two-card__label">
            <p className="product-two-card__label-text">25% OFF</p>
          </div>
          <Row>
            <Col lg={6}>
            <p className="text-left product-two-card__available">Available: 10 </p>
            </Col>
            <Col lg={6}>
            <p className="text-end product-two-card__sold">Sold: 5 </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar now={50} color="#3267E3"/>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (3).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Air Purifier</h5>
              <div className="product-two-card__product__prices">
                <span className="product-two-card__product__regular-price">$29.99</span>
                <span>-</span>
                <span className="product-two-card__product__sale-price">$19.99</span>
              </div>
            </div>
          </div>
          <div className="product-two-card__label">
            <p className="product-two-card__label-text">25% OFF</p>
          </div>
          <Row>
            <Col lg={6}>
            <p className="text-left product-two-card__available">Available: 10 </p>
            </Col>
            <Col lg={6}>
            <p className="text-end product-two-card__sold">Sold: 5 </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar now={50} color="#3267E3"/>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder-4.png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Bluetooth Printer</h5>
              <div className="product-two-card__product__prices">
                <span className="product-two-card__product__regular-price">$29.99</span>
                <span>-</span>
                <span className="product-two-card__product__sale-price">$19.99</span>
              </div>
            </div>
          </div>
          <div className="product-two-card__label">
            <p className="product-two-card__label-text">25% OFF</p>
          </div>
          <Row>
            <Col lg={6}>
            <p className="text-left product-two-card__available">Available: 10 </p>
            </Col>
            <Col lg={6}>
            <p className="text-end product-two-card__sold">Sold: 5 </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar now={50} color="#3267E3"/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default ProductGridTwo;
