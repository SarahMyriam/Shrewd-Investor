const express = require("express");
const commentsRoute = require("./comments");
const stocksRoute = require("./stockInfo");
const router = express.Router();


router.use(commentsRoute);
router.use("/stocks", stocksRoute);

module.exports = router;
