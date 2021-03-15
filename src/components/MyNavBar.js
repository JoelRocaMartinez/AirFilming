import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/MyNavBar.css";


function MyNavBar(props) {

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
    : props.language === "ES" ? (content = content.ES)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.DE);

    return (
        <div>
            <Navbar collapseOnSelect id="myNavBar" expand="lg" fixed="top" variant="dark">
            <div id='fakeitem'></div>
                <Navbar.Brand className="airfilming" href="#airfilming">AIRFILMING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto desktop-navbar">
                            <Nav.Link href="#services">{content.services}</Nav.Link>
                            <Nav.Link href="#drones">{content.drones}</Nav.Link>
                            <Nav.Link href="#about">{content.about}</Nav.Link>
                            <Nav.Link href="#contact">{content.contact}</Nav.Link>
                            <select
                                className="custom-select"
                                value={props.language}
                                onChange={e => props.handleSetLanguage(e.target.value)}
                                >
                                <option value="CA">CA</option>
                                <option value="ES">ES</option>
                                <option value="EN">EN</option>
                                <option value="DE">DE</option>
                            </select>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    )   
}

export default MyNavBar
