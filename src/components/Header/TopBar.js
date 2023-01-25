import { Col, Row } from "react-bootstrap"
import EmailAddress from "./TopBarElements/EmailAddress"
import PhoneNo from "./TopBarElements/PhoneNo"
import SocialLinks from "./TopBarElements/SocialLinks"

const TopBar=()=>{
    return(
        <Row className="pt-1 pb-1">
            <Col lg={2}>
                <SocialLinks/>
            </Col>
            <Col lg={6}>
            
            </Col>
            <Col lg={2}>
                <PhoneNo/>
            </Col>
            <Col lg={2}>
                <EmailAddress/>
            </Col>
        </Row>
    )
}
export default TopBar