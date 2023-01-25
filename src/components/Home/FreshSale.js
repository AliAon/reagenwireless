import { Row, Col } from "react-bootstrap";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaCircle,
} from "react-icons/fa";
import ProductGridTwo from "./ProductGridTwo";
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
      <ProductGridTwo/>
    
    </div>
  );
};
export default FreshSale;
