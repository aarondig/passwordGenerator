// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  

  var chrCount = prompt ("How long would you like your password to be? (Between 8-128 characters)");
  if (chrCount < 129 || chrCount > 8) {

      var length = parseInt(chrCount);

         
        upperlower();
          


         function upperlower(){
          for (var i = 0; i < length; i++) {
  
          var charaterTypes = ["uppercase", "lowercase"];
          var chrChoice = charaterTypes[Math.floor(Math.random() * charaterTypes.length)];

          
          if (charaterTypes="lowercase"){
            
            var num = Math.floor(Math.random() * 26);
            var lowercaseChr = String.fromCharCode(97 + num);

            console.log(lowercaseChr);
           
         }
          if (charaterTypes="uppercase"){
            
            var num = Math.floor(Math.random() * 26);
            var uppercaseChr = String.fromCharCode(65 + num);

            console.log(uppercaseChr);
         }
        }
          






   //passwordText.value = password;

    }
  }
  else {
    alert("Error: Invalid Input");
    }
  
}
 // If statement loop
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
