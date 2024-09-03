import React, { useState } from 'react';

const Footer = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleCopyText = () => {
        const textToCopy = 'alfonsoaguor@gmail.com';

        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    return (
        <footer id="pie">
            <p>Desarrollado por AlfonsoAguor</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/alfonso-agujetas-899088218" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin" /></a></li>
                <li><a href="https://github.com/AlfonsoAguor" target="_blank" rel="noopener noreferrer"><span className="icon-github" /></a></li>
                <li><span className="icon-envelope-regular" onClick={handleCopyText}></span></li>
            </ul>
            {showMessage && <div id="showMail">El correo alfonsoaguor@gmail.com ha sido copiado</div>}
        </footer>
    );
};

export default Footer;
