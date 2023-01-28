import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
import ProductGridThree from "../components/Home/ProductGridThree";
import SectionTitle from "../common/SectionTitle";
import IconTopBox from "../common/IconTopBox";
import { FaCamera, FaLaptop, FaMobile, FaTv } from "react-icons/fa";

const AllCategories = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <SectionTitle
            align="center"
            title="All Categories"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. "
            width={4}
          />
          <Row>
            <Col lg={3}>
              {/* categories list */}
              <Card>
                <div className="all-categories__categories-list-container">
                    <h4 className="all-categories__title">All Categories</h4>
                  <ul className="all-categories__list">
                    <li><p>Computer & Laptop (25)</p></li>
                    <li><p>Mobile & Tablet (125)</p></li>
                    <li><p>Camera (150)</p></li>
                    <li><p>TV & Smart Box (75)</p></li>
                    <li><p>Home Appliance (75)</p></li>
                    <li><p>Smart Watch (45)</p></li>
                    <li><p>Microphone & Audio (55)</p></li>
                    <li><p>Microphone & Audio (55)</p></li>
                    <li><p>Microphone & Audio (55)</p></li>

                  </ul>
                </div>
              </Card>
            </Col>
            <Col lg={9}>
              <Row className="mb--20">
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaLaptop color="#383838" size={25} />}
                      title="Computer & Laptop"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaMobile color="#383838" size={25} />}
                      title="Mobile & Tablet"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaCamera color="#383838" size={25} />}
                      title="Camera"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaTv color="#383838" size={25} />}
                      title="TV & Smart Box "
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb--20">
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaLaptop color="#383838" size={25} />}
                      title="Computer & Laptop"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaMobile color="#383838" size={25} />}
                      title="Mobile & Tablet"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaCamera color="#383838" size={25} />}
                      title="Camera"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaTv color="#383838" size={25} />}
                      title="TV & Smart Box "
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaLaptop color="#383838" size={25} />}
                      title="Computer & Laptop"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaMobile color="#383838" size={25} />}
                      title="Mobile & Tablet"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaCamera color="#383838" size={25} />}
                      title="Camera"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaTv color="#383838" size={25} />}
                      title="TV & Smart Box "
                    />
                  </div>
                </Col>
              </Row>
              <h5 className="mt--40 all-categories__featured-brand">
                Featured Brand
              </h5>
              <Brand />
              <h5 className="mt--40 all-categories__product-list">
                Product List
              </h5>

              <ProductGridThree />
              <ProductGridThree />
            </Col>
          </Row>

          <div className="mb--40"></div>

          <CtaOne />
          <Brand />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default AllCategories;
