const express = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const UsuarioController = require("../controllers/usuario");

const controller = require("../controllers/usuario");

const app = express();

app.get("/usuarios", UsuarioController.getAllUsers);

app.post("/usuarios", function(req, res) {
  let body = req.body;

  if (body == undefined) {
    res.status(400).json({
      ok: false,
      mensaje: "Datos no encontrados"
    });
  }

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    //usuarioDB.password = null;

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });
});
app.put("/usuarios/:id", function(req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, ["nombre", "email", "img", "role", "estado"]);

  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, usuarioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        usuario: usuarioDB
      });
    }
  );
});
app.delete("/usuarios", function(req, res) {
  res.json("delete usuarios");
});

module.exports = app;
