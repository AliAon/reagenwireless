import { Col, Row } from "react-bootstrap"
import EmailAddress from "./TopBarElements/EmailAddress"
import PhoneNo from "./TopBarElements/PhoneNo"
import SocialLinks from "./TopBarElements/SocialLinks"

const TopBar=()=>{
    return(
        <Row className="pt-1 pb-1">
            <Col lg={2}>
                <SocialLinks  iconwidth={2} color="#A7A7A7" />
            </Col>
            <Col lg={6}>
            
            </Col>
            <Col lg={2}>
            <PhoneNo color="primary"  iconwidth={2} iconwidthsmall={1}  icon-color="#3267E3" />
            </Col>
            <Col lg={2}>
                <EmailAddress color="primary" iconwidth={2}  iconwidthsmall={1} icon-color="#3267E3" />
            </Col>
        </Row>
    )
}
export default TopBar