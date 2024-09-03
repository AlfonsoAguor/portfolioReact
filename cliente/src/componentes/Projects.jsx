import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

// Imagenes
import RedSocial1 from '../assets/img/proyectos/RedSocial1.webp';
import RedSocial2 from '../assets/img/proyectos/RedSocial2.webp';
import RedSocial3 from '../assets/img/proyectos/RedSocial3.webp';
import RedSocial4 from '../assets/img/proyectos/RedSocial4.webp';
import RedSocial5 from '../assets/img/proyectos/RedSocial5.webp';

import cvWeb from '../assets/img/proyectos/cv-web.webp';
import blog from '../assets/img/proyectos/blog.webp';
import cssGrid from '../assets/img/proyectos/css-grid.webp';

import authMern1 from '../assets/img/proyectos/authMern1.webp';
import authMern2 from '../assets/img/proyectos/authMern2.webp';
import authMern3 from '../assets/img/proyectos/authMern3.webp';
import authMern4 from '../assets/img/proyectos/authMern4.webp';

// Logos
import react from '../assets/img/logos/react.svg';
import mongodb from '../assets/img/logos/mongodb.svg';
import nodejs from '../assets/img/logos/nodejs.svg';
import css from '../assets/img/logos/css.svg';
import tailwindcss from '../assets/img/logos/tailwindcss.svg';
import html from '../assets/img/logos/html.svg';
import angular from '../assets/img/logos/angular.svg';
import bootstrap from '../assets/img/logos/bootstrap.svg';

const Projects = () => {
    const redSocialImages = [RedSocial1, RedSocial2, RedSocial3, RedSocial4, RedSocial5];
    const linkRedSocial = "https://github.com/AlfonsoAguor/RedSocial";
    const authMernImages = [authMern1, authMern2, authMern3, authMern4];
    const linkAuthMern = "https://github.com/AlfonsoAguor/MERN-Tasks-Auth";

    const [filter, setFilter] = useState('all');

    const filterCards = (category) => {
        setFilter(category);
    };

    return (
        <>
            <section id="projects">
                <h1 className="titulo">Proyectos</h1>
                <div className="border-decoration"></div>
                <div id="filter-cards">
                    <button onClick={() => filterCards('all')}>Mostrar Todo</button>
                    <button onClick={() => filterCards('frontend')}>Maquetación</button>
                    <button onClick={() => filterCards('app')}>Apps</button>
                </div>
                <div id="cards">
                    {(filter === 'all' || filter === 'app') && (
                        <div className="card">
                        <Carousel images={redSocialImages} link={linkRedSocial}/>
                        <h3>Red Social</h3>
                        <p>Red social con autenticación mediante jsonwebtoken. Desarrollada con MERN Stack.</p>
                        <div className="tecn">
                            <span><img src={react} alt="react" /></span>
                            <span><img src={mongodb} alt="mongodb" /></span>
                            <span><img src={nodejs} alt="nodejs" /></span>
                            <span><img src={css} alt="css" /></span>
                        </div>
                    </div>
                    )}
                    {(filter === 'all' || filter === 'app') && (
                    <div className="card">
                        <a href="https://cv-web-sigma.vercel.app/" target="_blank"><img src={cvWeb} alt="CV Web" /></a>
                        <h3>CV web</h3>
                        <p>Currículum vitae interactivo y dinámico, donde podrás explorar sobre mi educación, experiencia y habilidades. Esta desarrollada con Angular.</p>
                        <div className="tecn">
                            <span><img src={angular} alt="angular" /></span>
                            <span><img src={bootstrap} alt="boostrap" /></span>
                        </div>
                    </div>
                    )}
                    {(filter === 'all' || filter === 'app') && (
                    <div className="card">
                        <Carousel images={authMernImages} link={linkAuthMern} />
                        <h3>Administrador de Tareas</h3>
                        <p>Administrador de tareas con autenticación mediante jsonwebtoken. Desarrollada con MERN Stack.</p>
                        <div className="tecn">
                            <span><img src={react} alt="react" /></span>
                            <span><img src={mongodb} alt="mongodb" /></span>
                            <span><img src={nodejs} alt="nodejs" /></span>
                            <span><img src={tailwindcss} alt="tailwindcss" /></span>
                        </div>
                    </div>
                    )}
                    {(filter === 'all' || filter === 'frontend') && (
                    <div className="card">
                        <a href="https://blog-virid-xi.vercel.app/" target="_blank"><img src={blog} alt="blog" /></a>
                        <h3>Blog</h3>
                        <p>Maquetación de blog. Pagina web que me ha servido como practica para mejor en CSS.</p>
                        <div className="tecn">
                            <span><img src={html} alt="html" /></span>
                            <span><img src={css} alt="css" /></span>
                        </div>
                    </div>)}
                    {(filter === 'all' || filter === 'frontend') && (
                    <div className="card">
                        <a href="https://maquetacion-css-grid.vercel.app/" target="_blank"><img src={cssGrid} alt="blog" /></a>
                        <h3>Porfolio</h3>
                        <p>Maquetación de porfolio hecho con CSS Grid.</p>
                        <div className="tecn">
                            <span><img src={html} alt="html" /></span>
                            <span><img src={css} alt="css" /></span>
                        </div>
                    </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Projects;