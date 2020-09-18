import React from 'react';
import "./styles/Services.css";


function Services() {

    return (
        <div id="services">
        <div className="title">
          <h2>SERVICIOS</h2>
        </div>
        
            <div className="sections">
                <div className="section1">
                    <h3>SEGUIMIENTO DE OBRAS</h3>
                    <p>La libertad de movimiento del dron, permite un seguimiento aéreo de cualquier infraestructura, llegando a rincones de difícil acceso, con una facilidad y un riesgo menor.
                       Genera un registro digital de la evolución de la obra, con videos y fotografías 4K para un detalle óptimo.</p>  
                </div>

                <div className="section2">
                    <h3>FOTOGRAMETRIA</h3>
                    <p>Los Drones permiten dar un nuevo enfoque a la generación de información de un terreno, de una forma más eficiente, rápida y precisa. Desde planos de curvas de nivel hasta generar un 3D detallado de la zona fotografiada.</p>  
                </div>

                <div className="section3">
                    <h3>MARKETING EMPRESARIAL</h3>
                    <p>¡Dale un nuevo punto de vista a tu proyecto con un vuelo dinámico y creativo, sin límites, tanto en interior como en exterior! 
                       Hay muchas posibilidades: casas rurales, oficinas, gimnasios, bares, videoclips, deportes...</p>  
                </div>
            </div>
        </div>
    )
}

export default Services


