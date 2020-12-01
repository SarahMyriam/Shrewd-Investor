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


// background color script



const colors = new Array(
   [62,35,255],
   [60,255,60],
   [255,35,98],
   [45,175,230],
   [255,0,255],
   [255,128,0]);
 
let step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
const colorIndices = [0,1,2,3];
 
//transition speed
const gradientSpeed = 0.002;
 
function updateGradient()
{
   
   if ( $===undefined ) {return;}
   
   const c0_0 = colors[colorIndices[0]];
   const c0_1 = colors[colorIndices[1]];
   const c1_0 = colors[colorIndices[2]];
   const c1_1 = colors[colorIndices[3]];
 
   const istep = 1 - step;
   const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
   const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
   const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
   const color1 = "rgb("+r1+","+g1+","+b1+")";
 
   const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
   const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
   const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
   const color2 = "rgb("+r2+","+g2+","+b2+")";
 
   $("#gradient").css({
      background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
   
   step += gradientSpeed;
   if ( step >= 1 )
   {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
   
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
   
   }
}

setInterval(updateGradient,10);


// Our labels along the x-axis
const years = [1975,1980,1985,1990,1995,2000,2005,2010,2015,2020];
// For drawing the lines
const ibmL = [12,16,31,26,24,111,80,120,110,116];

const ctx = document.getElementById("myChart");
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