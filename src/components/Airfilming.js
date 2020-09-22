import React from 'react';
import {FacebookShareButton, LinkedinShareButton, PinterestShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon} from "react-share";
import "./styles/Airfilming.css";



function Airfilming() {

  

    return (
        <div id="airfilming">

            <iframe className="videoproperties" frameborder="0" height="100%" width="100%"
              src="https://www.youtube.com/embed/yP4SmqUxTy8?autoplay=1&mute=1">
            </iframe>
         
          
            <div className="socialMedia">
              <div className="autorizados">
                <p><strong>Autorizados por</strong></p>
                <img src="/images/AESA.jpg" alt="aesa"/>
                <img src="/images/Gobierno.jpg" alt="gobierno"/>
              </div>

              <div className="logo">
                <FacebookShareButton className="sharing-logo" url={"https:www.facebook.com"}><FacebookIcon size={50} /></FacebookShareButton>
              </div>

              <div className="logo">
                <LinkedinShareButton className="sharing-logo" url={"https:www.LinkedIn.com"}><LinkedinIcon size={50} /></LinkedinShareButton>
              </div>

            </div>
        </div>
    )
}

export default Airfilming


