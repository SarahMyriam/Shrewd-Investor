const express = require("express");
const stocksRoute = require("./stocks");
const router = express.Router();

router.use("/stocks", stocksRoute);

module.exports = router;
