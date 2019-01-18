const Usuario = require("../repository/usuarios");

let cambiarNombreUsuario = function(usuario) {
  usuario.nombre = usuario.nombre + "_Editado";

  return usuario;
};

let getAllUsers = (req, res) => {
  let desde = Number(req.query.desde) || 0;
  let limit = Number(req.query.limit) || 5;

  Usuario.getUsers(usuarios => {
    if (err) {
      return res.status(400).json({
        ok: false,
        mensaje: "Datos no encontrados"
      });
    }

    res.json({
      ok: true,
      usuarios
    });
  });
};

module.exports = { cambiarNombreUsuario, getAllUsers };
