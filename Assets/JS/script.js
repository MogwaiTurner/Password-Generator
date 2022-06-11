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

    if (lowerCasePrompt && upperCasePrompt && numbersPrompt && specialCharPrompt) {
      selection = lowerCase.concat(upperCase, numbers, specialChar);
    }
    else if (lowerCasePrompt && upperCasePrompt && numbersPrompt) {
      selection = lowerCase.concat(upperCase, numbers);
    }
    else if (lowerCasePrompt && upperCasePrompt && specialCharPrompt) {
      selection = lowerCase.concat(upperCase, specialChar);
    }
    else if (lowerCasePrompt && numbersPrompt && specialCharPrompt) {
      selection = lowerCase.concat(numbers, specialChar);
    }
    else if (upperCasePrompt && numbersPrompt && specialCharPrompt) {
      selection = upperCase.concat(numbers, specialChar);
    }
    else if (lowerCasePrompt && upperCasePrompt) {
      selection = lowerCase.concat(upperCase);
    }
    else if (lowerCasePrompt && specialCharPrompt) {
      selection = lowerCase.concat(specialChar);
    }
    else if (lowerCasePrompt && numbersPrompt) {
      selection = lowerCase.concat(numbers);
    }
    else if (upperCasePrompt && numbersPrompt) {
      selection = upperCase.concat(numbers);
    }
    else if (upperCasePrompt && specialCharPrompt) {
      selection = upperCase.concat(specialChar);
    }
    else if (numbersPrompt && specialCharPrompt) {
      selection = numbers.concat(specialChar);
    }
    else if (upperCasePrompt) {
      selection = upperCase;
    }
    else if (lowerCasePrompt) {
      selection = lowerCase;
    }
    else if (numbersPrompt) {
      selection = numbers;
    }
    else if (specialCharPrompt) {
      selection = specialChar;
    }

    var randomPassword = ""

    for (var i = 0; i < minMax; i++) {
      randomPassword = randomPassword + selection[Math.floor(Math.random() * selection.length)];
      
    }
    return randomPassword;  

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
