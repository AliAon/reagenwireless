import { Fragment } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Logo from "../components/Header/MiddleHeaderElements/Logo";
import CreateAccountForm from "../components/AuthForm/CreateAccountForm";

const SignUp = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main  className="container-signup">
        <Container>
        <Row className="section-signup pt--30 pb--30 align-items-center">
        <Row  className="mb--20">
              <Col className="text-center ">
                <Logo/>
              </Col>
            </Row>
           <Col lg={3}></Col>
           <Col lg={6}>
             <Card className="pt--35 pb--35 pl--50 pr--50 signup__card">
               <h4 className="login-form__title">Create Account</h4>
               <p  className="login-form__description">Don't have an account yet? Register here!</p>
               <Card.Body>
                 <CreateAccountForm />
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
export default SignUp;
