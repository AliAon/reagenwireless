import { Fragment } from "react";
import { Col, Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import LoginForm from "../components/AuthForm/LoginForm";
import {Card ,Row} from "react-bootstrap";
import Logo from "../components/Header/MiddleHeaderElements/Logo";

const SignIn = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main  className="container-signup">
        <Container>
          <Row className="section-signin pt--30 pb--30 align-items-center">
            <Row  className="mb--20">
              <Col className="text-center ">
                <Logo/>
              </Col>
            </Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Card className="pt--35 pb--35 pl--50 pr--50 signup__card">
                <h4 className="login-form__title">Login</h4>
                <p  className="login-form__description">Already have an account? Please, login!</p>
                <Card.Body>
                  <LoginForm />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}></Col>
           
          </Row>
        </Container>
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};
export default SignIn;
