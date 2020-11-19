// Requiring path to so we can use relative routes to our HTML files
// const { table } = require("console");
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

   app.get("/", (req, res) => {
      // If the user already has an account send them to the members page
      if (req.user) {
         res.redirect("/members");
      }
      res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
   });


   app.get("/login", (req, res) => {
      // If the user already has an account send them to the members page
      if (req.user) {
         res.redirect("/members");
      }
      res.sendFile(path.join(__dirname, "../public/assets/login.html"));
   });

   // Here we've add our isAuthenticated middleware to this route.
   // If a user who is not logged in tries to access this route they will be redirected to the signup page
   // app.get("/members", isAuthenticated, function(req, res) {
   //   res.sendFile(path.join(__dirname, "../public/assets/members.html"));
   // });

   app.get("/members", isAuthenticated, (req, res) => {
      res.render("index");
      //  table.findAll()
      //  .then()
   });

   app.get("/portfolio", (req, res) => {
      res.render("portfolio");
      //  table.findAll()
      //  .then()
   });

   app.get("/IBMdetails", (req, res) => {
      res.render("IBMdetails");
      //  table.findAll()
      //  .then()
   });


   app.get("/lesson", (req, res) => {
      res.render("lesson");
      //  table.findAll()
      //  .then()
   });


   app.get("/ibm111", (req, res) => {
      res.render("ibm111");
      //  table.findAll()
      //  .then()
   });

   app.get("/bio222", (req, res) => {
      res.render("bio222");
      //  table.findAll()
      //  .then()
   });

   app.get("/tes333", (req, res) => {
      res.render("tes333");
      //  table.findAll()
      //  .then()
   });

   app.get("/lesson", (req, res) => {
      res.render("lesson");
      //  table.findAll()
      //  .then()
   });

   app.get("/lesson2", (req, res) => {
      res.render("lesson2");
      //  table.findAll()
      //  .then()
   });

};
