import { Row, Col } from "react-bootstrap";
import { FaDove } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import BogGridOne from "./BogGridOne";

const Blog = () => {
  return (
    <div className="section__our-collection pt--30 pb--30">
      <SectionTitle
        title="Blog"
      />
      <BogGridOne/>
    </div>
  );
};
export default Blog;
