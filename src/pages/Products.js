import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
import ProductGridThree from "../components/Home/ProductGridThree";
import SectionTitle from "../common/SectionTitle";
import HeaderMobile from "../common/HeaderMobile";
import Breadcrumb from "../common/Breadcrumb";
const Products = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile/>
      <main>
        <Container>
        <Breadcrumb  name="Products" previous="Home"/>
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
