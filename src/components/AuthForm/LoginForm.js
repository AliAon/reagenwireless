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
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className='login-form__label'>Email</Form.Label>
        <Form.Control type="email" className='login-form__email mb--20' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='login-form__label '>Password</Form.Label>
        <Form.Control type="password" className='login-form__password mb--20' placeholder="Password" />
      </Form.Group>
      <Button type="submit" className="btn-block mb--20 login-form__btn-signin">
        Login
      </Button>
      <Row className='mb--30'>
        <Col>
        <Form.Check
                  inline
                  label="Remember Me"
                  name="group1"
                  type={type}
                  className="login-form__remember_me"
                  id={`inline-${type}-1`}
                />
        </Col>
        <Col>
        <Link className='login-form__forget-passwrd'>Forgot password?</Link>
        </Col>
      </Row>
      <Row>
        <Col lg={2} md={2}>
        </Col>
        <Col lg={8} className='text-center' md={8}>
           <h4 className='login-form__login-with'>Login With:</h4> <FaFacebook color='#A7A7A7' size={20} className="mr--10"/><FaInstagram size={20} className="mr--10" color='#A7A7A7'/><FaTwitter color='#A7A7A7' size={20} className="mr--10"/>
        </Col>
        <Col lg={2} md={2}>
        </Col>
      </Row>
    </Form>
    )

}
export default LoginForm