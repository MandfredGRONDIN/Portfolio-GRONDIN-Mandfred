import React from "react";
import { useState } from "react";
import Projet from "../projetEnCours.json";

export default function ProjetEnCours() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const slides = Projet[0].lien;

   const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   return (
      <div className="projetEnCour">
         <div className="projetEnCour__carousel position-relative">
            <i
               onClick={goToPrevious}
               className="arrow left__arrow position-absolute cursor-pointer fa-solid fa-chevron-left f-size-40"
            ></i>
            <i
               onClick={goToNext}
               className="fa-solid fa-chevron-right arrow right__arrow position-absolute cursor-pointer f-size-40"
            ></i>
            {slides.map((slide, index) => {
               return (
                  index === currentIndex && (
                     <div
                        className="projetEnCour__carousel-div"
                        style={{ backgroundImage: `url(${slide})` }}
                        key={index}
                     ></div>
                  )
               );
            })}
            <span className="position-absolute">
               {currentIndex + 1}/{slides.length}
            </span>
         </div>
      </div>
   );
}
