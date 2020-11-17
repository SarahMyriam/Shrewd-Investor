const express = require("express");
const router = express.Router();
// const commentsRoute = require("./comments");
const loginRoute = require("../userHtmlRoutes");

router.get("/", (req, res) => {
   res.redirect("/login");
});

router.use("/login", loginRoute);

module.exports = router;
