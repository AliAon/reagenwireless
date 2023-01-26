import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <Row>
            <Col lg={7}>
              <SectionTitle
                title="Contact Us"
                align="left"
                description="Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties."
                width={12}
              />
            </Col>
            <Col lg={5}>
           </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <div className="contact-form__card">
                <ContactForm />
              </div>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Contact;
