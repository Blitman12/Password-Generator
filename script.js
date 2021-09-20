// Assignment code here
const specialArr = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","\"","\\", "`", "_", "@", ">", "<", "=", ";", ".", "#", "%"];
const uppcaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let counter = 0;

function generatePassword () {
  // variable initialization
  let userSpecificArr = [];
  let passwordArr = [];
  let passwordLength;
  let uppercase;
  let lowercase;
  let special;
  let number;


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


  // Validation to ensure at least one is selected and Special Array Creation
  function passwordCustomizationValidation () {
    uppercase = window.confirm("Would you like Capital Letters in your password?");
    if (uppercase) {
      userSpecificArr = [...userSpecificArr, ...uppcaseArr];
      let randomValue = uppcaseArr[Math.floor(Math.random() * uppcaseArr.length)];
      passwordArr.push(randomValue);
      counter ++;
    }

    lowercase = window.confirm("Would you like lowercase letters in your password?");
    if (lowercase) {
      userSpecificArr = [...userSpecificArr, ...lowercaseArr];
      let randomValue = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
      passwordArr.push(randomValue);
      counter ++;
    }

    number = window.confirm("Would you like numbers to be included in your password?");
    if (number) {
      userSpecificArr = [...userSpecificArr, ...numberArr]
      let randomValue = numberArr[Math.floor(Math.random() * numberArr.length)];
      passwordArr.push(randomValue);
      counter ++
    }
  
    special = window.confirm("Would you like special characters in your password?");
    if (special) {
      userSpecificArr = [...userSpecificArr, ...specialArr]
      let randomValue = specialArr[Math.floor(Math.random() * specialArr.length)];
      passwordArr.push(randomValue);
      counter ++
    }

    if (!uppercase && !lowercase && !number && !special) {
      window.alert("You must select at least one requirement");
      userSpecificArr = [];
      passwordCustomizationValidation();
    }
  }
  passwordCustomizationValidation();





  // Logic for the password Generator
  for (let i = 0; i < (passwordLength - counter); i++) {
    let randomValue = userSpecificArr[Math.floor(Math.random() * userSpecificArr.length)];
    passwordArr.push(randomValue)
  }


  // returns the array in a String without any seperator
  return passwordArr.join("")
}


// Get references to the #generate element
let generateBtn = document.getElementById("generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  passwordText.value = password;
  counter = 0;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
