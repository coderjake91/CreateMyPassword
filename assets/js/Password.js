
//class Password {
 //create constructor function with proto
    // constructor(){
    //     this.passLength;
    // }

let passLength = 50;
let passPreferences = [];

//method that prompts user and constructs password preferences

function buildPassword(){
    window.prompt("Welcome to CreateMyPassword! Let's step through a few password preferences in order to generate your new password...");
}

function passPrompt(){
    
    passLength = window.prompt('What length would you like your password to be? (choose a number between 8 and 128 characters');

    passLength = parseInt(passLength);

        while(!Number.isSafeInteger(passLength) || passLength > 128 || passLength < 8){
            window.alert('You have not correctly chosen a password length...');
            passPrompt();
        }

    passPreferences[0] = window.confirm('Would you like to include lowercase characters?');
    passPreferences[1] = window.confirm('Would you like to include uppercase characters?');
    passPreferences[2] = window.confirm('Would you like to include numeric characters?');
    passPreferences[4] = window.confirm('Would you like to include special characters?');

    console.log(passLength);
    passPreferences.forEach(preference => console.log(preference));
}

//method that produces an array of random integers between 0 - 128 using crypto API

function getRandEightBitIntArr() {
    let seedArray = new Int8Array(passLength * 10);
    window.crypto.getRandomValues(seedArray);

    let randEightBitIntArr = Array.from(seedArray);

    return randEightBitIntArr.filter(element => {
        if((element > 31 && element < 127) || (element < -31 && element > -127)){
            return element;
        }
    }).map(element => {
        if(element < 0){
            return Math.abs(element);
        }
        return element;
    });
}

console.log(getRandEightBitIntArr());
//this statement logs '!' using unicode
console.log(String.fromCodePoint(33));

//method that accepts random int array and converts it to a password with user specified characters
function convertRandIntArrToPass(randomIntArray){
    
    
}


