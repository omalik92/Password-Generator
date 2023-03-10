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
    var lowerCase = confirm(
      "Would you like to include lower case characters (yes/no)?"
    );
    var upperCase = confirm(
      "Would you like to include upper case characters (yes/no)?"
    );
    var numeric = confirm(
      "Would you like to include numeric characters (yes/no)?"
    );
    var specialChar = confirm(
      "Would you like to include special characters characters (yes/no)?"
    );
    if (
      lowerCase == true ||
      upperCase == true ||
      numeric == true ||
      specialChar == true
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
  randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  //remove 1 item at postion 1 and sets it equal to passwordLen
  var passwordLen = passwordOptions.splice(0, 1);
  //remaining items in passwordOPtions set equal to passwordTypes
  var passwordTypes = passwordOptions;

  var chars = [
    lowerCasedCharacters,
    upperCasedCharacters,
    numericCharacters,
    specialCharacters,
  ];
  //for loop for 4 options. if yes is selected within option array concat array to final options array
  //could have used map instead of for loop
  var selectArray = [];
  for (i = 0; i < passwordOptions.length; i++) {
    if (passwordTypes[i] === true) {
      selectArray = selectArray.concat(chars[i]);
    }
  }
  //for loop for number of char select random char using function and add to string
  //can use map to simplify this.
  password = "";
  for (i = 0; i < passwordLen[0]; i++) {
    password = password + getRandom(selectArray);
  }
  //return final password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //setting html value of #password to password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
