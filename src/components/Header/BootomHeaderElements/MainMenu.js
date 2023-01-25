import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
      <li>Home</li>
      <li>About</li>
      <li>Product</li>
      <li>Contact</li>
    </ul>
  );
};
export default MainMenu;
