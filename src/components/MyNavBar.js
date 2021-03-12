import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/MyNavBar.css";


function MyNavBar(props) {

    let content = {
        Català: {
            services: "SERVEIS",
            drones: "LA NOSTRA FLOTA",
            about: "QUI SOM",
            contact: "CONTACTE"
        },
        Castellano: {
            services: "SERVICIOS",
            drones: "NUESTRA FLOTA",
            about: "QUIÉNES SOMOS",
            contact: "CONTACTO"
        },
        English: {
            services: "SERVICES",
            drones: "OUR FLEET",
            about: "WHO ARE WE",
            contact: "CONTACT"
        },
        Deutch: {
            services: "SERVEIS",
            drones: "LA NOSTRA FLOTA",
            about: "QUI SOM",
            contact: "CONTACTE"
        }
    };

    props.language === "Català" ? (content = content.Català)
    : props.language === "Castellano" ? (content = content.Castellano)
    : props.language === "English" ? (content = content.English)
    : (content = content.Deutch);

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
                                <option value="Català">Català</option>
                                <option value="Castellano">Castellano</option>
                                <option value="English">English</option>
                                <option value="Deutch">Deutch</option>
                            </select>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    )   
}

export default MyNavBar
