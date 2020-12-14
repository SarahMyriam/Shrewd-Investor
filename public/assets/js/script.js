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

      window.location.replace("/portfolio");

   });


   // IBM
   $("#post1").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      $("#surp").show();

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
         alert("IBM stock was added to your portfolio!");
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
         alert("BIIB stock was added to your portfolio!");
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
         alert("TSLA stock was added to your portfolio!");
      });
   });


   $("#add5").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      window.location.replace("/lesson");
   });

   $("#add6").on("click", (event) => {
      event.preventDefault();
      console.log("I was clicked!!!");
      window.location.replace("/lesson2");
   });
});


//Chart with Charts.js
// Our labels along the x-axis
const years = [1975,1980,1985,1990,1995,2000,2005,2010,2015,2020];
// For drawing the lines
const ibmL = [12,16,31,26,24,111,80,120,110,116];

const ctx = document.getElementById("myChart");

if (ctx) {
   const myChart = new Chart(ctx, {
      type: "line",
      data: {
         labels: years,
         datasets: [
            { 
               data: ibmL,
               label: "IBM - long-term"
            }
         ]
      }
   });

   console.log(myChart);
}