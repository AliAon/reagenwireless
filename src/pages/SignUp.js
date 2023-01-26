import { Fragment } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";

import CreateAccountForm from "../components/AuthForm/CreateAccountForm";

const SignUp = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main  className="container-signup">
        <Container>
        <Row className="section-signup pt--50 pb--50">
           
           <Col lg={3}></Col>
           <Col lg={6}>
             <Card className="pt--50 pb--50 pl--50 pr--50">
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
