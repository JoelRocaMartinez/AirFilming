import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Services.css";


function Services(props) {

    let content = {
        Català: {
            title: "SERVEIS",
            section1: {
                title: "SEGUIMENT D´OBRES",
                description1: "Millor control",
                description2: "Menys risc",  
                description3: "Controla l´evolució del teu projecta"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: "Nuvols de punts: Ingenieria forestal, Geologia, Mineria, Aqueologia",
                description2: "Models en 3D: Videojocs, Patrimoni digital, Maquetes en 3D, Recreació d´escenaris reals",  
                description3: "Corves de nivell: Cartografia, Topografia, Edificacions, Mediambiental"
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: "Events: Privats o Publics",
                description2: "Empreses: Afegeix valor al teu negoci",  
                description3: "Esports: Fes que sentin el ritme",
                description4: "Projectes: Ens adaptem a tu"
            },
        },
        Castellano: {
            title: "SERVICIOS",
            section1: {
                title: "SEGUIMIENTO DE OBRAS",
                description1: "Mejor control",
                description2: "Menor riesgo",  
                description3: "Controla la evolución de tu proyecto"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: "Nubes de puntos: Ingeniería forestal, Geología, Minería, Arqueología",
                description2: "Modelos 3D: Videojuegos, patrimonio digital, Maquetas 3D, Recreación de escenarios reales",  
                description3: "Curvas de nivel: Cartografía, Topografía, Edificación, Medioambiental"
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: "Eventos: Privados o Públicos",
                description2: "Empresas: Añade valor a tu negocio",  
                description3: "Deportes: Haz que sientan el ritmo",
                description4: "Proyectos: Nos adaptamos a ti"
            },
        },
        English: {
            title: "SERVICIOS",
            section1: {
                title: "SEGUIMIENTO DE OBRAS",
                description1: "Mejor control",
                description2: "Menor riesgo",  
                description3: "Controla la evolución de tu proyecto"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: "Nubes de puntos: Ingeniería forestal, Geología, Minería, Arqueología",
                description2: "Modelos 3D: Videojuegos, patrimonio digital, Maquetas 3D, Recreación de escenarios reales",  
                description3: "Curvas de nivel: Cartografía, Topografía, Edificación, Medioambiental"
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: "Eventos: Privados o Públicos",
                description2: "Empresas: Añade valor a tu negocio",  
                description3: "Deportes: Haz que sientan el ritmo",
                description4: "Proyectos: Nos adaptamos a ti"
            },
        },
        Deutch: {
            title: "SERVICIOS",
            section1: {
                title: "SEGUIMIENTO DE OBRAS",
                description1: "Mejor control",
                description2: "Menor riesgo",  
                description3: "Controla la evolución de tu proyecto"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: "Nubes de puntos: Ingeniería forestal, Geología, Minería, Arqueología",
                description2: "Modelos 3D: Videojuegos, patrimonio digital, Maquetas 3D, Recreación de escenarios reales",  
                description3: "Curvas de nivel: Cartografía, Topografía, Edificación, Medioambiental"
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: "Eventos: Privados o Públicos",
                description2: "Empresas: Añade valor a tu negocio",  
                description3: "Deportes: Haz que sientan el ritmo",
                description4: "Proyectos: Nos adaptamos a ti"
            },
        }
    };

    props.language === "Català" ? (content = content.Català)
    : props.language === "Castellano" ? (content = content.Castellano)
    : props.language === "English" ? (content = content.English)
    : (content = content.Deutch);


     return (
         <div id="services">
            <div className="title">
            <h2>{content.title}</h2>
            </div>
         
             <div className="sections">
                 <div className="section1">
                    <div>
                        <div className="fotogrametria">
                          <h3>{content.section1.title}</h3> 
                        </div>
                        
                        <ul>
                            <li>{content.section1.description1}</li>
                            <li>{content.section1.description2}</li>
                            <li>{content.section1.description3}</li>
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
                    <div>
                        <div className="fotogrametria">
                        <h3 >{content.section2.title}</h3>
                        </div>
                        <ul>
                            <li>{content.section2.description1}</li>
                            <li>{content.section2.description2}</li>
                            <li>{content.section2.description3}</li>
                        </ul>
                    </div>    
                 </div>

                 <hr></hr>

                 <div className="section3">
                    <div>
                        <div className="fotogrametria">
                          <h3>{content.section3.title}</h3>              
                        </div>
                        <ul>
                            <li>{content.section3.description1}</li>
                            <li>{content.section3.description2}</li>
                            <li>{content.section3.description3}</li>
                            <li>{content.section3.description4}</li>
                        </ul>
                    </div>
                    
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
              </div>
          </div>
      )
 }

 export default Services
