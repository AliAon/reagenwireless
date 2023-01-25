import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaEnvelope} from "react-icons/fa"
const EmailAddress=()=>{
    return(
        <Fragment>
            <Row>
                <Col lg={2}>
                 <FaEnvelope size={15} color="#3267E3"/>
                </Col>
                <Col  lg={10}>
                    <span className="email-text">www.reaganwireless.com</span>
                </Col>
            </Row>
       </Fragment>
    );
}
export default EmailAddress