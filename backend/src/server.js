const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const allowedOrigins = ['https://portfolio-alfonsoaguors.vercel.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

const resend = new Resend(process.env.RESEND_API_KEY); 

app.post('/send', async (req, res) => {
    const { from, subject, text } = req.body;

    try {
        const toSend = `Correo: ${from}, Mensaje: ${text}`;

        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'alfonsoaguor@gmail.com',
            subject: subject,
            text: toSend,
        });

        res.status(200).send({ message: 'Correo enviado con éxito', data });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send({ message: 'Error al enviar el correo', error });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
