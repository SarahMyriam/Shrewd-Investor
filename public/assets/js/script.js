$(document).ready(() => {

   function displayStocks(stockName, priceId, changepriceId, elementId, id) {

      
          $.ajax({
             url: "/api/stocks/" + stockName,
             method: "GET"})
             .then(data => {
            $("#" + priceId).html("$" + data.latestPrice);
            $("#" + changepriceId).html((data.changePercent*100).toFixed(2) + "%");
            console.log($("#" + id));
            $("#" + elementId).attr("data-stockid", id);
         });
    
         // .then((data) => {
         //    console.log(data);
         //    $("#" + priceId).html("$" + data.latestPrice);
         //    $("#" + changepriceId).html((data.changePercent*100).toFixed(2) + "%");
         //    console.log($("#" + id));
         //    $("#" + id).attr("data-stockId", id);
         // });

   }

   displayStocks("IBM", "priceIBM", "changepercentageIBM", "add1", 3);
   displayStocks("TSLA", "priceTesla", "changepercentageTesla", "add3", 1);
   displayStocks("BIIB", "priceBiogen", "changepercentageBiogen", "add2", 2);



   // $(".portfolioBtn").on("click", (event) => {
   //    event.preventDefault();
   //    console.log("I was clicked!!!");
   //    window.location.replace("/portfolio");
   // });

   $(".detailBtn").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      window.location.replace("/IBMdetails");
   });

   $("#add3").on("click", function(event)  {
      event.preventDefault();
      console.log(this);
      const stockId = this.getAttribute('data-stockId');
      $.get( "/api/user_data")
         .then( function(user) {
            console.log("user");
            const favorite = {
               userId : user.id,
               stockId : stockId
            };
            $.ajax({
               type: "POST",
               url: "/api/stocks",
               data: favorite,
               success: function(msg){
                     alert( "Data Saved: " + msg );
               },
               error: function(XMLHttpRequest, textStatus, errorThrown) {
                  alert(errorThrown.message);
               }
             });
         });
      // $.post("/", favorite, function(req, event, res) {
      //    event.preventDefault();
      //    console.log(res);
      // }).then(( )=> {
      //    console.log("hi");
      // }).catch( (err) => {
      //    console.log(err);
      // });
      // window.reload();
      // getFavs();
   });

   

   function getFavs () {
      $.get("/", function(data) {
         res.render("portfolio", {favorite_data: data})
       });
   }


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

});