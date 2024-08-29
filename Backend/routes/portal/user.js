var express = require("express");
var router = express.Router();
var reclamosModel = require("../../models/reclamosModel");
/* GET users listing. */

router.get("/", async function (req, res, next) {
  var persona = req.session.nombre;
  var reclamos = await reclamosModel.getReclamosByUser(persona);

  res.render("portal/user", { persona, reclamos });
});

router.post("/agregar", async (req, res, next) => {
  var persona = req.session.nombre;

  try {
    if (req.body.tipo_reclamo != "") {
      await reclamosModel.insertReclamos(req.body, persona);

      res.redirect("/portal/user?success=true");
    } else {
      res.render("/portal/user", {
        error: true,
        message: "Porfavor completar que tipo de reclamo es, gracias!",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("portal/user", {
      error: true,
      message: "No se cargo la consulta, intentarlo nuevamente mas tarde",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await reclamosModel.deleteReclamosById(id);
  res.redirect("/portal/user");
});

module.exports = router;
