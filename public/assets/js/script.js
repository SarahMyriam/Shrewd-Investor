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



   $("#add4").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      // $.ajax({
      //    method: "PUT",
      //    url: "/portfolio/" + stockId
      // }).then((data) => {
      //    console.log(data);
      window.location.replace("/portfolio");
      // });
   });

   // $(".detailBtn").on("click", (event) => {
   //    event.preventDefault();
   //    console.log("I was clicked!!!");
   //    // const stockId = $(this).children(".stock_id").val();
   //    // console.log(stockId);
   //    // $.ajax({
   //    //    method: "PUT",
   //    //    url: "/portfolio/" + stockId
   //    // }).then((data) => {
   //    //    console.log(data);
   //    window.location.replace("/IBMdetails");
   //    // });
   // });



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

   // IBM
   $("#post1").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      $("#surp").show();
      // const stockId = $(this).children(".stock_id").val();
      // console.log(stockId);
      $.ajax({
         method: "GET",
         url: "/api/stocks"
      }).then((data) => {
         console.log(data);
         window.location.replace("/ibm111");
      });
   });
   
   $("#add1").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");

      const newStock = {
         name: "International Business Machines",
         symbol: "IBM",
         price: 118.7,
         changePercent: 0.06
      };

      $.post("/api/stocks", newStock, () => {
         console.log(newStock);
         alert("Peter, IBM stock was added to your portfolio!");
      });

   });





   // Biogen
   $("#post2").on("click", (event) => {
      event.preventDefault();

      $.ajax({
         method: "GET",
         url: "/api/stocks"
      }).then((data) => {
         console.log(data);
         window.location.replace("/bio222");
      });
   });
   
   $("#add2").on("click", (event) => {
      event.preventDefault();
      const newStock = {
         name: "Biogen",
         symbol: "BIIB",
         price: 246.9,
         changePercent: -0.07
      };

      $.post("/api/stocks", newStock, () => {
         console.log(newStock);
         alert("Peter, Biogen stock was added to your portfolio!");
      });

   });






   // Tesla
   $("#post3").on("click", (event) => {
      event.preventDefault();
      $.ajax({
         method: "GET",
         url: "/api/stocks"
      }).then((data) => {
         console.log(data);
         window.location.replace("/tes333");
      });
   });
   
   $("#add3").on("click", (event) => {
      event.preventDefault();

      const newStock = {
         name: "Tesla",
         symbol: "TSLA",
         price: 479.55,
         changePercent: 0.08
      };

      $.post("/api/stocks", newStock, () => {
         console.log(newStock);
         alert("Peter, Tesla stock was added to your portfolio!");
      });

   });


   $("#add5").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");

      window.location.replace("/lesson");
      // });
   });


});