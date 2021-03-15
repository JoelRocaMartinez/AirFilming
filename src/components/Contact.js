import React from 'react';
import "./styles/Contact.css";



function Contact(props) {

    let content = {
        CA: {
            title: "CONTACTE",
            telephone: "Telèfon de contacte",
        },
        ES: {
            title: "CONTACTO",
            telephone: "Teléfono de contacto",
        },
        EN: {
            title: "CONTACT",
            telephone: "Telephone contact",
        },
        DE: {
            title: "KONTAKT",
            telephone: "Telefonischer Kontakt",
        }
    };


    props.language === "CA" ? (content = content.CA)
    : props.language === "ES" ? (content = content.ES)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.DE);

    return (
        <div id="contact">

        <div className="title">
            <h2>{content.title}</h2>
        </div>

        <div className="container">
            <div className="information">
                <div className="info">
                    <h3>Email</h3>
                    <p>info@airfilming.es</p>
                </div>

                <div className="info">
                    <h3>{content.telephone}</h3>
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
            <img className="aesa" src="/images/AESA.jpg" alt="AESA"/>
            <img className="gobierno" src="/images/Gobierno.jpg" alt="Gobierno"/>
        </div>

            

        </div>
    )
}

export default Contact
