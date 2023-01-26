import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import IconTopBox from "../../common/IconTopBox";
import SectionTitle from "../../common/SectionTitle";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import {FaTruck ,FaRegCheckCircle} from "react-icons/fa"
import {CiDollar} from "react-icons/ci"

const WhyChoosingUs = () => {
  return (
    <Fragment>
      <Row className="WhyChoosingUs-section pt--20 pb--20">
        <Row>
          <Col>
            <SectionTitle title="Why Choosing Us" width={8} />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <IconTopBox 
            title="54 Brands"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "
            icon={ <AiOutlineSafetyCertificate size={35} color="#3267e3" />}
            />
          </Col>
          <Col lg={3}>
            <IconTopBox 
             title="Fast Delivery"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "
             icon={ <FaTruck size={35} color="#3267e3" />}
            />
          </Col>
          <Col lg={3}>
            <IconTopBox 
             title="COD Service"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "
             icon={ <CiDollar size={35} color="#3267e3" />}
            />
          </Col>
          <Col lg={3}>
            <IconTopBox
             title="100% Original Products"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. "
             icon={ <FaRegCheckCircle size={35} color="#3267e3" />}
            />
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
};
export default WhyChoosingUs;
