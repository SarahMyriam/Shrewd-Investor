const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");
const loginRoute = require("../userHtmlRoutes");

// get route -> index
// router.get("/", (req, res) => {
//    res.redirect("/comments");
// });

router.get("/", (req, res) => {
   res.redirect("/login");
});

// comments page
// router.use("/comments", commentsRoute);
router.use("/login", loginRoute);

module.exports = router;
