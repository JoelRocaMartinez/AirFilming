import React from 'react';
import "./styles/Airfilming.css";



function Airfilming() {

  

    return (
        <div id="airfilming">

            <iframe className="videoproperties" frameborder="0" width="100%" height="100%"
              src="https://www.youtube.com/embed/yP4SmqUxTy8?autoplay=1&mute=1">
            </iframe>
         
          
            <div className="socialMedia">
              <div className="autorizados">
                <p><strong>Autorizados por</strong></p>
                <img src="/images/AESA.jpg" alt="aesa"/>
                <img src="/images/Gobierno.jpg" alt="gobierno"/>
              </div>

              {/* <div className="logo">
                  <a href="https://www.instagram.com/airfilmingdrones/?hl=es" target="_blank"><img src="/images/instagram_logo.png" /></a>
              </div>

              <div className="logo">
                  <a href="https://www.youtube.com/channel/UCcsq5rVeMrSL6DDu6YaxRMA" target="_blank"><img src="/images/youtube_logo.jpg" /></a>
              </div> */}

            </div>
        </div>
    )
}

export default Airfilming


