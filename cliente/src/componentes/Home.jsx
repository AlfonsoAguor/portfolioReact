import React from 'react'

const Home = () => {
  return (
    <>
        <section id="home">
            <div className="wrap">
                <h1>Hola, Soy Alfonso <span>Agujetas</span></h1>
                <h2>Full-Stack Developer</h2>
                <div className="top-border-decoration"></div>
                <p>Soy un desarrollador web apasionado por la creación de soluciones digitales impactantes y enfocado en encontrar nuevas formas de resolver problemas y mejorar experiencias en línea.</p>
                <ul>
                    <li className="cv-button"><a href="./assets/cv/AlfonsoAgujetasCV.pdf" target="_blank" download>Descargar CV</a></li>
                    <li className="cv-button"><a href="https://cv-web-sigma.vercel.app/" target="_blank" className="icon-lightbulb">Visitar CV web</a></li>
                    <li className="link-button"><a href="https://www.linkedin.com/in/alfonso-agujetas-899088218" target="_blank"><span className="icon-linkedin"/></a></li>
                    <li className="link-button"><a href="https://github.com/AlfonsoAguor" target="_blank"><span className="icon-github"/></a></li>
                </ul>
                <div className="bottom-border-decoration"></div>
            </div>
        </section>
    </>
  )
}

export default Home;