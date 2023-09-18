import Skills from "./skills/Skills";

export default function Competences() {
   return (
      <div className="competences d-flex wrap-flex justify-content-center">
         <div className="competence d-flex align-items-center col-flex">
            <p>HTML5 <i className="fa-brands fa-html5 icone__competence"></i> / CSS3 <i className="fa-brands fa-css3-alt icone__competence"></i></p>
            <Skills labels={["HTML5 / CSS3"]} data={[80, 20]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>PHP <i className="fa-brands fa-php icone__competence"></i></p>
            <Skills labels={["PHP"]} data={[75, 25]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Symfony <i className="fa-brands fa-symfony icone__competence"></i></p>
            <Skills labels={["Symfony"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>Javascript <i className="fa-brands fa-js icone__competence"></i></p>
            <Skills labels={["Javascript"]} data={[80, 20]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>ReactJs <i className="fa-brands fa-react icone__competence"></i></p>
            <Skills labels={["React"]} data={[70, 30]} />
         </div>
         <div className="competence d-flex align-items-center col-flex">
            <p>VueJs <i className="fa-brands fa-vuejs icone__competence"></i></p>
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
            <p>Figma <i className="fa-brands fa-figma icone__competence"></i></p>
            <Skills labels={["Figma"]} data={[70, 30]} />
         </div>
      </div>
   );
}
