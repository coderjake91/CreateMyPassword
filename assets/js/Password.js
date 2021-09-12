
//class Password {
 //create constructor function with proto
    // constructor(){
    //     this.passLength;
    // }

let passLength = 0;
let userPassChoices = [];
let confirmPrompts =  [];
let filteredArr = [];
let password = [];

//method that prompts user and constructs password preferences

function buildPassword(){
    window.alert("Welcome to CreateMyPassword! Let's step through a few password preferences in order to generate your new password...");

    passPrompt();
    randomASCIIPool = getRandEightBitIntArr();

    console.log(randomASCIIPool);

    convertRandIntArrToPass(randomASCIIPool);

    console.log(password);
}

function passPrompt(){
    
    passLength = window.prompt('What length would you like your password to be? (choose a number between 8 and 128 characters');

    passLength = parseInt(passLength);

        while(!Number.isSafeInteger(passLength) || passLength > 128 || passLength < 8){
            window.alert('You have not correctly chosen a password length...');
            passPrompt();
        }

    confirmPrompts[0] = window.confirm('Would you like to include lowercase characters?');
    if(confirmPrompts[0]){userPassChoices[0] = 'confirmLower'};
    confirmPrompts[1] = window.confirm('Would you like to include uppercase characters?');
    if(confirmPrompts[1]){userPassChoices[1] = 'confirmUpper'};
    confirmPrompts[2] = window.confirm('Would you like to include numeric characters?');
    if(confirmPrompts[2]){userPassChoices[2] = 'confirmNumeric'};
    confirmPrompts[3] = window.confirm('Would you like to include special characters?');
    if(confirmPrompts[3]){userPassChoices[3] = 'confirmSpecial'};

    console.log(passLength);
    confirmPrompts.forEach(prompt => console.log(prompt));
    userPassChoices.forEach(choice => console.log(choice));
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

//method that accepts random int array and converts it to a password with user specified characters
function convertRandIntArrToPass(randomIntArray){

    console.log('here in: convertRandIntArrToPass')
    
    //interate through preferences, and generate filtered IntArray (specifying ASCII numbers) from randomly generated Int array
    userPassChoices.forEach(choice => {
        switch(choice){
            case 'confirmLower': 
                console.log('im here in pref 0')
                filter0 = randomIntArray.filter(element => {
                    //ASCII #97 to #122
                    if(element >= 98 && element <= 122){
                        return element;
                    }
                });

                filteredArr = filteredArr.concat(filter0);
                break;

            case'confirmUpper':
                console.log('im here in pref 1')
                filter1 = randomIntArray.filter(element => {
                    //ASCII #65 to #90
                    if(element >= 65 && element <= 90){
                        return element;
                    }
                });

                filteredArr = filteredArr.concat(filter1);
                break;

            case'confirmNumeric':
                console.log('im here in pref 2')
                filter2 = randomIntArray.filter(element => {
                    //ASCII #48 to #57
                    if(element >= 48 && element <= 57){
                        return element;
                    }
                });

                filteredArr = filteredArr.concat(filter2);
                break;

            case'confirmSpecial':
                console.log('im here in pref 3')
                filter3 = randomIntArray.filter(element => {
                    //ASCII #32 to #47 OR #58 to #64 OR #91 to #96 OR #123 to #126
                    if((element >= 32 && element <= 47)||(element >= 58 && element <= 64)||(element >= 91 && element <= 96)||(element >= 123 && element <= 126)){
                        return element;
                    }
                });

                filteredArr = filteredArr.concat(filter3);
                break;

            default:
                break;
        }
    });

    //build password using random elements from filtered randomIntArray
    for(i = 0; i < passLength; i++){
        password[i] = String.fromCodePoint(filteredArr[(Math.floor(Math.random() * (filteredArr.length - 0) + 0))]);
    }
}

//this statement logs '!' using unicode
console.log(String.fromCodePoint(33));
//build the user's password
buildPassword();




