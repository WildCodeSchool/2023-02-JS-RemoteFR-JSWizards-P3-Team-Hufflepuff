const express = require("express");

const router = express.Router();

const messageControllers = require("./controllers/messageControllers");
const userControllers = require("./controllers/userControllers");

/**
 * Items (pas besoins)
 */

// const itemControllers = require("./controllers/itemControllers");
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

/**
 * Messages
 */
router.get("/messages", messageControllers.getAll);
router.post("/messages", messageControllers.add);

/**
 * Users
 */
router.get("/users", userControllers.getAll);
router.post("/users", userControllers.add);

module.exports = router;
