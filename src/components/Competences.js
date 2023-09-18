import Skills from "./skills/Skills";

export default function Competences() {
   return (
      <div className="competences d-flex wrap-flex justify-content-center">
         <div className="competence d-flex align-items-center col-flex">
            <p>HTML5 / CSS3</p>
            <Skills labels={["HTML5 / CSS3"]} data={[80, 20]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>PHP</p>
            <Skills labels={["PHP"]} data={[75, 25]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Symfony</p>
            <Skills labels={["Symfony"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Javascript</p>
            <Skills labels={["Javascript"]} data={[80, 20]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>ReactJs</p>
            <Skills labels={["React"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>VueJs</p>
            <Skills labels={["VueJs"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Express</p>
            <Skills labels={["Express"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Postman</p>
            <Skills labels={["Postman"]} data={[60, 40]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Figma</p>
            <Skills labels={["Figma"]} data={[70, 30]} />
         </div>
      </div>
   );
}
