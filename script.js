// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordOptions = [];
  while (true) {
    var passwordLength = parseInt(
      prompt(
        "Please enter a password length (value must be 10 to 64 characters)"
      )
    );
    if (passwordLength < 10 || passwordLength > 64) {
      alert(
        "Password length value must be 10 to 64 characters Please try again"
      );
    } else {
      passwordOptions.push(passwordLength);
      break;
    }
  }
  while (true) {
    var lowerCase = prompt(
      "Would you like to include lower case characters (yes/no)?"
    ).toLowerCase();
    var upperCase = prompt(
      "Would you like to include upper case characters (yes/no)?"
    ).toLowerCase();
    var numeric = prompt(
      "Would you like to include numeric characters (yes/no)?"
    ).toLowerCase();
    var specialChar = prompt(
      "Would you like to include special characters characters (yes/no)?"
    ).toLowerCase();
    if (
      lowerCase == "yes" ||
      upperCase == "yes" ||
      numeric == "yes" ||
      specialChar == "yes"
    ) {
      passwordOptions.push(lowerCase, upperCase, numeric, specialChar);
      break;
    } else {
      alert("At least one character type must be selected. Please try again");
    }
  }
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  randIndex = Math.floor(Math.random() * (arr.length + 1));
  return arr[randIndex];
}

// Function to generate password with user input
function generatePassword() {
  return "Hello";
}

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

console.log(
  getRandom(
    upperCasedCharacters.concat(lowerCasedCharacters, specialCharacters)
  )
);
