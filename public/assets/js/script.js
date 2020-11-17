const { combineTableNames } = require("sequelize/types/lib/utils");

$(document).ready(() => {

   function displayStocks(stockName, priceId, changepriceId) {

      $.ajax({
         url: "/api/stocks/" + stockName,
         method: "GET"
      })
         .then((data) => {
            $("#" + priceId).html("$" + data.latestPrice);
            $("#" + changepriceId).html((data.changePercent*100).toFixed(2) + "%");
         });

   }

   displayStocks("IBM", "priceIBM", "changepercentageIBM");
   displayStocks("TSLA", "priceTesla", "changepercentageTesla");
   displayStocks("BIIB", "priceBiogen", "changepercentageBiogen");



   // $(".portfolioBtn").on("click", (event) => {
   //    event.preventDefault();
   //    console.log("I was clicked!!!");
   //    // const stockId = $(this).children(".stock_id").val();
   //    // console.log(stockId);
   //    // $.ajax({
   //    //    method: "PUT",
   //    //    url: "/portfolio/" + stockId
   //    // }).then((data) => {
   //    //    console.log(data);
   //    window.location.replace("/portfolio");
   //    // });
   // });

   $(".detailBtn").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      // $.ajax({
      //    method: "PUT",
      //    url: "/portfolio/" + stockId
      // }).then((data) => {
      //    console.log(data);
      window.location.replace("/IBMdetails");
      // });
   });



   //New feature: save API data as a sequelize object - not working
   // $("#add1").on("click", () => {
   //    var stock = {
   //       name: 
   //    }
   // });

   // app.post("/api/stock_data", (req, res) => {
   //    console.log(req.body);
   //    db.Stock.create({
   //       name: data.companyName,
   //       price: data.iexRealtimePrice
   //    })
   //       .then((dbStock) => {
   //          res.json(dbStock);
   //       });
   // });
   // // console.log(data.changePercent);
   // console.log("done done done!");

   $("#add3").on("click", () => {
      console.log("clicked");
      const favorite = {
         name: $("#tesla-name").text(),
         currentPrice: $("#priceTesla").text(),
         dailyChange: $("#changePercentTesla").text()
      }
   $.post("/add/stocks", favorite, function(favData) {
      window.location.href="/portfolio";
   })

})});