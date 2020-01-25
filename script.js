
let numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialChar = ['!', '#', '$', '%', '&','(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[', ']', '^', '_', '{','|', '}', '~'];

let askSpecial = null;
let askUpper = null;
let askLower = null; 
let askNumbers = null;

function passwordVar () {

let characters = null;

    while (characters < 8 || characters > 128 || isNaN(characters)) {
    characters = parseInt(prompt('How many characters do you want in your password?'));
        if (characters < 8) {
            alert ("Your password must be at least 8 characters.");
        }
    
        else if (characters > 128) {
            alert ("Your password must be less than 128 characters.");
        }
    
        else if (isNaN(characters)) {
            alert ("Your answer should be a number.");
        }   
         
    }
    


    while (!(askSpecial  || askUpper || askLower || askNumbers )){
    askSpecial = confirm ("Do you want special characters on your password?");
    askUpper = confirm ("Do you want Upper Case letters on your password?");
    askLower = confirm ("Do you want Lower Case letters on your password?");
    askNumbers = confirm ("Do you want numbers on your password?")
            
            if (askLower === false && askNumbers === false && askSpecial === false && askUpper === false) {
                alert ("You must choose at least 1 type of character.");
            }
        
    }

let passStructure = {characters: characters, askSpecial: askSpecial, askUpper: askUpper, askLower: askLower, askNumbers: askNumbers};
    
 return passStructure;
}



function randomizer (character) {
    var randIndex = Math.floor(Math.random() * character.length);
    var randElement = character[randIndex];
    return randElement;
}



function writePassword () {
    let variety = passwordVar();
    let result = [];
    let possChar = [];
    let finalChar = [];
    let currentLength = 0;

    while (true){
        if (variety.askSpecial) {
            possChar = possChar.concat(specialChar);
            finalChar.push(randomizer(specialChar));
            currentLength++;
        }
        
        if (currentLength === variety.characters) {
            break;
        }
    
        if (variety.askUpper) {
            possChar = possChar.concat(upperCase);
            finalChar.push(randomizer(upperCase));
            currentLength++;
        }

        if (currentLength === variety.characters) {
            break;
        }

        if (variety.askLower) {
            possChar = possChar.concat(lowerCase);
            finalChar.push(randomizer(lowerCase));
            currentLength++;
        }

        if (currentLength === variety.characters) {
            break;
        }

        if (variety.askNumbers) {
            possChar = possChar.concat(numberChar);
            finalChar.push(randomizer(numberChar));
            currentLength++;
        }

        if (currentLength === variety.characters) {
            break;
        }
    }
    

    return finalChar.join('')
}

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function makePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", makePassword);

makePassword ();
