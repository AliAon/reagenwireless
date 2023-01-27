import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateAccountForm=()=>{
    const type = "checkbox";

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='create-account-form__label'>Email</Form.Label>
        <Form.Control type="email" className='create-account-form__email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='create-account-form__label'>Password</Form.Label>
        <Form.Control type="password"  className='create-account-form__password mb--20' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  className='create-account-form__password mb--20' />
      </Form.Group>
      <Button type="submit" className="btn-block mb--20 create-account-form__btn-signup">
        Registor
      </Button>
      
    </Form>
    )

}
export default CreateAccountForm