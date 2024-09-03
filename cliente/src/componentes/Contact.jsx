import React, { useState } from 'react';

const Contact = () => {
    const [showMessage, setShowMessage] = useState(false);

    const [formData, setFormData] = useState({
        from: '',
        subject: '',
        text: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://portfolio-react-coral-eight.vercel.app/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
        } else {
            console.log('Error al enviar el correo: ' + data.message);
        }
      } catch (error) {
          console.log('Error al enviar el correo: ' + error.message);
      }
  };
    return (
        <>
            <section id="contact">
                <h1 className="titulo">Contacto</h1>
                <div className="border-decoration"></div>
                <form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Correo: </label>
                    <input
                        type="email"
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="mail">Asunto: </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Mensaje: </label>
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">
                        <span className="icon-send"> </span>Enviar
                    </button>
                </form>
                {showMessage && <div id="showMail">El correo ha sido enviado correctamente</div>}
            </section>
        </>
    )
}

export default Contact;