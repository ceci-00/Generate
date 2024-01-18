// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var length = prompt("Enter length of password (between 8 and 128 characters):");

    if (length < 8 || length > 128 || isNaN(length)) {
        alert("Enter valid number between 8 and 128.");
        return "";
    }
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    var allChars = [];
    if (includeUppercase) allChars = allChars.concat(uppercaseChars.split(""));
    if (includeLowercase) allChars = allChars.concat(lowercaseChars.split(""));
    if (includeNumbers) allChars = allChars.concat(numberChars.split(""));
    if (includeSpecialCharacters) allChars = allChars.concat(specialChars.split(""));

    var password = "";
    for (var i = 0; i <= length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    document.querySelector("#password").value = password
    return "";
}

var includeUppercase = confirm("Include Uppercase letters?");
var includeLowercase = confirm("Include Lowercase letters?");
var includeNumbers = confirm("Include Numbers?");
var includeSpecialCharacters = confirm("Include Special Characters");

function generatePasswordBasedonCriteria(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
    if (!includeUppercase && !includeLowercase && !includeNumbers && includeSpecialCharacters) {
        alert("Please select at least one criteria for the password.");
        return "";
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);