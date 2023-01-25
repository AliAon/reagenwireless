import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/Featured Products";
import HeroSlider from "../components/Home/HeroSlider";
import NewArrival from "../components/Home/NewArrival";

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
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Home;
