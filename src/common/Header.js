import { Col, Container, Row } from "react-bootstrap"
import BottomHeader from "../components/Header/BottomHeader"
import MiddleHeader from "../components/Header/MiddleHeader"
import TopBar from "../components/Header/TopBar"

const Header=()=>{
    return(
        <header className="desktop-header">
          <Container>
            {/* Top Bar */}
            <TopBar/>
            <hr className="header__line"/>
             {/* Middle Header */}
             <MiddleHeader/>
            {/* Bootom Header */}
            <BottomHeader/>
          </Container>

        </header>
    )

}
export default Header