const express = require("express");
const router = express.Router();
const message = require("./api/message");

router.use("/message", message);

module.exports = router;
