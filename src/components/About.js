import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/Linkedin.png";
import Github from "../assets/Github.png";

export default function About() {
   return (
      <div className="about d-flex justify-content-around">
         <div className="infos__perso w-50">
            <p className="text-align-center f-size-24">Infos personnelles</p>
            <div className="d-flex justify-content-evenly">
               <div className="infos__left">
                  <p>
                     <span>Nom :</span> Grondin
                  </p>
                  <p>
                     <span>Age :</span> 28ans
                  </p>
                  <p>
                     <span>Téléphone :</span> 06.95.09.32.23
                  </p>
                  <p>
                     <span>Langues :</span> Français, Créole
                  </p>
               </div>
               <div className="infos__right">
                  <p>
                     <span>Prénom :</span> Mandfred
                  </p>
                  <p>
                     <span>Nationalité :</span> Français
                  </p>
                  <p>
                     <span>Adresse :</span> 30800 Saint-gilles
                  </p>
                  <p>
                     <span>Email :</span> mandfred974@hotmail.fr
                  </p>
               </div>
            </div>
         </div>
         <div className="w-50">
            <p className="text-align-center f-size-24 link__title">Liens</p>
            <div className="d-flex link justify-content-evenly">
               <Link
                  to={"https://www.linkedin.com/in/mandfredgrondin/"}
                  target="_blank"
               >
                  <img src={Linkedin} alt="lien vers mon linkedin"></img>
               </Link>
               <Link to={"https://github.com/MandfredGRONDIN"} target="_blank">
                  <img src={Github} alt="lien vers mon github"></img>
               </Link>
            </div>
         </div>
      </div>
   );
}
