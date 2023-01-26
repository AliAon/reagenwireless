import { Row, Col } from "react-bootstrap";
import { FaDove } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import Search from "../Header/MiddleHeaderElements/Search";
import NewsletterForm from "../../common/NewsletterForm";
const CtaOne = () => {
  return (
    <div className="section__cta pt--30 pb--30">
      <Row>
        <Col lg={5}>
          <div className="section__cta__news-letter">
            <h3 className="section__cta__news-letter__title">Join our newsletter now!</h3>
            <p className="section__cta__news-letter__description">Register now and get our latest updates and promos.</p>
            <Row>
              <Col lg={8}>
              <NewsletterForm/>
              </Col>
              <Col></Col>
            </Row>
          </div>
         
        </Col>
        <Col lg={7}></Col>
      </Row>
    </div>
  );
};
export default CtaOne;
