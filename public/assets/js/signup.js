$(document).ready(() => {
   // Getting references to our form and input
   const signUpForm = $("form.signup");
   const emailInput = $("input#email-input");
   const passwordInput = $("input#password-input");
   const nameInput = $("input#name-input");
   const sfxRight = new Audio("assets/sfx/correct.wav");
   const sfxWrong = new Audio("assets/sfx/incorrect.wav");


   // When the signup button is clicked, we validate the email and password are not blank
   signUpForm.on("submit", (event) => {
      event.preventDefault();
      const userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim(),
         name: nameInput.val().trim()
      };

      if (!userData.email || !userData.password || !userData.name) {
         sfxWrong.play();
         alert("Please fill out all the fields!");
         return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.name);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");

      sfxRight.play();
   });

   // Does a post to the signup route. If successful, we are redirected to the members page
   // Otherwise we log any errors
   function signUpUser(email, password, name) {
      $.post("/api/signup", {
         email: email,
         password: password,
         name: name
      })
         .then((data) => {
            window.location.replace("/members");
            console.log(data);
            // If there's an error, handle it by throwing up a bootstrap alert
         })
         .catch(handleLoginErr);
   }

   function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
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