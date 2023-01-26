import { Col, Row, ProgressBar } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const BogGridOne = () => {
  return (
    <Row className="pt--20 pb--20">
      <Col lg={4}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="blog-one-card__blog__title">
                We Offer the Best Quality blog to Our Customers
              </h5>
              <p className="blog-one-card__blog__author-detail">by <span className="blog-one-card__blog__author">Admin,</span> 12 Jan 2022</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="blog-one-card__blog__title">
                JBL Clip Plus Blue
              </h5>
              <p  className="blog-one-card__blog__author-detail">by <span className="blog-one-card__blog__author">Admin,</span> 12 Jan 2022</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="blog-one-card__blog__title">
                Bluetooth Printer
              </h5>
              <p  className="blog-one-card__blog__author-detail">by <span className="blog-one-card__blog__author">Admin,</span> 12 Jan 2022</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default BogGridOne;
