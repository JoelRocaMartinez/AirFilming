import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/MyNavBar.css";


function MyNavBar() {

    return (
        <div>
            <Navbar collapseOnSelect id="myNavBar" expand="lg" fixed="top" variant="dark">
            <div id='fakeitem'></div>
                <Navbar.Brand className="airfilming" href="#airfilming">AIRFILMING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto desktop-navbar">
                            <Nav.Link href="#services">SERVICIOS</Nav.Link>
                            <Nav.Link href="#drones">NUESTRA FLOTA</Nav.Link>
                            <Nav.Link href="#about">QUIÉNES SOMOS</Nav.Link>
                            <Nav.Link href="#contact">CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    )   
}

export default MyNavBar
