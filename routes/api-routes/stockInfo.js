const express = require("express");
const router = express.Router();
require("dotenv").config();
console.log(process.env.API_KEY);
const axios = require("axios");
const db = require("../../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

const API_KEY = "pk_c651b2c4163d4e3aa0cadc5bfa3623a3";

//get stock info for IBM
router.get("/IBM", (req, res, next) => {
   // console.log("I am here");
   const IBM = "IBM";
   axios
      .get(`https://cloud.iexapis.com/stable/stock/${IBM}/quote?token=${API_KEY}`
      ).then( ({ data }) => {
         //   console.log(data);
         //   res.redirect("/");
         //    optionally return data created
         console.log("IBM");
         res.json(data);
         console.log(data.companyName);
         console.log(data.iexRealtimePrice);
         console.log(data.change);
         console.log(data.changePercent);
      })
      .catch(err => {
         console.log(err);
         res.status(500);
         next(err);
      });       
});
//get stock info for tesla
router.get("/TSLA", (req, res, next) => {
   console.log("I am here");
   const TSLA = "TSLA";
   axios
      .get(`https://cloud.iexapis.com/stable/stock/${TSLA}/quote?token=${API_KEY}`
      ).then( ({ data }) => {
         //   console.log(data);
         //   res.redirect("/");
         //    optionally return data created
         console.log("Tesla");
         res.json(data);
         console.log(data.companyName);
         console.log(data.iexRealtimePrice);
         console.log(data.change);
         console.log(data.changePercent);
      })
      .catch(err => {
         console.log(err);
         res.status(500);
         next(err);
      });
});
//get stock infor for biogen
router.get("/BIIB", (req, res, next) => {
   console.log("I am here");
   const BIIB = "BIIB";
   axios
      .get(`https://cloud.iexapis.com/stable/stock/${BIIB}/quote?token=${API_KEY}`
      ).then( ({ data }) => {
         //   console.log(data);
         //   res.redirect("/");
         //    optionally return data created
         console.log("Biogen");
         res.json(data);
         console.log(data.companyName);
         console.log(data.iexRealtimePrice);
         console.log(data.change);
         console.log(data.changePercent);
      })
      .catch(err => {
         console.log(err);
         res.status(500);
         next(err);
      });
});

router.post("/", isAuthenticated, (req, res)=> {
   req.body.UserId = req.session.passport.user.id;
   db.Stock.create(req.body).then((results)=> {
      res.json(results);
   });
   
});

router.get("/", isAuthenticated, (req, res)=> {
   const userId = req.session.passport.user.id;
   db.User.findOne({
      where: {
         id: userId
      }, 
      include: [db.Stock]
   }).then((results)=> {
      res.json(results);
   });
});
module.exports = router;
