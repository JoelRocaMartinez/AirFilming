import React from 'react';
import {FacebookShareButton, LinkedinShareButton, PinterestShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon, PinterestIcon} from "react-share";
import "./styles/About.css";



function Airfilming() {

    return (
        <div>
          <h1>AirFilming</h1> 
          <hr></hr>   
          <p>DRONES</p>
            <div>
              <FacebookShareButton className="sharing-logo" url={"https:www.facebook.com"}><FacebookIcon size={30} /></FacebookShareButton>
              <LinkedinShareButton className="sharing-logo" url={"https:www.LinkedIn.com"}><LinkedinIcon size={30} /></LinkedinShareButton>
              <PinterestShareButton className="sharing-logo" url={"https:www.Pinterest.es"}><PinterestIcon size={30} /></PinterestShareButton>  
            </div>
        </div>
    )
}

export default Airfilming


