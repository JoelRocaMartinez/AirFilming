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
    : props.language === "ES" ? (content = content.ES)
    : props.language === "EN" ? (content = content.EN)
    : (content = content.DE);


    return (

        <div id="footer">
            <p>© 2020 AIRFILMING. {content.developed}</p>
        </div>
    )
}

export default Footer
