module.exports.getUsers = callback => {
  Usuario.find({})
    .skip(desde)
    .limit(limit)
    .exec((err, usuarios) => {
      callback(usuarios);
    });
};
