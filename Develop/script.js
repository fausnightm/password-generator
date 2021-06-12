// Set static variables
  
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCharArr = upperChar.split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var lowerCharArr = lowerChar.split("");
var num = "0123456789";
var numArr = num.split("");
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = symbol.split("");

// Main function = Password Generation

function generatePass(){
 var allChars = [];
 var resultPass = "";

// Set dynamic variables

 var Totlength = prompt("How many characters would you like your password to be?");

 if(Totlength <8 || Totlength > 128){
     alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
 }

}
