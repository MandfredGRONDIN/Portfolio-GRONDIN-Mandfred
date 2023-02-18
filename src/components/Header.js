import React from "react";
import Photo from "../assets/Photo.jpg";

export default function Header() {
   return (
      <header className="header d-flex justify-content-center p-40">
         <div className="header__img">
            <div className="header__img--background">
               <img src={Photo} alt="Portrait"></img>
            </div>
         </div>
         <div className="header__p">
            <h1 className="color-secondary">GRONDIN Mandfred</h1>
            <p className="f-size-40">Développeur full stack</p>
            <p className="header__presentation text-align-justify font-style-italic f-size-24">
               Je suis un développeur web full stack passionné et autonome, qui
               aime relever des défis et trouver des solutions créatives pour
               mes clients. Avec mon approche calme et réfléchie, j'aime
               travailler à la fois sur le back-end et le front-end pour créer
               des sites web fonctionnels et esthétiques. Bien que j'apprécie
               travailler en solo, je suis également à l'aise pour collaborer
               avec des équipes, car je crois que les meilleures idées naissent
               de la synergie entre les personnes talentueuses.
            </p>
         </div>
      </header>
   );
}
