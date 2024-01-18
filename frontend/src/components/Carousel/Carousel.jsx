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
      buttonText: "J'EN PROFITE",
    },
    {
      title: "Infaillible Mat Résistance",
      description: "Des couleurs mates sans transfert",
      buttonText: "JE DECOUVRE",
    },
    {
      title: "Dream Long",
      description: "La routine de soin dédiéeaux problèmes des cheveux longs.",
      buttonText: "JE DECOUVRE",
    },
    {
      title: "Men Expert",
      description: "Découvrez nos Best-Sellers",
      buttonText: "JE DECOUVRE",
    },
    {
      title: "Compose ta box",
      description: "Reçois tes produits favoris tous les mois !",
      buttonText: "JE DECOUVRE",
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
        autoPlayInterval={4000}
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
          src="./src/assets/images/banniere5.jpg"
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
        <h2
          className={
            currentSlide === 3
              ? "carousel__item__title carousel__item__title--white"
              : "carousel__item__title"
          }
        >
          {currentSlide === 5
            ? itemTexts[0].title
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].title
              : itemTexts[currentSlide].title}
        </h2>
        <p
          className={
            currentSlide === 3
              ? "carousel__item__description carousel__item__description--white"
              : "carousel__item__description"
          }
        >
          {currentSlide === 5
            ? itemTexts[0].description
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].description
              : itemTexts[currentSlide].description}
        </p>
        <button
          type="button"
          className={
            currentSlide === 3
              ? "carousel__item__button carousel__item__button--white"
              : "carousel__item__button"
          }
        >
          {currentSlide === 5
            ? itemTexts[0].buttonText
            : currentSlide === -1
              ? itemTexts[itemTexts.length - 1].buttonText
              : itemTexts[currentSlide].buttonText}
        </button>
      </article>
    </main>
  );
}

export default Carousel;
