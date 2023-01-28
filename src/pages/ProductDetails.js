import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
import ProductDetailsOne from "../components/ProductDetails/ProductDetailsOne";
import ProductDetailsReviews from "../components/ProductDetails/ProductDetailsReviews";
const ProductDetails = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
           <ProductDetailsOne/>
           <ProductDetailsReviews/>
          <CtaOne/>
          <Brand/>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default ProductDetails;
