import React from "react";
import "./index.css";



function BotonFlotante() {

    return <div className="contenedor">
        <button className="botonF1">
        <span>
            <a href="https://web.whatsapp.com/">
                <i className="fab fa-whatsapp"/>
            </a>
        </span>
        </button>
        <button className="btn botonF2">
        <span>
            <a href="https://www.facebook.com/Laroma-Dolce-105560661191520">
                <i className="fab fa-facebook-f"/>
            </a>
        </span>
        </button>
        <button className="btn botonF3">
        <span>
            <a href="https://www.instagram.com/laromadolce/?hl=es-la">
                <i className="fab fa-instagram"></i>
            </a>
        </span>
        </button>
    </div>

}

export {BotonFlotante}