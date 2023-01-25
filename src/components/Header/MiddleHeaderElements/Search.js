import { Col, Row,Form,InputGroup,Button } from "react-bootstrap"
import { FaSearch} from "react-icons/fa"
const Search=()=>{
    return(
        <div className="seach-input">
            <Form>
                <InputGroup className="mb-3 search-input" >
                <Form.Control
                placeholder="Search here"
                aria-label="Search here"
                aria-describedby="basic-addon2"
                />
                    <Button variant="outline-secondary" className="search__btn"  id="button-addon2">
                        <FaSearch/>
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}
export default Search