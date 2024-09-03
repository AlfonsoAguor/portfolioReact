import React from 'react';

const Header = () => {
    return (
        <>
            <div id="milkyway"></div>
            <header id="header" className="hiddenHeader">
                <div className="menu">
                    <div className="wrap">
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#certs">Cursos</a></li>
                            <li><a href="#skills">Habilidades</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        </>
    );
}

export default Header;
