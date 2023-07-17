const models = require("../models");

const getAll = (req, res) => {
  models.user
    .findAll()
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("oups, erreur server");
    });
};

const add = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      // res.location(`/message/${result.insertId}`).sendStatus(201);
      res.send(`add user : ${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  add,
};
