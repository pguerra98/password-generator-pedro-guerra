// Assignment Code
var generateBtn = document.querySelector("#generate");
var LCCharacters = "abcdefghjklmnopqrstuvwxyz";
var UCCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NumberCharacters = "0123456789";
var SpecialCharacters = "!@#$%^&*()_+=-{}[];'<>,.?/|`~";
var LengthofPassword;
var NumberCharactersyesorno;
var SpecialCharactersyesorno;
var UppercaseCharactersyesorno;

// The function below will determine the total length of the password generated

function lengthgenerator() {
  LengthofPassword = prompt("Enter below the total number of characters that you would like your password to have, anywhere from 8-128 characters");

  if (LengthofPassword < 8) {
    alert("Password requirements of being between 8-128 characters have not been met");
    lengthgenerator();
  }
  else if (LengthofPassword > 128) {
    alert("Password requirements of being between 8-128 characters have not been met");
    lengthgenerator();
  }
  else if (isNaN(LengthofPassword)) {
    alert("Password requirements of being between 8-128 characters have not been met");
    lengthgenerator();
  }
  else {
    alert("Thankyou! Now, please answer the following three questions for further requirements for your password!");
  }
  return LengthofPassword;
}

// The function below will determine whether to include special characters or not for the password being generated

function checkingforspecialcharacters() {
  SpecialCharactersyesorno = prompt("Do you wish to insert any special characters for this password? \n (Yes or no)");
  SpecialCharactersyesorno = SpecialCharactersyesorno.toLowerCase();

  if (SpecialCharactersyesorno === null || SpecialCharactersyesorno === "") {
    alert("Please state Yes or No in order to proceed");
    checkingforspecialcharacters();
  }
  else if (SpecialCharactersyesorno === "y" || SpecialCharactersyesorno === "yes" || SpecialCharactersyesorno === "ye") {
    SpecialCharactersyesorno = true;
    return SpecialCharactersyesorno;
  }
  else if (SpecialCharactersyesorno === "n" || SpecialCharactersyesorno ==="no") {
    SpecialCharactersyesorno = false;
    return SpecialCharactersyesorno;
  }
  else {
    alert("Please state Yes or No in order to proceed");
    checkingforspecialcharacters();
  }
  return checkingforspecialcharacters;
}

// The function below will determine whether to include uppercase characters or not for the password being generated

function checkingforuppercasecharacters() {
  UppercaseCharactersyesorno = prompt("Do you wish to insert any upper case characters for this password? \n (Yes or no)");
  UppercaseCharactersyesorno = UppercaseCharactersyesorno.toLowerCase();

  if (UppercaseCharactersyesorno === null || UppercaseCharactersyesorno === "") {
    alert("Please state Yes or No in order to proceed");
    checkingforuppercasecharacters();
  }
  else if (UppercaseCharactersyesorno === "y" || UppercaseCharactersyesorno === "yes" || UppercaseCharactersyesorno === "ye") {
    UppercaseCharactersyesorno = true;
    return UppercaseCharactersyesorno;
  }
  else if (UppercaseCharactersyesorno === "n" || UppercaseCharactersyesorno ==="no") {
    UppercaseCharactersyesorno = false;
    return SpecialCharactersyesorno;
  }
  else {
    alert("Please state Yes or No in order to proceed");
    checkingforuppercasecharacters();
  }
  return checkingforuppercasecharacters;
}

// The function below will determine whether to include number characters or not for the password being generated

function checkingfornumbercharacters() {
  NumberCharactersyesorno = prompt("Do you wish to insert any number characters for this password? \n (Yes or no)");
  NumberCharactersyesorno = NumberCharactersyesorno.toLowerCase();

  if (NumberCharactersyesorno === null || NumberCharactersyesorno === "") {
    alert("Please state Yes or No in order to proceed");
    checkingfornumbercharacters();
  }
  else if (NumberCharactersyesorno === "y" || NumberCharactersyesorno === "yes" || NumberCharactersyesorno === "ye") {
    NumberCharactersyesorno = true;
    return NumberCharactersyesorno;
  }
  else if (NumberCharactersyesorno === "n" || NumberCharactersyesorno ==="no") {
    NumberCharactersyesorno = false;
    return NumberCharactersyesorno;
  }
  else {
    alert("Please state Yes or No in order to proceed");
    checkingfornumbercharacters();
  }
  return checkingfornumbercharacters;
}

// The function below will determine the password based on the selections made from the user

function generatePassword() {
  lengthgenerator();
  console.log(LengthofPassword);
  checkingforspecialcharacters();
  console.log(SpecialCharactersyesorno);
  checkingforuppercasecharacters();
  console.log(UppercaseCharactersyesorno);
  checkingfornumbercharacters();
  console.log(NumberCharactersyesorno);

  var givenLCCcharacters = LCCharacters;
  var passwordfinal = "";

  if (SpecialCharactersyesorno && UppercaseCharactersyesorno && NumberCharactersyesorno) {
    givenLCCcharacters += UCCharacters + SpecialCharacters + NumberCharacters;
  }
  else if (SpecialCharactersyesorno && UppercaseCharactersyesorno) {
    givenLCCcharacters += SpecialCharacters + UCCharacters;
  }
  else if (SpecialCharactersyesorno && NumberCharactersyesorno) {
    givenLCCcharacters += SpecialCharacters + NumberCharacters;
  }
  else if (UppercaseCharactersyesorno && NumberCharactersyesorno) {
    givenLCCcharacters += UCCharacters + NumberCharacters;
  }
  else if (SpecialCharactersyesorno) {
    givenLCCcharacters += SpecialCharacters;
  }
  else if (UppercaseCharactersyesorno) {
    givenLCCcharacters += UCCharacters;
  }
   else if (NumberCharactersyesorno) {
    givenLCCcharacters += NumberCharacters;
   }
   else {
    givenLCCcharacters;
   }

   for(var i = 0; i < LengthofPassword; i++) {
    passwordfinal += givenLCCcharacters.charAt(Math.floor(Math.random() * givenLCCcharacters.length));
   }
   return passwordfinal;
}

function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);