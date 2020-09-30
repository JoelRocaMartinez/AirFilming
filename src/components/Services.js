import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Services.css";


function Services() {

     return (
         <div id="services">
            <div className="title">
            <h2>SERVICIOS</h2>
            </div>
         
             <div className="sections">
                 <div className="section1">
                    <div>
                        <div className="fotogrametria">
                          <h3>SEGUIMIENTO DE OBRAS</h3> 
                        </div>
                        
                        <ul>
                            <li>Mejor control</li>
                            <li>Menor riesgo</li>
                            <li>Controla la evolución de tu proyecto</li>
                        </ul>
                        
                    </div>
                     
                        <div className="pictures">
                            <Carousel id="myCarousel">
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/Obras1.jpg"
                                        alt="obras_pic1"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/Obras2.jpg"
                                        alt="obras_pic2"
                                        />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                 </div>

                 <hr></hr>

                 <div className="section2">
                     <div className="pictures">
                            <Carousel id="myCarousel">
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/fotometria1.png"
                                        alt="fotometria_pic1"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/fotometria2.png"
                                        alt="fotometria_pic2"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/fotometria3.png"
                                        alt="fotometria_pic3"
                                        />
                                </Carousel.Item>
                            </Carousel> 
                        </div>
                    <div>
                        <div className="fotogrametria">
                        <h3 >FOTOGRAMETRIA</h3>
                        </div>
                        <ul>
                            <li><strong>Nubes de puntos:</strong> Ingenieria forestal, Geologia, Minería, Arquelogía</li>
                            <li><strong>Modelos 3D:</strong> Videojuegos, patrimonia digital, Maquetas 3D, Recreación de escenarios reales</li>
                            <li><strong>Curvas de nivel:</strong> Cartografía, Topografía, Edificación, Medioambiental</li>
                        </ul>
                    </div>    
                 </div>

                 <hr></hr>

                 <div className="section3">
                    <div>
                        <div className="fotogrametria">
                          <h3>MARKETING EMPRESARIAL</h3>              
                        </div>
                        <ul>
                            <li><strong>Eventos:</strong> Privados o Públicos</li>
                            <li><strong>Empresas:</strong> Añade valor a tu negocio</li>
                            <li><strong>Deportes:</strong> Haz que sientan el ritmo</li>
                            <li><strong>Proyectos:</strong> Nos adaptamos a ti</li>
                        </ul>
                    </div>
                    
                        <div className="pictures">
                            <Carousel id="myCarousel">
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/marketing1.png"
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
          </div>
      )
 }

 export default Services




  {/* <div className="sections">
                 <div className="section1">
                     <h3>SEGUIMIENTO DE OBRAS</h3>
                     <p>La libertad de movimiento del dron, permite un seguimiento aéreo de cualquier infraestructura, llegando a rincones de difícil acceso, con una facilidad y un riesgo menor.
                        Genera un registro digital de la evolución de la obra, con videos y fotografías 4K para un detalle óptimo.</p>  
                        <div className="pictures">
                            <Carousel id="myCarousel">
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/Obras1.jpg"
                                        alt="obras_pic1"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="/images/Obras2.jpg"
                                        alt="obras_pic2"
                                        />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                 </div>

                 <div className="section2">
                     <h3>FOTOGRAMETRIA</h3>
                     <p>Los Drones permiten dar un nuevo enfoque a la generación de información de un terreno, de una forma más eficiente, rápida y precisa. Desde planos de curvas de nivel hasta generar un 3D detallado de la zona fotografiada.</p> 
                        <div className="pictures">
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
                 </div>

                 <div className="section3">
                     <h3>MARKETING EMPRESARIAL</h3>
                     <p>¡Dale un nuevo punto de vista a tu proyecto con un vuelo dinámico y creativo, sin límites, tanto en interior como en exterior! 
                        Hay muchas posibilidades: casas rurales, oficinas, gimnasios, bares, videoclips, deportes...</p> 
                        <div className="pictures">
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
              </div> */}
