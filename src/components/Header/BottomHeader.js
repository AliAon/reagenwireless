import { Col, Row,Form,InputGroup,Button } from "react-bootstrap"
import { FaCartPlus} from "react-icons/fa"
import MainMenu from "./BootomHeaderElements/MainMenu"
const BottomHeader=()=>{
    return(
        <Row className="justify-content-center pb-2">
          
            <Col lg={6}>              
                  <MainMenu/>
            </Col>
           
        </Row>
       
    )
}
export default BottomHeader