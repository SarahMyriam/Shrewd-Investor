const express = require("express");
const stocksRoute = require("./stockInfo.js");
const router = express.Router();
//"/api/stocks"
router.use("/stocks", stocksRoute);

module.exports = router;
