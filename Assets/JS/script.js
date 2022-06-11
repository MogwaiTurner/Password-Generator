// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var selection;

function generatePassword() {

  
  var minMax = (window.prompt("Choose password length for 8-128."));
    while (minMax <= 7 || minMax >= 129) {
      alert("Password must be 8-128 character");
      var minMax = (window.prompt("Choose password length for 8-128."));
  }

  var lowerCasePrompt = window.confirm("Include lowercase letters?");
  var upperCasePrompt = window.confirm("Include uppercase letters?");
  var numbersPrompt = window.confirm("Include numbers?");
  var specialCharPrompt = window.confirm("Include special characters?");
  
    while(lowerCasePrompt === false && upperCasePrompt === false && numbersPrompt === false && specialCharPrompt === false) {
      alert("You must choose at least one parameter");
      var lowerCasePrompt = window.confirm("Include lowercase letters?");
      var upperCasePrompt = window.confirm("Include uppercase letters?");
      var numbersPrompt = window.confirm("Include numbers?");
      var specialCharPrompt = window.confirm("Include special characters?");
    }

  const randomFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
  };
  
  function getLower() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  function getUpper() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  function getNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function getSymbol() {
    const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  

} 

console.log(generatePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
