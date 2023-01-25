import { Row, Col } from "react-bootstrap";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaCircle,
} from "react-icons/fa";
const FreshSale = () => {
  return (
    <div className="section__fresh-sale pt--30 pb--30">
      <Row>
        <Col lg={6}>
          <h3 className="fresh-sale__title">Flash Sale</h3>
        </Col>
        <Col lg={6}>
          <div className="fresh-sale__slides_dots">
            <span className="mr--5">
              <FaLongArrowAltLeft color="#D0D0D2" />
            </span>
            <span className="mr--5">
              <FaCircle size={8} color="#3267E3" />
            </span>
            <span className="mr--5">
              <FaCircle size={8} color="#D0D0D2" />
            </span>
            <span className="mr--5">
              <FaCircle size={8} color="#D0D0D2" />
            </span>
            <span className="mr--5">
              <FaCircle size={8} color="#D0D0D2" />
            </span>
            <span className="mr--5">
              <FaCircle size={8} color="#D0D0D2" />
            </span>

            <span>
              <FaLongArrowAltRight color="#3267E3" />
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className="fresh-sale-gird__left__item-detail ">
              <h4 className="fresh-sale-gird-counter__title">Up to 30% Off!</h4>
            <img
              src="./images/products/image 8.png" className="fresh-sale-grid-image-main"/>
                <h6 className="fresh-sale-gird-counter__subtitle">Sale End In:</h6>
                <Row className="timer pt--20 pl--30 pr--30 pb--20">
              <Col>
                <div className="fresh-sale-gird-timer__hours">
                  <h4 className="fresh-sale-gird-timer__hours__num">2</h4>
                  <p className="fresh-sale-gird-timer__hours__text">Hours</p>
                </div>
              </Col>
              <Col>
                <div className="fresh-sale-gird-timer__minutes">
                  <h4 className="fresh-sale-gird-timer__minutes__num">16</h4>
                  <p className="fresh-sale-gird-timer__minutes__text">Minutes</p>
                </div>
              </Col>
              <Col>
                <div className="fresh-sale-gird-timer__seconds">
                  <h4 className="fresh-sale-gird-timer__seconds__num">27</h4>
                  <p className="fresh-sale-gird-timer__seconds__text">Seconds</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}></Col>
        <Col lg={4}></Col>
        <Col lg={4}></Col>
      </Row>
    </div>
  );
};
export default FreshSale;
