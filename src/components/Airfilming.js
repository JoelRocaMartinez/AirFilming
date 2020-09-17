import React from 'react';
import {FacebookShareButton, LinkedinShareButton, PinterestShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon, PinterestIcon} from "react-share";
import "./styles/Airfilming.css";



function Airfilming() {

    return (
        <div id="airfilming">
          <div className="title">
            <h1>AirFilming</h1> 
          </div> 
          <hr></hr>   
            <div className="socialMedia">
              <div className="logo">
                <FacebookShareButton className="sharing-logo" url={"https:www.facebook.com"}><FacebookIcon size={50} /></FacebookShareButton>
              </div>

              <div className="logo">
                <LinkedinShareButton className="sharing-logo" url={"https:www.LinkedIn.com"}><LinkedinIcon size={50} /></LinkedinShareButton>
              </div>

              <div className="logo">
                <PinterestShareButton className="sharing-logo" url={"https:www.Pinterest.es"}><PinterestIcon size={50} /></PinterestShareButton>  
              </div>
            </div>
        </div>
    )
}

export default Airfilming


