import {Row, Col } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import ProductGridOne from "./ProductGridOne";

const NewArrival=()=>{
    return(
      <div className="section__new-arrival pt--30 pb--30">
        <SectionTitle/>
        <ProductGridOne/>

      </div>
    )

}
export default NewArrival