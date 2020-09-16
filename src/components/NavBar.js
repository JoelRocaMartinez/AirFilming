import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';

import "./styles/NavBar.css";


function NavBar() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Airfilming">AIRFILIMNG</Nav.Link>
                        <Nav.Link href="#Services">SERVEIS</Nav.Link>
                        <Nav.Link href="#Equipment">EQUIPAMENT</Nav.Link>
                        <Nav.Link href="#About">QUI SOM</Nav.Link>
                        <Nav.Link href="#Contact">CONTACTE</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )   
}

export default NavBar
