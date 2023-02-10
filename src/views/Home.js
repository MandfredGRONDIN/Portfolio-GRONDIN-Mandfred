import React from "react";
import DropDown from "../components/drop/Dropdown";
import Header from "../components/Header";
import "../styles/style.css";

export default function Home() {
   const titleAbout = (
      <div>
         <span className="color-secondary">A</span> PROPOS
      </div>
   );

   const titleCompetences = (
      <div>
         <span className="color-secondary">MES</span> COMPETENCES
      </div>
   );

   const titleProjets = (
      <div>
         <span className="color-secondary">MES</span> PROJETS REALISES
      </div>
   );

   const titleProjet = (
      <div>
         PROJET <span className="color-secondary">EN</span> COURS
      </div>
   );

   const titleContact = (
      <div>
         <span className="color-secondary">ME</span> CONTACTER
      </div>
   );

   return (
      <div>
         <Header />
         <DropDown title={titleAbout} about={true}></DropDown>
         <DropDown title={titleCompetences} competences={true}></DropDown>
         <DropDown title={titleProjets} projetsRealises={true}></DropDown>
         <DropDown title={titleProjet} projetEnCours={true}></DropDown>
         <DropDown title={titleContact} contact={true}></DropDown>
      </div>
   );
}
