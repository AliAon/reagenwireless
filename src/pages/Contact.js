import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import PhoneNo from "../components/Header/TopBarElements/PhoneNo";
import EmailAddress from "../components/Header/TopBarElements/EmailAddress";
import SocialLinks from "../components/Header/TopBarElements/SocialLinks";
import LocationAddress from "../components/Header/TopBarElements/LocationAddress";
import NewsletterForm from "../common/NewsletterForm";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
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
            <Col lg={5}></Col>
          </Row>
          <Row className="mb--50">
            <Col lg={7}>
              <div className="contact-form__card">
                <ContactForm />
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-info__card">
                <h2 className="mb--20 color-white">Contact</h2>
                <Row>
                  <Col lg={9}>
                    <div className="mb--15">
                      <LocationAddress  iconwidth={1} color="white" icon-color="white" />
                    </div>
                    <div className="mb--15">
                      <PhoneNo  iconwidth={1} color="white" icon-color="white" />
                    </div>

                    <div className="mb--15">
                      <EmailAddress  iconwidth={1} icon-color="white" color="white" />
                    </div>
                  </Col>
                  <Col></Col>
                </Row>

                <Row>
                  <Col lg={6}>
                    <div className="mt--20 mb--15">
                      <h5 className="follow-us__text mb--10">Follow Us</h5>
                      <SocialLinks color="#ffffff" />
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </Col>
          </Row>
          <CtaOne/>
          <Brand/>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Contact;
