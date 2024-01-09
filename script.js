// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Ask users for password criteria
  let characterLength = parseInt(prompt("How many characters would your password should have? Must be at leas 8."));
  // Check if the entered characterLength is less than 8 or greater than 128
  if (characterLength < 8 || characterLength >128){
   alert("Sorry,must be a value between 8 and 128.") 
   return null;
  }
  
  let characterTypeUpper = confirm("Would you like Uppercase characters?");
  let characterTypeLower = confirm("Would you like Lower Case characters?");
  let characterTypeNum = confirm("Would you like any numbers?");
  let characterTypeSpecial = confirm("Would you like Special characters?");


  // Validate the user input
  if(!characterTypeUpper && !characterTypeLower && !characterTypeNum && !characterTypeSpecial) {
  alert("You must select at least one character type.");
  return null;
  }

  // Creat an object to store user choices
  let options = {
  length:characterLength,
  chars:[]
  };

  // Add selected character types to the options object
  if (characterTypeLower) {
  options.chars.push(...lowerCasedCharacters);
  } // Check if the user wants lowercase characters in the password
  if(characterTypeUpper) {
  options.chars.push(...upperCasedCharacters);
  }// Check if the user wants uppercase characters in the password
  if (characterTypeNum) {
  options.chars.push(...numericCharacters);
  }// Check if the user wants numeric characters in the password
  if (characterTypeSpecial) {
  options.chars.push(...specialCharacters);
  }// Check if the user wants special characters in the password 

  return options;

}

// Function for getting a random element from an array
function getRandom(arr) {
  // Generate a random index within the length of the array 'arr'
  return arr[Math.floor(Math.random() * arr.length)];
}


// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  // User canceled input
  if (options === null) {
    return '';
  }

  let password = '';
  
  //Generate random password using options
  for(let i = 0; i < options.length; i++) {
    password += getRandom(options.chars);
  }
  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);