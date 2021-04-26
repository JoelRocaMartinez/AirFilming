import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-scroll'
import "bootstrap/dist/css/bootstrap.css";
import "./styles/MyNavBar.css";



function MyNavBar(props) {

    const [expanded, setExpanded] = useState(false);


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
            <Navbar expanded={expanded} id="myNavBar" expand="lg" fixed="top" variant="dark">
            <div id='fakeitem'></div>
                <Link className="airfilming" to="airfilming" smooth={true} duration={1500}>AIRFILMING</Link>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto responsive-navbar">
                            <Navbar.Toggle><Link onClick={() => setExpanded(false)} to="services" smooth={true} duration={1500}>{content.services}</Link></Navbar.Toggle>
                            <Navbar.Toggle><Link onClick={() => setExpanded(false)} to="drones" smooth={true} duration={1500}>{content.drones}</Link></Navbar.Toggle>
                            <Navbar.Toggle><Link onClick={() => setExpanded(false)} to="about" smooth={true} duration={1500}>{content.about}</Link></Navbar.Toggle>
                            <Navbar.Toggle><Link onClick={() => setExpanded(false)} to="contact" smooth={true} duration={1500}>{content.contact}</Link></Navbar.Toggle>
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
                        </Nav>
                    </Navbar.Collapse>
                        <Nav className="mr-auto desktop-navbar">
                            <Link to="services" smooth={true} duration={1500}>{content.services}</Link>
                            <Link to="drones" smooth={true} duration={1500}>{content.drones}</Link>
                            <Link to="about" smooth={true} duration={1500}>{content.about}</Link>
                            <Link to="contact" smooth={true} duration={1500}>{content.contact}</Link>
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
                        </Nav>
            </Navbar> 
        </div>
    )   
}

export default MyNavBar
