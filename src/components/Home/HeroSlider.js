import Carousel from "react-bootstrap/Carousel";

function HeroSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slides/background.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slide-content">
            <h3 className="hero__title">Better Devices for Better Life</h3>
            <p className="hero__subtile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slides/background-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="text-left">
          <div className="slide-content">
            <h2 className="hero__title">Better Devices for Better Life</h2>
            <p className="hero__subtile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/slides/background-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="slide-content">
            <h2 className="hero__title">Better Devices for Better Life</h2>
            <p className="hero__subtile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
