import React from 'react';
import "./styles/MyNavBar.css";


function MyNavBar() {

    return (
        <div id="myNavBar">
            <div className="sections">
                <a className="section" href="#section2">AirFilming</a>
                <a className="section" href="#section2">Servicios</a>
                <a className="section" href="#section2">Nuestra flota</a>
                <a className="section" href="#section2">Quiénes Somos</a>
                <a className="section" href="#section2">Contacto</a> 
            </div>
        </div>
    )   
}

export default MyNavBar
