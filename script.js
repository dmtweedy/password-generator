var generateBtn = document.querySelector("#generate")

function generatePassword() {
  var length = parseInt(prompt("How many characters do you want your password to be?"))
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length. Please enter a number between 8 and 128."))
  }
  alert(`You chose: ${length}`)
  var includeLowercase = confirm("Do you want lowercase characters in your password? (OK for yes, Cancel for no)")
  if (includeLowercase) {
    alert("You have selected lowercase characters.")
  } else {
    alert("You have selected NO to lowercase characters.")
  }
  var includeUppercase = confirm("Do you want uppercase characters in your password? (OK for yes, Cancel for no)")
  if (includeUppercase) {
    alert("You have selected uppercase characters.")
  } else {
    alert("You have selected NO to uppercase characters.")
  }
  var includeNumbers = confirm("Do you want numbers in your password? (OK for yes, Cancel for no)")
  if (includeNumbers) {
    alert("You have selected numeric characters.")
  } else {
    alert("You have selected NO to numeric characters.")
  }
  var includeSpecials = confirm("Do you want special characters in your password? (OK for yes, Cancel for no)")
  if (includeSpecials) {
    alert("You have selected special characters.")
  } else {
    alert("You have selected NO to special characters.")
  }
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChars = "0123456789"
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>/?"
  var password = ""
  var availableChars = ""
  if (includeLowercase) {
    availableChars += lowercaseChars
  }
  if (includeUppercase) {
    availableChars += uppercaseChars
  }
  if (includeNumbers) {
    availableChars += numericChars
  }
  if (includeSpecials) {
    availableChars += specialChars
  }
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length)
    password += availableChars[randomIndex]
  }
  return password
}

function writePassword() {
  var password = generatePassword()
  var passwordTxt = document.querySelector("#password")
  passwordTxt.value = password
}

generateBtn.addEventListener("click", writePassword)