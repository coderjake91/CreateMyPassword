
//class Password {
 //create constructor function with proto
    // constructor(){
    //     this.passLength;
    // }

let passLength = 50;

//method that prompts user and constructs password preferences

function buildPassword(){

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
function convertRandIntArrToPass(){

}


