$(document).ready(() => {
   // Getting references to our form and inputs
   const sfxRight = new Audio("assets/sfx/correct.wav");
   const sfxWrong = new Audio("assets/sfx/incorrect.wav");

   const loginForm = $("form.login");
   const emailInput = $("input#email-input");
   const passwordInput = $("input#password-input");

   // When the form is submitted, we validate there's an email and password entered
   loginForm.on("submit", (event) => {
      event.preventDefault();
      const userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim(),
      };

      if (!userData.email || !userData.password) {
         sfxWrong.play();
         alert("Please fill out all the fields!");
         return;
      }

      sfxRight.play();
      // loginForm.setAttribute("class", "hide");
      // setTimeout(() => {
      //    loginForm.setAttribute("class", "hide");
      // }, 3000);

      // If we have an email and password we run the loginUser function and clear the form
      // sfxRight.play()
      //    .then(() => {
      //       loginUser(userData.email, userData.password);
      //       emailInput.val("");
      //       passwordInput.val("");
      //    });
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
   });

   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
   function loginUser(email, password) {
      $.post("/api/login", {
         email: email,
         password: password
      })
         .then(() => {
            window.location.replace("/members");
            // If there's an error, log the error
         })
         .catch((err) => {
            console.log(err);
         });
   }
});



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