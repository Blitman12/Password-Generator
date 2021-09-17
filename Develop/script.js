
// Assignment code here
function generatePassword () {
  // variable initialization
  let passwordLength;
  let uppercase;
  let lowercase;
  let special;


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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener('click', resetPassword)