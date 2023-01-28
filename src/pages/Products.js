import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
import ProductGridThree from "../components/Home/ProductGridThree";
import SectionTitle from "../common/SectionTitle";

const Products = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <SectionTitle
          align="center"
          title="Products"
          />
          <ProductGridThree/>
          <ProductGridThree/>
          <div className="mb--40">

          </div>

          <CtaOne/>
          <Brand/>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Products;
