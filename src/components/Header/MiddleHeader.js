import { Col, Row } from "react-bootstrap";
import CartCount from "./MiddleHeaderElements/CartCount";
import EmailEnvelop from "./MiddleHeaderElements/EmailEnvelop";
import Logo from "./MiddleHeaderElements/Logo";
import Search from "./MiddleHeaderElements/Search";
import SignIn from "./MiddleHeaderElements/SignIn";
import SignUp from "./MiddleHeaderElements/SignUp";

const MiddleHeader = () => {
  return (
    <Row className="pt-4 pb-3">
      <Row className=" align-items-center">
        <Col lg={3}>
          <Row className=" align-items-center">
            <Col>
              <Logo />
            </Col>
          </Row>
        </Col>
        <Col lg={5} className="pt-2">
          <Search />
        </Col>
        <Col lg={4}>
          <Row >
            <Col lg={5}>
              <Row className="">
                <Col>
                  <CartCount />
                </Col>
                <Col>
                  <EmailEnvelop />
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
              <Row className="gx-0 ">
                <Col >
                  <SignIn/>
                </Col>
                <Col>
                  <SignUp />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};
export default MiddleHeader;
