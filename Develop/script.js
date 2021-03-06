// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare the password textarea text value as a variable
var passwordText = document.querySelector("#password");

// Declare the new password variable
var newPassword = "";

// Declare the variable to store the previously generated password
var oldPassword = "";

// Declare the variable to store a message
var userMessage = "";

// Create variable of posible characters
var possibleCharacters = [
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", ",", "{", "|", "}", "~"],
];

///////////////////////////////////////////////////////////////

// Function to generate the password
function generatePassword() { 

  // If the password text area contains a password, store the value to a variable in case 
  // the user accidentally clicks the generate password button
  if (passwordText.value === newPassword){    
    oldPassword = newPassword;
  }
  // User input via confirms and prompts
  var confirm1 = confirm("Do you want to generate a new password?");

  // If user wants to create a new password
  if (confirm1 === true){

    // Continue user input via prompts and confirms
    var prompt2 = prompt("How many characters do you want your password to contain? \n Please pick from 8-128.");

    // The number of characters that the user chooses parsed to an integer
    var characters = parseInt(prompt2);

    // If the number of characters the user chooses is within the range of 8-128
    if (characters >= 8 && characters <= 128 && prompt2 !== ""){

      // Clear the newPassword variable
      newPassword = "";

      // Continue user input via prompts and confirms
      var confirm3 = confirm("Do you want your password to contain numbers?");
      var confirm4 = confirm("Do you want your password to contain lower case letters?");
      var confirm5 = confirm("Do you want your password to contain upper case letters?");
      var confirm6 = confirm("Do you want your password to contain special characters?");

      // For loop to pick characters
      for (i = 0; i < characters; i++){

        // Generate a random index number
        var charIndex = Math.floor(Math.random() * possibleCharacters.length);

        // If the user wants to include numbers, generate a number
        if (confirm3 === true && charIndex === 0){
          // Generate a random index of the numbers array
          var numIndex = Math.floor(Math.random() * possibleCharacters[0].length);
          // Store the new character
          var newChar = possibleCharacters[0][numIndex];
        }

        // If the user wants to include lower case letters, generate a lower case letter
        else if (confirm4 === true && charIndex === 1){
          // Generate a random index of the lowerLetters array
          var lowerIndex = Math.floor(Math.random() * possibleCharacters[1].length);
          // Store the new character
          var newChar = possibleCharacters[1][lowerIndex];
        }

        // If the user wants to include upper case letters generate an upper case letter
        else if (confirm5 === true && charIndex === 2){
        // Generate a random index of the upperLetters array
        var upperIndex = Math.floor(Math.random() * possibleCharacters[2].length);
        // Store the new character
        var newChar = possibleCharacters[2][upperIndex];
        }

        // If the user wants to a special character generate a special character
        else if (confirm6 === true && charIndex === 3){
          // Generate a random index of the specialChars array
          var specIndex = Math.floor(Math.random() * possibleCharacters[3].length);
          // Store the new character
          var newChar = possibleCharacters[3][specIndex];
        }

        // If the user chooses not to include any characters in the password
        else if (confirm3 === false && confirm4 === false && confirm5 === false && confirm6 === false){
          userMessage = "You did not choose to include any characters in your password.\n\Click the button below to generate a new password.";
          return userMessage;
        }

        // If the random index is of an array that is not to be included in the password, repeat the for loop
        else{
          i = i-1;
          newChar = "";
        }

        //Add the new character to the new password
        newPassword += newChar;
          
      //End of for loop
      }
        
      return newPassword;
      
    // End of if statement
    }

    // If the number of characters entered in the prompt is out of the range
    else if(characters < 8 || characters > 128){
      userMessage = "The number of characters you chose for your password is outside of the range.\n\Click the button below to generate a new password.";
      return userMessage;
    }

    // If the user cancels the password generator when prompted to enter the number of characters
    else{
      // If the password text area text is the user message
      if (passwordText.value === userMessage){
        userMessage = "";
        return userMessage;
      }
      // Else return the old password
      else{
        newPassword = "";
        return oldPassword;
      }
    }

  }

  // If the user cancels the password generator when asked to confirm creation of the password
  else{
    // If the password text area text is the user message
    if (passwordText.value === userMessage){
      userMessage = "";
      return userMessage;
    }
    // Else return the old password
    else{
      newPassword = "";
      return oldPassword;
    }
  }

// End of function
}

///////////////////////////////////////////////////////////////

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

///////////////////////////////////////////////////////////////

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
