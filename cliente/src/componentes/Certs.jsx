import React from 'react'

// Imagenes
import masterReact from '../assets/img/cursos/masterReact.webp';
import masterCSS from '../assets/img/cursos/masterCSS.webp';
import masterJavaScript from '../assets/img/cursos/masterJavaScript.webp';
import angular from '../assets/img/cursos/angular.webp';

const Certs = () => {
    return (
        <>
            <section id="certs">
                <h1 className="titulo">Cursos</h1>
                <div className="border-decoration"></div>
                <div id="cursos">
                    <div className="curso">
                        <img src={masterReact} alt="Master en React" />
                    </div>
                    <div className="curso">
                        <img src={masterCSS} alt="Master en CSS" />
                    </div>
                    <div className="curso">
                        <img src={masterJavaScript} alt="Master JavaScript" />
                    </div>
                    <div className="curso">
                        <img src={angular} alt="Curso Angular" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Certs;
