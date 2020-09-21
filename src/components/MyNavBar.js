import React from 'react';
import "./styles/MyNavBar.css";


function MyNavBar() {

    return (
        <div id="myNavBar">
            <div className="sections">
                <a className="section" href="#airfilming">AirFilming</a>
                <a className="section" href="#services">Servicios</a>
                <a className="section" href="#drones">Nuestra flota</a>
                <a className="section" href="#about">Quiénes Somos</a>
                <a className="section" href="#contact">Contacto</a> 
            </div>
        </div>
    )   
}

export default MyNavBar
