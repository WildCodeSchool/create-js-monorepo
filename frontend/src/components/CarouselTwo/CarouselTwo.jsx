import AliceCarousel from "react-alice-carousel";
import "./carouselTwo.scss";

function CarouselTwo() {
  return (
    <main className="carousel-container">
      <AliceCarousel
        autoPlay
        autoPlayInterval={4000}
        infinite
        autoPlayControls
        keyboardNavigation="true"
      >
        <img
          src="./src/assets/images/article1.png"
          className="carousel__imageTwo"
          alt=""
        />
        <img
          src="./src/assets/images/article2.png"
          className="carousel__imageTwo"
          alt=""
        />
        <img
          src="./src/assets/images/article3.png"
          className="carousel__imageTwo"
          alt=""
        />
      </AliceCarousel>
    </main>
  );
}
export default CarouselTwo;
