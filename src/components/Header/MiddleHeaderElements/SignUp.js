import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignUp=()=>{
    return(
        <Link to="/singup">
          <Button className="button__signup">Sign Up</Button>
       </Link>
    )
}
export default SignUp