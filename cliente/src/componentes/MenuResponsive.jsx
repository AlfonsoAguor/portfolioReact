import React, { useState } from 'react';

const MenuResponsive = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="menuResponsive">
            <ul>
                <li>
                    <button className="menubtn" onClick={toggleMenu}>
                        <span className="icon-bars-solid"></span>
                    </button>
                    <ul id="menuDes" className={isMenuOpen ? 'menuDesClass show' : 'menuDesClass hide'}>
                        <li><a href="#home" target="_self"><span className="icon-house-solid"></span></a></li>
                        <li><a href="#projects" target="_self"><span className="icon-lightbulb-regular"></span></a></li>
                        <li><a href="#certs" target="_self"><span className="icon-badge"></span></a></li>
                        <li><a href="#skills" target="_self"><span className="icon-gear-solid"></span></a></li>
                        <li><a href="#contact" target="_self"><span className="icon-user-regular"></span></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default MenuResponsive;
