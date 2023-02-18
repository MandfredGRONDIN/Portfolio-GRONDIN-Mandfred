import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Github from "../../assets/Github.png";

export default function Carousel({ projet, expanded }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const slides = projet.pictures;
   const information = projet.information;

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
      <div className="carousel d-flex col-flex position-absolute">
         <div className="carousel__img-box w-100 position-relative">
            <i className="fa-solid fa-x cursor-pointer" onClick={expanded}></i>
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
                        className="carousel__img "
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

         <div className="carousel__p">
            <h3 className="text-align-center f-size-24">
               Compétences évaluées
            </h3>
            <div className="carousel__p-footer d-flex justify-content-evenly">
               <div className="carousel__p-info">
                  {information.map((info, key) => (
                     <p key={key}>{info}</p>
                  ))}
               </div>
               <Link
                  to={`${projet.lien}`}
                  target="_blank"
                  className="cursor-pointer"
               >
                  <img src={Github} alt="lien vers mon github"></img>
               </Link>
            </div>
         </div>
      </div>
   );
}
