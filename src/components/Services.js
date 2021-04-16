import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Services.css";


function Services(props) {

    let content = {
        CA: {
            title: "SERVEIS",
            section1: {
                title: "SEGUIMENT D´OBRES",
                description1: "Millor control",
                description2: "Menor risc",  
                description3: "Controla l´evolució del teu projecte"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: {
                    part1: "Nuvols de punts:",
                    part2: "Eginyeria forestal, Geologia, Mineria, Aqueologia"
                },
                description2: {
                    part1: "Models en 3D:",
                    part2:  "Videojocs, Patrimoni digital, Maquetes en 3D, Recreació d´escenaris reals"
                },
                description3: {
                    part1: "Corves de nivell:",
                    part2: "Cartografia, Topografia, Edificacions, Mediambiental"
                }
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: {
                    part1: "Events:",
                    part2: "Privats o Públics"
                },
                description2: {
                    part1: "Empreses:",
                    part2: "Afegeix valor al teu negoci"
                },
                description3: {
                    part1: "Esports:",
                    part2: "Fes que sentin el ritme",
                },
                description4: {
                    part1: "Projectes:",
                    part2: "Ens adaptem a tu"
                }
            },
        },
        ES: {
            title: "SERVICIOS",
            section1: {
                title: "SEGUIMIENTO DE OBRAS",
                description1: "Mejor control",
                description2: "Menor riesgo",  
                description3: "Controla la evolución de tu proyecto"
            },
            section2: {
                title: "FOTOGRAMETRIA",
                description1: {
                    part1: "Nubes de puntos:",
                    part2:  "Ingeniería forestal, Geología, Minería, Arqueología"
                },
                description2: {
                    part1: "Modelos 3D:",
                    part2: "Videojuegos, patrimonio digital, Maquetas 3D, Recreación de escenarios reales"  
                },
                description3: {
                    part1: "Curvas de nivel:",
                    part2: "Cartografía, Topografía, Edificación, Medioambiental"
                } 
            },
            section3: {
                title: "MARKETING EMPRESARIAL",
                description1: {
                    part1: "Eventos:",
                    part2: "Privados o Públicos"
                },
                description2: {
                    part1: "Empresas:",
                    part2: "Añade valor a tu negocio", 
                }, 
                description3: {
                    part1: "Deportes:",
                    part2: "Haz que sientan el ritmo"
                }, 
                description4: {
                    part1: "proyectos",
                    part2: "Nos adaptamos a ti"
                }
            },
        },
        EN: {
            title: "SERVICES",
            section1: {
                title: "CONSTRUCTION MONITORING",
                description1: "Better control",
                description2: "Less risk",  
                description3: "Control the progress of your project"
            },
            section2: {
                title: "PHOTOGRAMMETRY",
                description1: {
                    part1: "Point Clouds:",
                    part2: "Forest Engineering, Geology, Mining, Archeology"
                }, 
                description2: {
                    part1: "3D Models:",
                    part2: "Videogames, digital heritage, 3D models, Recreation of real scenarios"
                }, 
                description3: {
                    part1: "Contour lines:",
                    part2: "Cartography, Topography, Building, Environmental"
                } 
            },
            section3: {
                title: "BUSINESS MARKETING",
                description1: {
                    part1: "Events:" ,
                    part2: "Private or Public"
                }, 
                description2: {
                    part1: "Companies:",
                    part2: "Add value to your business"
                }, 
                description3: {
                    part1: "Sports:" ,
                    part2: "Make them feel the rythm"
                },
                description4: {
                    part1: "Projects:",
                    part2: "We adapt to you"
                } 
            },
        },
        DE: {
            title: "LEISTUNGEN",
            section1: {
                title: "ÜBERWACHUNG VON BAUSTELLEN",
                description1: "Bessere Kontrolle",
                description2: "Geringeres Risiko", 
                description3: "Kontrolliere die Entwicklung deines Projekts"
            },
            section2: {
                title: "FOTOGRAMETRIE",
                description1: {
                    part1: "Punktwolken:",
                    part2: "Forsttechnik, Geologie, Bergbau, Archäologie"
                },
                description2: {
                    part1: "3D-Modelle:",
                    part2: "Videospiele, digitales Erbe, 3D-Modelle, Nachbildung realer Szenarien"
                },
                description3: {
                    part1: "Konturlinien:",
                    part2: "Kartographie, Topographie, Gebäude, Umwelt"
                }
            },
            section3: {
                title: "BUSINESS MARKETING",
                description1: {
                    part1: "Ereignisse:",
                    part2: "Privat oder Öffentlich"
                },
                description2: {
                    part1: "Unternehmen:",
                    part2: "Mehrwert für Ihr Unternehmen"
                },
                description3: {
                    part1: "Sport:",
                    part2: "Lass sie den Rhythmus fühlen"
                },
                description4: {
                    part1: "Projekte:",
                    part2: "Wir passen uns an Sie an"
                }
            },
        }
    };

    props.language === "CA" ? (content = content.CA)
    : props.language === "DE" ? (content = content.DE)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.ES);


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
                            <li><strong>{content.section2.description1.part1}</strong> {content.section2.description1.part2}</li>
                            <li><strong>{content.section2.description2.part1}</strong> {content.section2.description2.part2}</li>
                            <li><strong>{content.section2.description3.part1}</strong> {content.section2.description3.part2}</li>
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
                            <li><strong>{content.section3.description1.part1}</strong> {content.section3.description1.part2}</li>
                            <li><strong>{content.section3.description2.part1}</strong> {content.section3.description2.part2}</li>
                            <li><strong>{content.section3.description3.part1}</strong> {content.section3.description3.part2}</li>
                            <li><strong>{content.section3.description4.part1}</strong> {content.section3.description4.part2}</li>
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
