const models = require("../models");

const getAll = (req, res) => {
  models.message
    .findAll()
    .then((data) => {
      res.json(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("oups, erreur server");
    });
};

const add = async (req, res) => {
  try {
    const [data] = await models.messageControllers.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("oups, erreur server");
  }

  // const add = (req, res) => {
  //   const user = req.body;
  //   models.users
  //     .insert(user)
  //     .then(([result]) => {
  //       res.location(`/users/${result.insertId}`).sendStatus(201);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };
};

module.exports = {
  getAll,
  add,
};
