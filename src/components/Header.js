import React from "react";
import Photo from "../assets/Photo.jpg";

export default function Header() {
   return (
      <div className="header d-flex justify-content-center p-40">
         <div className="header__img">
            <div className="header__img--background">
               <img src={Photo} alt="Portrait"></img>
            </div>
         </div>
         <div className="header__p">
            <h1 className="color-secondary">GRONDIN Mandfred</h1>
            <p className="f-size-40">Développeur full stack</p>
            <p className="header__presentation text-align-justify font-style-italic f-size-24">
               Je suis un développeur web passionné, autant attiré par le
               front-end que le back-end. J’adore retranscrire une maquette en
               code pour le front, et gérer les API rest pour le back. Créer une
               application entièrement avec React avec des petites animations
               CSS.
            </p>
         </div>
      </div>
   );
}
