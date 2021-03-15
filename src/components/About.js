import React from 'react';
import "./styles/About.css";


function About(props) {

    let content = {
        CA: {
            title: "L`EQUIP",
            quote: "Som dos enginyers que varem decidir canviar de rumb professional, per a crear la nostra operadora de drons i fer del nostre hobby la nostre professió",
            pilot1: {
                description1: "Pilot - Director d´operacions",
                description2: "Enginyer Mecànic"
            },
            pilot2: {
                description1: "Pilot - Director Tècnic",
                description2: "Enginyer de Telecomunicaciones"
            }
        },
        ES: {
            title: "EL EQUIPO",
            quote: "Somos dos ingenieros que decidimos cambiar de rumbo profesional, para crear nuestra operadora de drones y hacer del hobby nuestro trabajo",
            pilot1: {
                description1: "Piloto - Director de Operaciones",
                description2: "Ingeniero Mecánico"
            },
            pilot2: {
                description1: "Piloto - Director Técnico",
                description2: "Ingeniero de Telecomunicaciones"
            }
        },
        EN: {
            title: "THE TEAM",
            quote: "We are two engineers who decided to change our professional course, to create our drone operator and make the hobby our job",
            pilot1: {
                description1: "Pilot - Operational Manager",
                description2: "Mechanical Engineer"
            },
            pilot2: {
                description1: "Piloto - Technical Manager",
                description2: "Telecommunications Engineer"
            }
        },
        DE: {
            title: "DAS TEAM",
            quote: "Wir sind zwei Ingenieure, die beschlossen haben, unseren Berufskurs zu ändern, unseren Drohnenbetreiber zu schaffen und das Hobby zu unserem Job zu machen",
            pilot1: {
                description1: "Pilot - Betriebsleiter",
                description2: "Maschinenbauingenieur"
            },
            pilot2: {
                description1: "Pilot - Technischer Direktor",
                description2: "Telekommunikationsingenieur"
            }
        }
    };

    props.language === "CA" ? (content = content.CA)
    : props.language === "DE" ? (content = content.DE)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.ES);


    return (
        <div id="about">
            <div className="title">
            <h2>{content.title}</h2>
            </div>

            <div className="quote"> 
            <p>{content.quote}</p>
            </div>

            <div className="team">
                <div className="player">
                    <img src="./images/Bernat.jpg" alt="Bernat Sanz" />
                    <h3><strong>Bernat Martinez</strong></h3>
                    <p>{content.pilot1.description1}</p>
                    <p>{content.pilot1.description2}</p>
                </div>

                <div className="player">
                    <img src="./images/Miguel.jpg" alt="Miguel de Arana" />
                    <h3><strong>Miguel de Arana</strong></h3>
                    <p>{content.pilot2.description1}</p>
                    <p>{content.pilot2.description2}</p>
                </div>
            </div>
        </div>
    )
}

export default About
