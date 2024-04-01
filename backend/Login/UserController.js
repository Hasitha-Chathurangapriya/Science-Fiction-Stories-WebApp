const LoginUser = require("./UserModel");


const getLoginUsers = (req, res, next) => {

  const loginUser = new LoginUser({
    id: req.body.id,
    name: req.body.name,
  });

  LoginUser.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addLoginUser = (req, res, next) => {
  const loginUser = new LoginUser({
    id: req.body.id,
    name: req.body.name,
  });
  loginUser
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateLoginUser = (req, res, next) => {
  const { id, name } = req.body;
  LoginUser.updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteLoginUser = (req, res, next) => {
  const id = req.body.id;
  LoginUser.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getLoginUsers = getLoginUsers;
exports.addLoginUser = addLoginUser;
exports.updateLoginUser = updateLoginUser;
exports.deleteLoginUser = deleteLoginUser;
