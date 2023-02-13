import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

export default function Carousel({ projet, expanded }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [right, setRight] = useState(true);
   const slides = projet.pictures;

   const goToPrevious = () => {
      setRight(false);
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      setRight(true);
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const moreOneImg = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return false;
   };

   return (
      <div className="carousel d-flex col-flex align-items-center position-absolute">
         <i className="fa-solid fa-x cursor-pointer" onClick={expanded}></i>

         <i
            onClick={goToPrevious}
            className="arrow left__arrow position-absolute cursor-pointer fa-solid fa-chevron-left"
         ></i>

         <i
            onClick={goToNext}
            className="fa-solid fa-chevron-right arrow right__arrow position-absolute cursor-pointer"
         ></i>
         {slides.map((slide, index) => {
            return (
               index === currentIndex && (
                  <div
                     className="carousel__img "
                     style={{ backgroundImage: `url(${slide})` }}
                  ></div>
               )
            );
         })}

         <div className="carousel__p">
            <p>{projet.description}</p>
            <Link
               to={`${projet.lien}`}
               target="_blank"
               className="cursor-pointer"
            >
               Lien Github
            </Link>
         </div>
      </div>
   );
}
