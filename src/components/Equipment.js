import React from 'react';
import "./styles/Equipment.css";



function Equipment() {


    return (
        <div id="drones">
            <div className="title">
            <h2>NUESTRA FLOTA</h2>
            </div>

            <div className="quote">
            <i><strong>En AirFilming contamos con todo tipo de soluciones adaptables a cada cliente y proyecto</strong></i>
            </div>
        
            <div className="sections">
                <div className="section">
                    <p className="type"><strong>DJI MAVIC 2 PRO</strong></p>
                    <img src="./images/DJI_MAVIC_2_PRO.jpg" alt="DJI_Mavic_Pro" />
                    <div className="properties">
                        <p className="description">Vídeo y Fotografía</p>
                        <p className="description">Proyectos en Exterior</p>
                        <p className="description">Calidad 4K</p>
                    </div>  
                </div>

                <div className="section">
                    <p className="type"><strong>DJI MAVIC Mini</strong></p>
                    <img src="./images/DJI_MAVIC_Mini.jpg" alt="DJI_Mavic_Mini" />
                    <div className="properties">
                        <p className="description">Vídeo y Fotografía</p>
                        <p className="description">Proyectos en Interior</p>
                        <p className="description">Calidad 2.7K</p>
                    </div>
                </div>

                <div className="section">
                    <p className="type"><strong>IFLIGHT MEGABEE</strong></p>
                    <img src="./images/CineWhoop_FPV.jpg" alt="Megabee" /> 
                    <div className="properties">
                        <p className="description">Vídeos dinámicos</p>
                        <p className="description">Proyectos en Interior</p>
                        <p className="description">Máxima creatividad y libertad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Equipment


