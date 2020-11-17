  
const express = require("express");
const stocksRoute = require("./stockInfo.js");
const router = express.Router();

router.use("/stocks", stocksRoute);

module.exports = router;