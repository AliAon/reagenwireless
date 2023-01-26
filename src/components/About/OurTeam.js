import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import BlogGridOne from "../Home/BogGridOne"
const OurTeam = () => {
  return (
    <Fragment>
      <Row className="OurTeam-section pt--20 pb--20">
        <Row>
          <Col>
            <SectionTitle 
            title="Our Team"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "
             width={4} />
          </Col>
        </Row>
        <Row className="pt--20 pb--20">
      <Col lg={3}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="OurTeam__title">
              Sam Alabama              
              </h5>
              <p  className="OurTeam__team-detail">Team Member</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="OurTeam__title">
              Athen Kamsia
              </h5>
              <p  className="OurTeam__team-detail">Team Member</p>

            </div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="OurTeam__title">
              Jack Lentera
              </h5>
              <p  className="OurTeam__team-detail">Team Member</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="blog-one-card">
          <div className="blog-one-card__image">
            <img src="./images/blogs/placeholder (9).png" />
          </div>
          <div className="blog-one-card__detail">
            <div className="blog-one-card__detail pb--15">
              <h5 className="OurTeam__title">
              Ahmad Pucelle
              </h5>
              <p  className="OurTeam__team-detail">Team Member</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
      </Row>
    </Fragment>
  );
};
export default OurTeam;
