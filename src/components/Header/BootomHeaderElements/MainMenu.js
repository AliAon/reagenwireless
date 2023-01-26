import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
      <li><Link to="/" className="primary-nav-link__a">Home</Link></li>
      <li><Link to="/about" className="primary-nav-link__a">About</Link></li>
      <li>Product</li>
      <li><Link to="/contact" className="primary-nav-link__a">Contact</Link></li>
    </ul>
  );
};
export default MainMenu;
