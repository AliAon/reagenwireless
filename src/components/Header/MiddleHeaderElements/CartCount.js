import { Col, Row,Form,InputGroup,Button } from "react-bootstrap"
import { FaCartPlus} from "react-icons/fa"
const CartCount=()=>{
    return(
        <div className="cart-count text-end">
            <FaCartPlus size={20} />
            <span className="cart-count__num">
                21
            </span>
        </div>
    )
}
export default CartCount