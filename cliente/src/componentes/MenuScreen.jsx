import React, { useEffect, useState } from 'react';

const MenuScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleMenuVisibility = () => {
        const header = document.getElementById('header');
        const pie = document.getElementById('pie');
        const menuScreen = document.getElementById('menuScreen');

        if (!header || !pie || !menuScreen) return;

        const headerHeight = header.offsetHeight;
        const pieRect = pie.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const headerOutOfView = window.pageYOffset > headerHeight;
        const pieInView = pieRect.top < windowHeight && pieRect.bottom >= 0;

        if (headerOutOfView && !pieInView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleMenuVisibility);
        return () => window.removeEventListener('scroll', toggleMenuVisibility);
    }, []);

    return (
        <nav id="menuScreen" className={isVisible ? '' : 'hidden'}>
            <ul>
                <li data-tooltip="Inicio"><a href="#home"><span className="icon-house-solid"></span></a></li>
                <li data-tooltip="Proyectos"><a href="#projects"><span className="icon-lightbulb-regular"></span></a></li>
                <li data-tooltip="Cursos"><a href="#certs"><span className="icon-badge"></span></a></li>
                <li data-tooltip="Habilidades"><a href="#skills"><span className="icon-gear-solid"></span></a></li>
                <li data-tooltip="Contacto"><a href="#contact"><span className="icon-user-regular"></span></a></li>
            </ul>
        </nav>
    );
};

export default MenuScreen;
