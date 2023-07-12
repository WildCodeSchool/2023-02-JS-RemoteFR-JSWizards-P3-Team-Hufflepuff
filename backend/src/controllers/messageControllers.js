const models = require("../models");

const getAll = (req, res) => {
  models.message
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("oups, erreur server");
    });
};

const getAllAsyncAwait = async (req, res) => {
  try {
    const [data] = await models.messageControllers.findAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("oups, erreur server");
  }
};
module.exports = {
  getAll,
  getAllAsyncAwait,
};
