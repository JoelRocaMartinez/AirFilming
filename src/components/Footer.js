import React from 'react'
import "./styles/Footer.css";

function Footer(props) {

    let content = {
        CA: {
            developed: "Creada per Joel Roca Martinez"
        },
        ES: {
            developed: "Creada por Joel Roca Martinez"
        },
        EN: {
            developed: "Created by Joel Roca Martinez"
        },
        DE: {
            developed: "Erstellt von Joel Roca Martinez"
        }
    };

    props.language === "CA" ? (content = content.CA)
    : props.language === "DE" ? (content = content.DE)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.ES);


    return (

        <div id="footer">
            <p>© 2021 AIRFILMING. {content.developed}</p>
        </div>
    )
}

export default Footer
