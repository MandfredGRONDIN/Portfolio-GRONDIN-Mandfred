import React, { useState } from "react";
import ArrowTop from "../../assets/ArrowTop.png";
import ArrowBot from "../../assets/ArrowBot.png";
import About from "../About";
import Competences from "../Competences";
import Contact from "../Contact";
import ProjetEnCours from "../ProjetEnCours";
import ProjetsRealises from "../ProjetsRealises";

export default function DropDown({
   title,
   props,
   about,
   competences,
   projetsRealises,
   projetEnCours,
   contact,
}) {
   const [isOpen, setIsOpen] = useState(false);
   console.log(props);

   return isOpen ? (
      <div>
         <button
            className="dropdown__button"
            type="button"
            onClick={() => setIsOpen(false)}
         >
            <div>{title}</div>
            <img
               className="background"
               src={ArrowTop}
               alt="flèche vers le haut"
            ></img>
         </button>
         {about ? <About /> : null}
         {competences ? <Competences /> : null}
         {projetsRealises ? <ProjetsRealises /> : null}
         {projetEnCours ? <ProjetEnCours /> : null}
         {contact ? <Contact /> : null}
      </div>
   ) : (
      <div>
         <button
            className="dropdown__button"
            type="button"
            onClick={() => setIsOpen(true)}
         >
            <div>{title}</div>
            <img
               className="background"
               src={ArrowBot}
               alt="flèche vers le bas"
            />
         </button>
      </div>
   );
}
