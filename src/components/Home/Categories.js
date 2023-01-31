import { Col, Container, Row } from "react-bootstrap";
import {FaLaptop,FaMobile,FaCamera,FaTv,FaAirFreshener,FaSpeakerDeck,FaGamepad} from "react-icons/fa"

function Categories() {
  return (
    <div className="categories">
      <h2 className="category-title mb--30">Category</h2>
        <Row className="gx-2 gy-2 categories__grid">
          <Col lg={2} xs={6}>
            <div className="category-item">
            <Row className="gx-2 align-items-baseline">
              <Col lg={2}>
                <FaLaptop/>
              </Col>
              <Col lg={10}>
                <p className="category-text">Computer & Laptop</p>
              </Col>
            </Row>
           </div>
          </Col>
          <Col lg={2} xs={6}>
          <div className="category-item">
            <Row className="gx-1">
            <Col lg={2}>
                <FaMobile/>
              </Col>
              <Col lg={10}>
                <p className="category-text">Mobile & Tablet</p>
              </Col>
            </Row>
           </div>
          </Col>
          <Col lg={2} xs={6}>
          <div className="category-item">
            <Row  className="gx-1">
            <Col lg={2}>
                <FaCamera/>
              </Col>
              <Col lg={10}>
                <p className="category-text">Camera</p>
              </Col>
            </Row>
           </div>
          </Col>
          <Col lg={2} xs={6}>
          <div className="category-item">
            <Row  className="gx-1">
              <Col lg={2}>
                <FaTv/>
              </Col>
              <Col lg={10}>
                <p className="category-text">TV & Smart Box</p>
              </Col>
            </Row>
           </div>
          </Col>   
          <Col lg={2} xs={6}>
          <div className="category-item">
            <Row  className="gx-1">
              <Col lg={2}>
                <FaAirFreshener/>
              </Col>
              <Col lg={10}>
                <p className="category-text">Home Appliance</p>
              </Col>
            </Row>
           </div>
          </Col>
          <Col lg={2} xs={6}>
          <div className="category-item">
            <Row  className="gx-1">
              <Col lg={2}>
                <FaSpeakerDeck/>
              </Col>
              <Col lg={10}>
                <p className="category-text">Accessories</p>
              </Col>
            </Row>
           </div>
          </Col>
    
      
          
         
     
        </Row>
     
    </div>
  );
}

export default Categories;
