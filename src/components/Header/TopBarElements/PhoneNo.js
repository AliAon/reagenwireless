import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaPhoneAlt} from "react-icons/fa"
const PhoneNo=()=>{
    return(
        <Fragment>
            <Row>
                <Col lg={2}>
                 <FaPhoneAlt size={14} color="#3267E3"/>
                </Col>
                <Col  lg={10}>
                    <span className="phone-text">1-877-724-3266</span>
                </Col>
            </Row>
       </Fragment>
    );
}
export default PhoneNo