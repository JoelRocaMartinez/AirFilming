import React from 'react';
import {FacebookShareButton, LinkedinShareButton, PinterestShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon, PinterestIcon} from "react-share";
import "./styles/Contact.css";



function Contact() {

    return (
        <div id="contact">
         <div className="title">
          <h2>CONTACTO</h2>
        </div>

        <div className="container">
            <div className="information">
                <div className="info">
                    <h3>Email</h3>
                    <p>info@airfilming.es</p>
                </div>

                <div className="info">
                    <h3>Telefono de contacto</h3>
                    <p>+34 671216775</p>
                </div> 

                <div className="socialMedia">
                    <div className="logo">
                        <FacebookShareButton className="sharing-logo" url={"https:www.facebook.com"}><FacebookIcon size={50} /></FacebookShareButton>
                    </div>

                    <div className="logo">
                        <LinkedinShareButton className="sharing-logo" url={"https:www.LinkedIn.com"}><LinkedinIcon size={50} /></LinkedinShareButton>
                    </div>

                </div>
            </div>

        </div>

            

        </div>
    )
}

export default Contact
