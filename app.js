
/* --------Password Generator Psuedocode--------------------------*/
/*
1) Click button -> initiate prompt function
2) Within prompt function, prompt user with password criteria and collect the password construction information (with input validation)
  Criteria includes:
  -password length
  -character types (lowercase, uppercase, numeric, special characters)
3) Take information from user prompts (password length and character types specified)

*/
/*----------------------------------------------------------------*/



// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


class 
