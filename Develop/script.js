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
     alert("Your password must be between 8 and 128 characters!\nPlease start over.");
 }

// Confirm the rest of character conditions
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
         Array.prototype.push.apply(allChars, upperCharArr);
     }

     if(confirm("Would you like your password to contain lower case letters?")){
         Array.prototype.push.apply(allChars, lowerCharArr);
     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allChars, numArr);
     }

     if(confirm("Would you like your password to contain symbolbols?")){
         Array.prototype.push.apply(allChars, symbolArr);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }

// Run for loop to use confirmed information and generate password as a result

     else{
         for(var i=0; i<Totlength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

// Display the result

     document.getElementById("password").innerHTML = resultPass;
}
