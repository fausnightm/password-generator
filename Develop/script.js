var generateBtn = document.querySelector("#generate");
// document.getElementById("gennerate").innerHTML = "hello world";


var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");



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

 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



