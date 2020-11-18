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
