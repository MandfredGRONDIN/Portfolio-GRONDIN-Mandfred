import React from "react";

export default function Contact() {
   return (
      <div className="contact d-flex align-items-center col-flex m-auto">
         <div className="d-flex w-50 m-20 text-align-center align-items-center">
            <div className="contact__icone">
               <div>
                  <i className="fa-solid fa-phone"></i>
               </div>
            </div>
            <div className="contact__info">
               <p className="color-secondary">06.95.09.32.23</p>
            </div>
         </div>
         <div className="d-flex w-50 m-20 text-align-center align-items-center">
            <div className="contact__icone">
               <i className="fa-regular fa-envelope"></i>
            </div>
            <a className="contact__info" href={`mailto:mandfred974@hotmail.fr`}>
               <p className="color-secondary">mandfred974@hotmail.fr</p>
            </a>
         </div>
      </div>
   );
}
