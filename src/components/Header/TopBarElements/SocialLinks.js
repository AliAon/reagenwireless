import { Fragment } from "react";
import { Col,Row } from "react-bootstrap";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
const SocialLinks=()=>{
    return(
        <Fragment>
            <Row>
                <Col>
                   <FaFacebook color="#A7A7A7"/>
                </Col>
                <Col>
                   <FaInstagram color="#A7A7A7"/>
                </Col>
                <Col>
                 <FaTwitter color="#A7A7A7"/>
                </Col>
                <Col>
                  <FaLinkedin color="#A7A7A7"/>
                </Col>
            </Row>
        </Fragment>
    );
}
export default SocialLinks