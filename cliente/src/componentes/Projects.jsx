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
import Topic590 from '../assets/img/proyectos/Topic.webp'; 

import authMern1 from '../assets/img/proyectos/authMern1.webp';
import authMern2 from '../assets/img/proyectos/authMern2.webp';
import authMern3 from '../assets/img/proyectos/authMern3.webp';
import authMern4 from '../assets/img/proyectos/authMern4.webp';

import backEco1 from '../assets/img/proyectos/backEcommerce1.webp';
import backEco2 from '../assets/img/proyectos/backEcommerce2.webp';
import backEco3 from '../assets/img/proyectos/backEcommerce3.webp';
import backEco4 from '../assets/img/proyectos/backEcommerce4.webp';

import frontEco1 from '../assets/img/proyectos/frontEcommerce1.webp';
import frontEco2 from '../assets/img/proyectos/frontEcommerce2.webp';
import frontEco3 from '../assets/img/proyectos/frontEcommerce3.webp';


// Logos
import react from '../assets/img/logos/react.svg';
import mongodb from '../assets/img/logos/mongodb.svg';
import nodejs from '../assets/img/logos/nodejs.svg';
import css from '../assets/img/logos/css.svg';
import tailwindcss from '../assets/img/logos/tailwindcss.svg';
import html from '../assets/img/logos/html.svg';
import angular from '../assets/img/logos/angular.svg';
import bootstrap from '../assets/img/logos/bootstrap.svg';
import nextjs from '../assets/img/logos/nextjs.svg';
import sass from '../assets/img/logos/sass.svg';
import javaScript from '../assets/img/logos/js.svg';

const Projects = () => {
    const redSocialImages = [RedSocial1, RedSocial2, RedSocial3, RedSocial4, RedSocial5];
    const linkRedSocial = "https://github.com/AlfonsoAguor/RedSocial";
    const authMernImages = [authMern1, authMern2, authMern3, authMern4];
    const linkAuthMern = "https://github.com/AlfonsoAguor/MERN-Tasks-Auth";
    const backEcoImages = [backEco1, backEco2, backEco3, backEco4];
    const linkEcommerce = "https://github.com/AlfonsoAguor/ecommerce-next";
    const frontEcoImages = [frontEco1, frontEco2, frontEco3];

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
                        <Carousel images={backEcoImages} link={linkEcommerce}/>
                        <h3>Backend Ecommerce</h3>
                        <p>Backend para un ecommerce desarrollada con nextjs y TaildwindCSS. Autenticación con next-auth</p>
                        <div className="tecn">
                            <span><img src={mongodb} alt="mongodb" /></span>
                            <span><img src={nextjs} alt="nextjs" style={{ filter: 'drop-shadow(0px 0px 2px white)' }}/></span>
                            <span><img src={tailwindcss} alt="TailwindCSS" /></span>
                        </div>
                    </div>
                    )}
                    {(filter === 'all' || filter === 'app') && (
                        <div className="card">
                        <Carousel images={frontEcoImages} link={linkEcommerce}/>
                        <h3>Frontend Ecommerce</h3>
                        <p>Frontend para un ecommerce desarrollada con nextjs y styled-components</p>
                        <div className="tecn">
                        <span><img src={mongodb} alt="mongodb" /></span>
                            <span><img src={nextjs} alt="nextjs" style={{ filter: 'drop-shadow(0px 0px 2px white)' }}/></span>
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
                        <a href="https://github.com/AlfonsoAguor/maquetacion/tree/main/MaquetacionTopic590" target="_blank"><img src={Topic590} alt="blog" /></a>
                        <h3>Topic 590</h3>
                        <p>Réplica del template Topic 590. </p>
                        <div className="tecn">
                            <span><img src={html} alt="html" /></span>
                            <span><img src={sass} alt="sass" /></span>
                            <span><img src={javaScript} alt="javaScript"/></span>
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