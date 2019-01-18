const Usuario = require("../repository/usuarios");

let cambiarNombreUsuario = function(usuario) {
  usuario.nombre = usuario.nombre + "_Editado";

  return usuario;
};

let getAllUsers = async (req, res) => {
  let desde = Number(req.query.desde) || 0;
  let limit = Number(req.query.limit) || 5;

  let result = await Usuario.getUsers();
  console.log(result);

  res.json({
    ok: true,
    result
  });
};

module.exports = { cambiarNombreUsuario, getAllUsers };
