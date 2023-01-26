import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialLinks from '../Header/TopBarElements/SocialLinks';

const LoginForm=()=>{
    const type = "checkbox";

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button type="submit" className="btn-block">
        Login
      </Button>
      <Row>
        <Col>
        <Form.Check
                  inline
                  label="Remember Me"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
        </Col>
        <Col>
        <Link className='forget-passwrd'>Forgot password?</Link>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
           Login With: <FaFacebook/><FaInstagram/><FaTwitter/>
        </Col>
      </Row>
    </Form>
    )

}
export default LoginForm