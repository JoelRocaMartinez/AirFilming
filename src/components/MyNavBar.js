import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
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
                                <Nav.Link href="#services">Servicios</Nav.Link>
                                <Nav.Link href="#drones">Nuestra flota</Nav.Link>
                                <Nav.Link href="#about">Quiénes Somos</Nav.Link>
                                <Nav.Link href="#contact">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            
            {/* <div className="sections">
                        <a className="airfilming" href="#airfilming">AIRFILMING</a>
                        <a className="section" href="#services">Servicios</a>
                        <a className="section" href="#drones">Nuestra flota</a>
                        <a className="section" href="#about">Quiénes Somos</a>
                        <a className="section" href="#contact">Contacto</a> 
                </div> */}
            {/* <div className="sections">
                <div className="primary">
                  <a className="airfilming" href="#airfilming">AIRFILMING</a>
                </div>

                <div className="rest">
                    <a className="section" href="#services">Servicios</a>
                    <a className="section" href="#drones">Nuestra flota</a>
                    <a className="section" href="#about">Quiénes Somos</a>
                    <a className="section" href="#contact">Contacto</a> 
                </div>
                
               
            </div> */}
        </div>
    )   
}

export default MyNavBar
