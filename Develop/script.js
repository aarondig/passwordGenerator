// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  

  var chrCount = prompt ("How long would you like your password to be? (Between 8-128 characters)");
  if (chrCount < 129) {
    if (chrCount > 8) {


  
    var length = parseInt(chrCount);


    var lc = lowercase();
    var uc = uppercase();
  





    function gen(){
    for (var i = 0; i < length; i++) {


      var randomElement = charaterTypes[Math.floor(Math.random() * charaterTypes.length)];
    
      var charaterTypes = [lowercaseChr, uppercaseChr];
    
      var chr = Math.floor(Math.random() * charaterTypes.length);
      console.log(random, charaterTypes[random]);

    }

    function lowercase(){
     for (var i = 0; i < length; i++) {

     var num = Math.floor(Math.random() * 26);

     var lowercaseChr = String.fromCharCode(97 + num);
     }

    
    }
    function uppercase(){
      for (var i = 0; i < length; i++) {
      var num = Math.floor(Math.random() * 26);
      var uppercaseChr = String.fromCharCode(65 + num);
      }
    }

   //passwordText.value = password;



    }
  }
  else {
    alert("Error: Invalid Input");
    }
  }
  else {
    alert("Error: Invalid Input");
  }
}
 // If statement loop
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
