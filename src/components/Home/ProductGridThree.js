import { Col, Row,ProgressBar } from "react-bootstrap";
import {FaStar} from "react-icons/fa"
const ProductGridThree = () => {
  return (
    <Row className="pt--20 pb--20 gy-4">
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (5).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Smart Mop Robot</h5>
              <div className="product-two-card__product__prices">
                <p className="product-two-card__product-price">$299</p>
                <div className="ratting">
                <span className="pr-5">5.0</span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
              </div>
              <button className="product-two-card__product__add-to-cart">Add To Cart</button>

              </div>
            </div>
          </div>
          
         
         
        </div>
           </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (6).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Headphones (Blue)</h5>
              <div className="product-two-card__product__prices">
              <p className="product-two-card__product-price">$299</p>
              <div className="ratting">
                <span className="pr-5">5.0</span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
              </div>
              <button className="product-two-card__product__add-to-cart">Add To Cart</button>
            </div>
            </div>
          </div>
          
         
         
        </div>
      </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (7).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">JBL Clip Plus Blue</h5>
              <div className="product-two-card__product__prices">
              <p className="product-two-card__product-price">$299</p>
              <div className="ratting">
                <span className="pr-5">5.0</span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
              </div>
              <button className="product-two-card__product__add-to-cart">Add To Cart</button>
              </div>
            </div>
          </div>
          
         
         
        </div>
      </Col>
      <Col lg={3}>
      <div className="product-two-card">
          <div className="product-two-card__image">
            <img src="./images/products/placeholder (8).png" />
          </div>
          <div className="product-two-card__detail">
          <div className="featured-product__detail pb--15">
              <h5 className="product-two-card__product__title">Bluetooth Printer</h5>
              <div className="product-two-card__product__prices">
              <p className="product-two-card__product-price">$299</p>
              <div className="ratting">
                <span className="pr-5">5.0</span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
                <span><FaStar color="#FFD687"/></span>
              </div>
              <button className="product-two-card__product__add-to-cart">Add To Cart</button>

              </div>
            </div>
          </div>
          
         
         
        </div>
      </Col>
    </Row>
  );
};
export default ProductGridThree;
