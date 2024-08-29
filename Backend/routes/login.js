var express = require("express");
var router = express.Router();
var loginModel = require("../models/loginModel");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login");
});

router.get("/cerrar-sesion", function (req, res, next) {
  req.session.destroy();
  res.render("login");
});

router.post("/", async (req, res, next) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    const data = await loginModel.getUserByUsernameAndPassword(
      usuario,
      password
    );
    if (data !== undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      if (req.session.nombre === "admin") {
        res.redirect("/portal/admin");
      } else if (req.session.nombre === "user") {
        res.redirect("/portal/user");
      } else {
        // Manejo de un caso inesperado
        res.render("login", {
          layout: "layout",
          error: true,
          message: "Usuario no reconocido.",
        });
      }
    } else {
      res.render("login", {
        layout: "layout",
        error: true,
        message: "Usuario o contraseña incorrectos.",
      });
    }
  } catch (error) {
    console.error("Error en el manejo de login:", error);
    next(error); // Pasar el error al manejador de errores de Express
  }
});
module.exports = router;
