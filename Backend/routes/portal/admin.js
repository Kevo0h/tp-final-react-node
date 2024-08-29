var express = require("express");
var router = express.Router();
var reclamosModel = require("../../models/reclamosModel");
/* GET users listing. */
router.get("/", async function (req, res, next) {
  var message = req.query.message;
  var reclamos = await reclamosModel.getReclamos();
  res.render("portal/admin", {
    layout: "layout",
    form1: true,
    reclamos,
    message,
    persona: req.session.nombre,
  });
});

router.get("/portal/admin/:message", async (req, res, next) => {
  var message = req.params.message;
  res.render("/portal/admin", {
    message,
  });
});

//end//

/////////////////////
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await reclamosModel.deleteReclamosById(id);
  res.redirect("/portal/admin");
});

////////////////////
router.get("/modificar/:id", async (req, res, next) => {
  var id = req.params.id;
  try {
    var modificar = await reclamosModel.modificarReclamo(id); // Asegúrate de tener un método para obtener un reclamo por ID
    res.render("portal/admin", {
      layout: "layout",
      form1: false,
      form2: true,
      persona: req.session.nombre,
      modificar, // Indicamos que estamos en modo de modificación
    });
  } catch (error) {
    next(error);
  }
});

router.post("/modificar", async (req, res, next) => {
  var obj = req.body;
  await reclamosModel.modificarReclamosById(obj);
  res.redirect("/portal/admin");
});
/////////////////////
module.exports = router;
