var generateBtn = document.querySelector("#generate");



var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Assignment code here

// Psuedo Code:
  // Add event listener to click button
  // once buttom in clicked, I am presented with prompts
  // Prompt 1: character length
  // Prompt 2: lowercase
  // Prompt 3: uppercase
  // Prompt 4: numeric
  // Prompt 5 special characters
  // When prompt is answered, password is generated.
  // displayed as alert or written to the page.

var 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



