import React from 'react'
import {Link} from 'react-scroll'
import "./styles/MyNavBar2.css";



function MyNavBar2(props) {

    let content = {
        CA: {
            services: "SERVEIS",
            drones: "LA NOSTRA FLOTA",
            about: "QUI SOM",
            contact: "CONTACTE"
        },
        ES: {
            services: "SERVICIOS",
            drones: "NUESTRA FLOTA",
            about: "QUIÉNES SOMOS",
            contact: "CONTACTO"
        },
        EN: {
            services: "SERVICES",
            drones: "OUR FLEET",
            about: "ABOUT US",
            contact: "CONTACT"
        },
        DE: {
            services: "LEISTUNGEN",
            drones: "UNSERE FLOTTE",
            about: "WER WIR SIND",
            contact: "KONTAKT"
        }
    };

    props.language === "CA" ? (content = content.CA)
    : props.language === "DE" ? (content = content.DE)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.ES);

    return (
        <div>
            <nav className="navbar-container container">
                <Link to="airfilming" className="home-link">
                    AIRFILMING
                </Link>
                <button type="button" className="navbar-toggle" aria-label="Open navigation menu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-menu">
                    <ul className="navbar-links">
                        <li className="navbar-item"><Link className="navbar-link" to="services">{content.services}</Link></li>
                        <li className="navbar-item"><Link className="navbar-link" to="drones">{content.drones}</Link></li>
                        <li className="navbar-item"><Link className="navbar-link" to="about">{content.about}</Link></li>
                        <li className="navbar-item"><Link className="navbar-link" to="contact">{content.contact}</Link></li>
                    </ul>
                    <select
                        className="custom-select"
                        value={props.language}
                        onChange={e => props.handleSetLanguage(e.target.value)}
                        >
                        <option value="ES">ES</option>
                        <option value="CA">CA</option>
                        <option value="EN">EN</option>
                        <option value="DE">DE</option>
                    </select>
                </div>
            </nav> 
        </div>
    )
}

export default MyNavBar2
