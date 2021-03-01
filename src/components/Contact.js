import React from 'react';
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
                    <h3>Teléfono de contacto</h3>
                    <p>+34 671216775</p>
                </div> 

                <hr></hr>

                <div className="socialMedia">
                    <div className="logo">
                        <a href="https://www.instagram.com/airfilmingdrones/?hl=es" target="_blank"><img className="insta" src="/images/instagram_logo.png" alt="instagram logo" /></a>
                    </div>

                    <div className="logo">
                        <a href="https://www.youtube.com/channel/UCcsq5rVeMrSL6DDu6YaxRMA" target="_blank"><img className="youtube" src="/images/youtube_logo.jpg" alt="youtube logo" /></a>
                    </div>

                    <div className="logo">
                         <a href="https://wa.me/+34671216775" target="_blank"><img className="whatsapp" src="/images/whatsapp_logo.jpg" alt="whatsapp logo" /></a>
                    </div>

                </div>
            </div>

        </div>

        <div className="generalitat">
            <img className="iniciativa" src="/images/Iniciativa_Ocupacio_Juvenil.jpeg" alt="Iniciativa_Juvenil"/>
        </div>

            

        </div>
    )
}

export default Contact
