import React from 'react';
import Carousel from "react-bootstrap/Carousel";
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
                    <Carousel id="myCarousel">
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/Obras1.jpg"
                                alt="Obras_pic1"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/Obras2.jpg"
                                alt="Obras_pic2"
                                />
                        </Carousel.Item>
                        {/* <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />
                        </Carousel.Item> */}
                    </Carousel>
                </div>

                <div className="section2">
                    <h3>FOTOGRAMETRIA</h3>
                    <p>Los Drones permiten dar un nuevo enfoque a la generación de información de un terreno, de una forma más eficiente, rápida y precisa. Desde planos de curvas de nivel hasta generar un 3D detallado de la zona fotografiada.</p> 
                    <Carousel id="myCarousel">
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/fotometria1.jpg"
                                alt="fotometria_pic1"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/fotometria2.jpg"
                                alt="fotometria_pic2"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/fotometria3.jpg"
                                alt="fotometria_pic3"
                                />
                        </Carousel.Item>
                    </Carousel> 
                </div>

                <div className="section3">
                    <h3>MARKETING EMPRESARIAL</h3>
                    <p>¡Dale un nuevo punto de vista a tu proyecto con un vuelo dinámico y creativo, sin límites, tanto en interior como en exterior! 
                       Hay muchas posibilidades: casas rurales, oficinas, gimnasios, bares, videoclips, deportes...</p> 
                       <Carousel id="myCarousel">
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/marketing1.jpg"
                                alt="marketing_pic1"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/marketing2.jpg"
                                alt="marketing_pic2"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/marketing3.jpg"
                                alt="marketing_pic3"
                                />
                        </Carousel.Item>
                    </Carousel> 
                </div>
            </div>
        </div>
    )
}

export default Services


