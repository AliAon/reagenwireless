import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/Featured Products";
import FreshSale from "../components/Home/FreshSale";
import HeroSlider from "../components/Home/HeroSlider";
import NewArrival from "../components/Home/NewArrival";
import OurCollections from "../components/Home/Our Collections";
import Blog from "../components/Home/Blog";
import TopRatedProduct from "../components/Home/TopRatedProduct";
import CtaOne from "../components/Home/CtaOne";
import Brand from "../common/Brand";
import AboutInfo from "../components/About/AboutInfo";

const About = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <AboutInfo />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default About;
