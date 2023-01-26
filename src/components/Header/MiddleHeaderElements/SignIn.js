import { Button, Col, Row } from "react-bootstrap"
import {FaRegEnvelope} from "react-icons/fa"
import { Link } from "react-router-dom"
const SignIn=()=>{
    return(
       <Link to="/singin">
        <Button  className="button__sigin">Sign In</Button>
        </Link>
    )
}
export default SignIn