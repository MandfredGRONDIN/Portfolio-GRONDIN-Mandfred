import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

export default function Carousel({ projet, expanded }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [right, setRight] = useState(true);
   const slides = projet.pictures;
   console.log(projet.lien);
   return (
      <div className="carousel d-flex col-flex align-items-center position-absolute">
         <i className="fa-solid fa-x" onClick={expanded}></i>
         <div
            className="carousel__img "
            style={{ backgroundImage: `url(${slides[0]})` }}
         ></div>
         <div className="carousel__p">
            <p>{projet.description}</p>
            <Link to={`${projet.lien}`} target="_blank">
               Lien Github
            </Link>
         </div>
      </div>
   );
}
