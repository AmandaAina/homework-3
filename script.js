// Assignment code here
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const password = [];
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }
  
  return password.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const password = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }

  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(12);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
