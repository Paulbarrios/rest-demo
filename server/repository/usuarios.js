const Usuario = require("../models/usuario");

module.exports.getUsers = () => {
  return Usuario.find({})
    .skip(0)
    .limit()
    .exec();
};
