import React from 'react';
import "./styles/About.css";


function About() {
    return (
        <div id="about">
            <div className="title">
            <h2>EL EQUIPO</h2>
            </div>

            <div className="quote"> 
            <p>Somos dos ingenieros que decidimos cambiar de rumbo profesional, para crear nuestra operadora de drones y hacer del hobby nuestro trabajo</p>
            </div>

            <div className="team">
                <div className="player">
                    <img src="./images/Bernat.jpg" alt="Bernat Sanz" />
                    <h3><strong>Bernat Martinez</strong></h3>
                    <p>Piloto - Director de Operaciones</p>
                    <p>Ingeniero Mecánico</p>
                </div>

                <div className="player">
                    <img src="./images/Miguel.jpg" alt="Miguel de Arana" />
                    <h3><strong>Miguel de Arana</strong></h3>
                    <p>Piloto - Director Técnico</p>
                    <p>Ingeniero de Telecomunicaciones</p>
                </div>
            </div>
        </div>
    )
}

export default About
