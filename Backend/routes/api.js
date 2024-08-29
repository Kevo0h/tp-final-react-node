const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
// POST route to handle contact form submission
router.post("/contacto", async (req, res) => {
  // Create a mail object with the email details
  const mail = {
    to: "kevinribachy@gmail.com",
    subject: "Contacto Web",
    html: `Hola, la persona: <p>Nombre: ${req.body.nombre}</p>
             <p>apellido: ${req.body.apellido}</p>
             <p>su numero de contacto es: ${req.body.celular}</p>
             <p>su correo: ${req.body.email}</p>
             <p>dejo el siguiente mensaje: ${req.body.mensaje}</p>`,
  };
  // Create a transport object with your SMTP configuration
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  // Send the email
  await transport.sendMail(mail);
  res.status(201).json({
    error: false,
    message: "mensaje enviado",
  });
});
module.exports = router;
