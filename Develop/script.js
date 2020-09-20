// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  

  var chrCount = prompt ("How long would you like your password to be? (Between 8-128 characters)");
  var chrLength = parseInt(chrCount);
  if (chrCount > 128 || chrCount < 8) {
    alert("Error: Invalid Input");
  }
  else {
  var uppercase = confirm("Include uppercase letters?");
  var lowercase = confirm("Include lowercase letters?");
  var number = confirm("Include numbers?");
  var special = confirm("Include special characters?");
  
  
  }
        
   main();
          
   function main(){
    var characterTypes = [];
    if (uppercase === true){
      characterTypes.push("uppercase");
      }
    if (lowercase === true){
      characterTypes.push("lowercase");
      }
    if (number === true){
      characterTypes.push("number");
      }
    if (special === true){
      characterTypes.push("special");
      }
      document.getElementById("password").placeholder = "";
      for (var i = 0; i < chrLength; i++) {
        
        var chrChoice = characterTypes[Math.floor(Math.random() * characterTypes.length)];
          
        if (chrChoice==="lowercase"){
            
          var num = Math.floor(Math.random() * 26);
          var lowercaseChr = String.fromCharCode(97 + num);
          document.getElementById("password").placeholder += lowercaseChr;

          console.log(lowercaseChr);
           
        }
        if (chrChoice==="uppercase"){
            
          var num = Math.floor(Math.random() * 26);
          var uppercaseChr = String.fromCharCode(65 + num);
          document.getElementById("password").placeholder += uppercaseChr;

          console.log(uppercaseChr);
        }
        if (chrChoice==="number"){
              
          var num = Math.floor(Math.random() * 9);
          var numberChr = String.fromCharCode(48 + num);
          document.getElementById("password").placeholder += numberChr;

          console.log(numberChr);
        }
        if (chrChoice==="special"){
                
          var num = Math.floor(Math.random() * 14);
          var specialChr = String.fromCharCode(33 + num);
          document.getElementById("password").placeholder += specialChr;
          console.log(specialChr);
          
        }
        console.log("end");
      }
          
            






   //passwordText.value = password;

    
  }
}


 // If statement loop
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
