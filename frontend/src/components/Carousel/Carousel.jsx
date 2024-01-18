/* eslint-disable no-nested-ternary */
import AliceCarousel from "react-alice-carousel";
import React, { useState } from "react";
import "./carousel.scss";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemTexts = [
    {
      title: "Soldes d'hiver",
      description: "Jusqu'à 30% de réduction !",
      buttonText: "J'en profite",
    },
    {
      title: "Men Expert",
      description: "Découvrez nos Best-Sellers",
      buttonText: "Je découvre",
    },
    {
      title: "Infaillible Mat Résistance",
      description: "Des couleurs mates sans transfert",
      buttonText: "Je découvre",
    },
    {
      title: "Dream Long",
      description: "La routine de soin dédiéeaux problèmes des cheveux longs.",
      buttonText: "Je découvre",
    },
    {
      title: "Compose ta box",
      description: "Reçois tes produits favoris tous les mois !",
      buttonText: "Je découvre",
    },
  ];

  const handleSlideChange = (e) => {
    const currentIndex = e.item;
    setCurrentSlide(currentIndex);
  };

  return (
    <main className="carousel-container">
      <AliceCarousel
        autoPlay
        autoPlayInterval={7000}
        infinite
        autoPlayControls
        onSlideChanged={handleSlideChange}
        keyboardNavigation="true"
      >
        <img
          src="./src/assets/images/banniere1.jpg"
          className="carousel__image"
          alt=""
        />
        <img
          src="./src/assets/images/banniere5.jpg"
          className="carousel__image"
          alt=""
        />
        <img
          src="./src/assets/images/banniere3.jpg"
          className="carousel__image"
          alt=""
        />
        <img
          src="./src/assets/images/banniere4.jpg"
          className="carousel__image"
          alt=""
        />
        <img
          src="./src/assets/images/banniere6.png"
          className="carousel__image"
          alt=""
        />
      </AliceCarousel>
      <article className="carousel__item">
        <h2 className="carousel__item__title">
          {currentSlide === 5
            ? itemTexts[0].title
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].title
              : itemTexts[currentSlide].title}
        </h2>
        <p className="carousel__item__description">
          {currentSlide === 5
            ? itemTexts[0].description
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].description
              : itemTexts[currentSlide].description}
        </p>
        <button type="button" className="carousel__item__button">
          {currentSlide === 5
            ? itemTexts[0].buttonText
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].buttonText
              : itemTexts[currentSlide].buttonText}
        </button>
      </article>

      <article className="hometext-container">
        <p className="hometext">HELLO</p>
      </article>
    </main>
  );
}

export default Carousel;
