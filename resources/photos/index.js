
const express = require('express');
const router = express.Router();

//import controller
const controller = require('./controller');
router.get("/", controller.index);
router.get("/:id", controller.show);
//only have two methods right now for viewing

module.exports = router;
