const express = require("express");

const router = express.Router();
const messageControllers = require("./controllers/messageControllers");
const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("./message", messageControllers.getByName);

router.post("/message", messageControllers.post);
router.put("/message/:id", messageControllers.update);
router.delete("/message/:id", messageControllers.remove);

module.exports = router;
