// Assignment code here
const specialCharacterArr = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","\"","\\", "`", "_", "@", ">", "<", "=", ";", ".", "#", "%"];
const uppcaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function generatePassword () {
  // variable initialization
  let userSpecificArr = [];
  let passwordLength;
  let uppercase;
  let lowercase;
  let special;
  let numbers;

  window.alert("We are going to ask you a series of questions to determine your perfect password");

  // Validation for the password to ensure the user selected a range between 8-128
  function passwordLengthValidation () {
    passwordLength = window.prompt("How long would you like your password to be? Select between 8 - 128");
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === false) {
      window.alert("You must select a range between 8 - 128");
      passwordLengthValidation();
    } 
  }
  passwordLengthValidation();


  // Validation to ensure at least one is selected
  function passwordCustomizationValidation () {
    uppercase = window.confirm("Would you like Capital Letters in your password?");
    lowercase = window.confirm("Would you like lowercase letters in your password?");
    numbers = window.confirm("Would you like numbers to be included in your password?");
    special = window.confirm("Would you like special characters in your password?");

    if (!uppercase && !lowercase && !numbers && !special) {
      window.alert("You must select at least one requirement");
      passwordCustomizationValidation();
    }
  }
  passwordCustomizationValidation();


 

  // Logic for custom array based on user Input
  if (uppercase && !lowercase && !numbers && !special) {
    userSpecificArr = [...uppcaseArr]
  } else if (lowercase && !uppercase && !numbers && !special) {
    userSpecificArr = [...lowercaseArr]
  } else if (special && !uppercase && !numbers && !lowercase) {
    userSpecificArr = [...specialCharacterArr]
  } else if (numbers && !uppercase && !lowercase && !special) {
    userSpecificArr = [...numbers]
  } else if (uppercase && lowercase && !numbers && !special) {
    userSpecificArr = [...uppcaseArr, ...lowercaseArr]
  } else if (uppercase && special && !lowercase && !numbers) {
    userSpecificArr = [...uppcaseArr, ...specialCharacterArr]
  } else if (uppercase && numbers && !lowercase && !special) { 
    userSpecificArr = [...uppcaseArr, ...numberArr]
   }else if (lowercase && special && !numbers && !uppercase) {
    userSpecificArr = [...lowercaseArr, ...specialCharacterArr]
  } else if (lowercase && numbers && !uppercase && !special) {
    userSpecificArr = [...lowercaseArr, ...numberArr]
  } else if (special && numbers && !uppercase && !lowercase) {
    userSpecificArr = [...specialCharacterArr, ...numberArr]
  } else if (uppercase && lowercase && special && !numbers) {
    userSpecificArr = [...uppcaseArr, ...lowercaseArr, ...specialCharacterArr]
  } else if (uppercase && lowercase && numbers && !special) {
    userSpecificArr = [...uppcaseArr, ...lowercaseArr, ...numberArr]
  } else if (lowercase && special && numbers && !uppercase) {
    userSpecificArr = [...lowercaseArr, ...specialCharacterArr, ...numberArr]
  } else if (special && numbers && uppercase && !lowercase) {
    userSpecificArr = [...specialCharacterArr, ...numberArr, ...uppcaseArr]
  } else {
    userSpecificArr = [...numberArr, ...uppcaseArr, ...lowercaseArr, ...specialCharacterArr]
  }


}









// Get references to the #generate element
let generateBtn = document.getElementById("generate");
let resetBtn = document.getElementById("reset")


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  passwordText.value = password;
}

// Additional reset password button aded
function resetPassword () {
  document.getElementById('password').innerHTML = null;
  userSpecificArr = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener('click', resetPassword)