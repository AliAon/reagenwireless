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
import TopRatedProduct from "../components/Home/TopRatedProduct";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <HeroSlider />
        <Container>
          <Categories />
          <NewArrival />
          <FeaturedProducts/>
          <OurCollections/>
          <FreshSale/>
          <TopRatedProduct/>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
