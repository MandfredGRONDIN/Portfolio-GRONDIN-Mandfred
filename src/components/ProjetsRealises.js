import React, { useState } from "react";
import Projets from "../projets.json";
import Carousel from "./Carousel/Carousel";

export default function ProjetsRealises() {
   const [isExpanded, setIsExpanded] = useState(false);
   const [data, setData] = useState();

   const expanded = () => {
      setData(null);
      setIsExpanded(false);
   };

   return (
      <div className="position-relative">
         <div className="card__projets d-flex m-auto wrap-flex justify-content-evenly">
            {Projets.map((projet, key) => (
               <div
                  key={key}
                  className="card__projet cursor-pointer"
                  onClick={() => {
                     setData(projet);
                     setIsExpanded(true);
                  }}
               >
                  <div>
                     <img src={`${projet.cover}`} alt={projet.title}></img>
                  </div>
                  <span>
                     <p>{projet.description}</p>
                  </span>
               </div>
            ))}
         </div>
         {isExpanded ? <Carousel projet={data} expanded={expanded} /> : null}
      </div>
   );
}
