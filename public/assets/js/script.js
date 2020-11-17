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



   $(".portfolioBtn").on("click", (event) => {
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


});