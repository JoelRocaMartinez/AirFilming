import React from 'react';
import "./styles/Equipment.css";



function Equipment(props) {

    let content = {
        CA: {
            title: "LA NOSTRA FLOTA",
            quote: "A AirFilming comptem amb tot tipus de solucions adaptables a cada client i projecte",
            drone1: {
                title: "DJI MAVIC 2 PRO",
                description1: "Vídeo i Fotografia",
                description2: "Projectes en Exteriors",
                description3: "Qualitat 4K"
            },
            drone2: {
                title: "DJI MAVIC Mini",
                description1: "Video i Fotografia",
                description2: "Projectes en Interiors",
                description3: "Qualitat 2,7K"
            },
            drone3: {
                title: "CINEWHOOP FPV",
                description1: "Vídeos dinámics",
                description2: "Projectes en Interiors",
                description3: "Máxima creativitat i llibertat"
            },
            drone4: {
                title: "ARMATTAN CHAMELEON",
                description1: "Vídeos dinámics",
                description2: "Projectes en Exteriors",
                description3: "Máxima creativitat i llibertat"
            },
        },
        ES: {
            title: "NUESTRA FLOTA",
            quote: "En AirFilming contamos con todo tipo de soluciones adaptables a cada cliente y proyecto",
            drone1: {
                title: "DJI MAVIC 2 PRO",
                description1: "Vídeo y Fotografía",
                description2: "Proyectos en Exterior",
                description3: "Calidad 4K"
            },
            drone2: {
                title: "DJI MAVIC Mini",
                description1: "Vídeo y Fotografía",
                description2: "Proyectos en Interior",
                description3: "Calidad 2,7K"
            },
            drone3: {
                title: "CINEWHOOP FPV",
                description1: "Vídeos dinámicos",
                description2: "Proyectos en Interior",
                description3: "Máxima creatividad y libertad"
            },
            drone4: {
                title: "ARMATTAN CHAMELEON",
                description1: "Vídeos dinámicos",
                description2: "Proyectos en Exterior",
                description3: "Máxima creatividad y libertad"
            },
        },
        EN: {
            title: "OUR FLEET",
            quote: "At AirFilming we have all kinds of solutions adaptable to each client and project",
            drone1: {
                title: "DJI MAVIC 2 PRO",
                description1: "Video and Photography",
                description2: "Outdoor projects",
                description3: "4K quality"
            },
            drone2: {
                title: "DJI MAVIC Mini",
                description1: "Video and Photography",
                description2: "Indoor porjects",
                description3: "2,7K quality"
            },
            drone3: {
                title: "CINEWHOOP FPV",
                description1: "Dynamic videos",
                description2: "Indoor projects",
                description3: "Máximum freedom and creativity"
            },
            drone4: {
                title: "ARMATTAN CHAMELEON",
                description1: "Dynamic videos",
                description2: "Outdoor projects",
                description3: "Máximmum freedom and creativity"
            },
        },
        DE: {
            title: "UNSERE FLOTTE",
            quote: "Bei AirFilming haben wir alle Arten von Lösungen, die an jeden Kunden und jedes Projekt angepasst werden können",
            drone1: {
                title: "DJI MAVIC 2 PRO",
                description1: "Video und Fotografie",
                description2: "Outdoor-Projekte",
                description3: "4K Qualität"
            },
            drone2: {
                title: "DJI MAVIC Mini",
                description1: "Video und Fotografie",
                description2: "Innenprojekte",
                description3: "2.7K Qualität"
            },
            drone3: {
                title: "CINEWHOOP FPV",
                description1: "Dynamische Videos",
                description2: "Innenprojekte",
                description3: "Maximale Kreativität und Freiheit"
            },
            drone4: {
                title: "ARMATTAN CHAMELEON",
                description1: "Dynamische Videos",
                description2: "Outdoor-Projekte",
                description3: "Maximale Kreativität und Freiheit"
            },
        }
    };


    props.language === "CA" ? (content = content.CA)
    : props.language === "ES" ? (content = content.ES)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.DE);


    return (
        <div id="drones">
            <div className="title">
            <h2>{content.title}</h2>
            </div>

            <div className="quote">
            <i><strong>{content.quote}</strong></i>
            </div>
        
            <div className="sections">
                <div className="section">
                    <p className="typePro"><strong>{content.drone1.title}</strong></p>
                    <img src="./images/DJI_MAVIC_2_PRO.jpg" alt="DJI_Mavic_Pro" />
                    <div className="propertiesPro">
                        <p className="description">{content.drone1.description1}</p>
                        <p className="description">{content.drone1.description2}</p>
                        <p className="description">{content.drone1.description3}</p>
                    </div>  
                </div>

                <div className="section">
                    <p className="typeMini"><strong>{content.drone2.title}</strong></p>
                    <img src="./images/DJI_MAVIC_Mini.jpg" alt="DJI_Mavic_Mini" />
                    <div className="propertiesMini">
                        <p className="description">{content.drone2.description1}</p>
                        <p className="description">{content.drone2.description2}</p>
                        <p className="description">{content.drone2.description3}</p>
                    </div>
                </div>

                <div className="section">
                    <p className="typeFpv"><strong>{content.drone3.title}</strong></p>
                    <img src="./images/CineWhoop_FPV.jpg" alt="Megabee" /> 
                    <div className="propertiesFpv">
                        <p className="description">{content.drone3.description1}</p>
                        <p className="description">{content.drone3.description2}</p>
                        <p className="description">{content.drone3.description3}</p>
                    </div>
                </div>

                <div className="section">
                    <p className="typePro"><strong>{content.drone4.title}</strong></p>
                    <img src="./images/Armattan_Chameleon.png" alt="Armattan_Chameleon" /> 
                    <div className="propertiesPro">
                        <p className="description">{content.drone4.description1}</p>
                        <p className="description">{content.drone4.description2}</p>
                        <p className="description">{content.drone4.description3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Equipment


