import React, { useState, useEffect } from 'react';

const Carousel = ({ images, link }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 30000); // Cambia la slide cada 30 segundos
        return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </div>
            <button className="carousel-control prev dark" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-control next dark" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Carousel;
