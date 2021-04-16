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
    

    const navbar = document.getElementById("navbar");
    const navbarToggle = navbar.querySelector(".navbar-toggle");

    function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-label", "Close navigation menu.");
    }

    function closeMobileNavbar() {
    navbar.classList.remove("opened");
    navbarToggle.setAttribute("aria-label", "Open navigation menu.");
    }

    navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
        closeMobileNavbar();
    } else {
        openMobileNavbar();
    }
    });

    return (
        <div>
            <div id="navbar">
                <nav className="navbar-container container">
                    <Link className="home-link" to="airfilming" smooth={true} duration={1500}>
                        AIRFILMING
                    </Link>
                    <button className="navbar-toggle" type="button" aria-label="Open navigation menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-menu">
                        <ul className="navbar-links">
                            <li className="navbar-item"><Link className="navbar-link" to="services" smooth={true} duration={1500}>{content.services}</Link></li>
                            <li className="navbar-item"><Link className="navbar-link" to="drones" smooth={true} duration={1500}>{content.drones}</Link></li>
                            <li className="navbar-item"><Link className="navbar-link" to="about" smooth={true} duration={1500}>{content.about}</Link></li>
                            <li className="navbar-item"><Link className="navbar-link" to="contact" smooth={true} duration={1500}>{content.contact}</Link></li>
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
        </div>
    )
}

export default MyNavBar2
