import React from 'react';
import "./styles/Equipment.css";



function Equipment() {


    return (
        <div>
        <h1>DRONES</h1>
        <hr></hr>
        <p>En AirFilming contamos con todo tipo de soluciones adaptables a cada cliente y proyecto</p>

            <div>
                <div>
                    <p>DJI MAVIC 2 PRO</p>
                    <img src="./images/DJI_MAVIC_2_PRO.jpg" alt="DJI_Mavic_Pro" />
                </div>

                <div>
                    <p>DJI MAVIC Mini</p>
                    <img src="./images/DJI_MAVIC_Mini.jpg" alt="DJI_Mavic_Mini" />
                     
                </div>

                <div>
                    <p>IFLIGHT MEGABEE</p>
                    <img src="./images/IFLIGHT_MEGABEE.jpg" alt="Megabee" /> 
                </div>
            </div>
        </div>
    )
}


export default Equipment


