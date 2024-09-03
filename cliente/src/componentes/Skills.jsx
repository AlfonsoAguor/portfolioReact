import React from 'react'

// Logos
import react from '../assets/img/logos/react.svg';
import mongodb from '../assets/img/logos/mongodb.svg';
import nodejs from '../assets/img/logos/nodejs.svg';
import css from '../assets/img/logos/css.svg';
import tailwindcss from '../assets/img/logos/tailwindcss.svg';
import sass from '../assets/img/logos/sass.svg';
import html from '../assets/img/logos/html.svg';
import angular from '../assets/img/logos/angular.svg';
import vue from '../assets/img/logos/vue.svg';
import bootstrap from '../assets/img/logos/bootstrap.svg';
import js from '../assets/img/logos/js.svg';
import mysql from '../assets/img/logos/mysql.svg';
import jquery from '../assets/img/logos/jquery.svg';

const Skills = () => {
    return (
        <>
            <section id="skills">
                <h1 className="titulo">Habilidades</h1>
                <div className="border-decoration"></div>
                <div id="clasification">
                    <div className="box frontend">
                        <h3>FRONTEND</h3>
                        <p>Habilidades y tecnologías de desarrollo frontend, incluyendo lenguajes de marcado, hojas de estilo y preprocesadores CSS.</p>
                        <div className="skill-icon">
                            <img src={html} alt="html" />
                            <img src={css} alt="css" />
                            <img src={sass} alt="sass" />
                            <img src={tailwindcss} alt="tailwindcss" />
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                    </div>
                    <div className="box frameworks">
                        <h3>FRAMEWORKS</h3>
                        <p>Conocimientos de frameworks y bibliotecas de JavaScript utilizados para el desarrollo de aplicaciones web dinámicas.</p>
                        <div className="skill-icon">
                            <img src={angular} alt="angular" />
                            <img src={react} alt="react" />
                            <img src={vue} alt="vue" />
                            <img src={jquery} alt="jquery" />
                        </div>
                    </div>
                    <div className="box backend">
                        <h3>BACKEND</h3>
                        <p>Habilidades en tecnologías y lenguajes de backend para el desarrollo del lado del servidor, incluyendo bases de datos y servidores.</p>
                        <div className="skill-icon">
                            <img src={js} alt="javaScript" />
                            <img src={nodejs} alt="react" />
                            <img src={mongodb} alt="mongodb" />
                            <img src={mysql} alt="mysql" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;