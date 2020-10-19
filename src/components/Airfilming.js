import React from 'react';
import "./styles/Airfilming.css";



function Airfilming() {

  
    return (
        <div id="airfilming">

            <iframe className="videoproperties" frameborder="0" width="100%" height="100%"
              src="https://www.youtube.com/embed/XqYg5e6mu9o?autoplay=1&loop=1&mute=1">
            </iframe>
         
          
            <div className="socialMedia">
              <div className="autorizados">
                <p><strong>Autorizados por</strong></p>
                <img className="aesa" src="/images/AESA.jpg" alt="aesa"/>
                <img className="gobierno" src="/images/Gobierno.jpg" alt="gobierno"/>
              </div>

              <div className="sharing">
                <p><strong>Encuéntranos en</strong></p>
                <div className="logo">
                    <a href="https://www.instagram.com/airfilmingdrones/?hl=es" target="_blank"><img className="insta" src="/images/instagram_logo.png" alt="instagram logo" /></a>
                </div>

                <div className="logo2">
                    <a href="https://www.youtube.com/channel/UCcsq5rVeMrSL6DDu6YaxRMA" target="_blank"><img className="youtube" src="/images/youtube_logo.jpg" alt="youtube logo"  /></a>
                </div>
              </div>

            </div>
        </div>
    )
}

export default Airfilming


