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
import Form from "react-bootstrap/Form";

import {
  FaAirFreshener,
  FaCamera,
  FaLaptop,
  FaMobile,
  FaMicrophone,
  FaTv,
  FaGamepad,
  FaPrint,
  FaStar,
} from "react-icons/fa";
import { IoMdWatch } from "react-icons/io";
import { BsHeadphones, BsSpeaker } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";
const AllCategories = () => {
  const type = "checkbox";
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
                    <li>
                      <p>Computer & Laptop (25)</p>
                    </li>
                    <li>
                      <p>Mobile & Tablet (125)</p>
                    </li>
                    <li>
                      <p>Camera (150)</p>
                    </li>
                    <li>
                      <p>TV & Smart Box (75)</p>
                    </li>
                    <li>
                      <p>Home Appliance (75)</p>
                    </li>
                    <li>
                      <p>Smart Watch (45)</p>
                    </li>
                    <li>
                      <p>Microphone & Audio (55)</p>
                    </li>
                    <li>
                      <p>Gaming (55)</p>
                    </li>
                    <li>
                      <p>Printer (55)</p>
                    </li>
                  </ul>
                  <hr className="line" />
                  <div className="price-filter">
                    <h4 className="all-categories__title">Filter by Price</h4>
                    <>
                      <Form.Range className="range-input" />
                      <Form.Label className="price-filter__label">
                        Price: <strong className="all-categories__title">$100 - $250</strong>{" "}
                      </Form.Label>
                    </>
                  </div>
                  <hr className="line" />
                  <div className="location-filter">
                    <h4 className="all-categories__title">
                      Filter by Location
                    </h4>
                    <Form className="filter-by-location__checkbox">
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Jakarta" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"  label="Yogyakarta" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Bandung" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Surabaya" />
                      </Form.Group>
                    </Form>
                  </div>
                  <hr className="line" />
                  <div className="location-filter">
                    <h4 className="all-categories__title">Filter by Rating</h4>
                    <Form className="filter-by-location__checkbox">
                      <Form.Group
                        className="mb-3 "
                        controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Jakarta" />
                      </Form.Group>
                  
                 
                    </Form>
                  </div>
                  <hr className="line" />
                  <h4 className="all-categories__title">Filter by Brand</h4>
                  <h4 className="all-categories__title">Filter by Promotion</h4>
                  <h4 className="all-categories__title">Filter by Payment</h4>
                  <h4 className="all-categories__title">Filter by Shipment</h4>
                  <div className="filter-by-location__checkbox__btn-container text-center">

                  <button className="filter-by-location__checkbox__btn ">Filter</button>
                  <h4 className="all-categories__title reset_filter text-center">Reset Filter</h4>

                  </div>

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
                      icon={<FaAirFreshener color="#383838" size={25} />}
                      title="Home Appliance"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<IoMdWatch color="#383838" size={25} />}
                      title="Smart Watch"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaMicrophone color="#383838" size={25} />}
                      title="Microphone & Audio"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaGamepad color="#383838" size={25} />}
                      title="Gaming"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<FaPrint color="#383838" size={25} />}
                      title="Printer"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<BsHeadphones color="#383838" size={25} />}
                      title="Accessories"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="icon-box">
                    <IconTopBox
                      icon={<BsSpeaker color="#383838" size={25} />}
                      title="Others"
                    />
                  </div>
                </Col>
                <Col lg={3}></Col>
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
