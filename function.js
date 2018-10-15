var config = require('./config');

min = config.min;
max = config.max;
array = config.array;
string = config.string;
arrayOfStrings = config.arrayOfStrings; 
type = config.type;



// 1.1
function random(min, max) {
   if (Number.isInteger(min) === true && Number.isInteger(max) === true && min !== undefined && max !== undefined && isNaN(min) === false && isNaN(max) === false && min < max === true) {
        getRandomInt(min, max);
    } else {
        console.error('Uneli ste pogresan parametar')
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    console.log(getRandomInt(min, max));
};


//  1.2  ```````````````````````````
function minIntegerFromArray(array) {
let newArr = [];
                                                    
const iterator = array.values();
    for (const value of iterator) {
        if(!isNaN(value) === true)
            newArr.push(value);}
            
Array.min = function( newArr ){     
    return Math.min.apply( Math, newArr );   
};

    var minimum = Array.min(newArr);
        console.log(minimum);
if(minimum == Infinity){console.log('greska,u nizu nema brojeva');}
};


// 1.3  ``````````````````````````````````


function minIntegerFromString(string) {

const regex = /[+-]?\d+(?:\.\d+)?/g;
let match;
let brojeviStr = [];

function testParamFunction(string) {
    string = typeof string === 'undefined' ? null : string;
    if (string === null) {
        console.error('Unesite ispravnu vrednost parametra');
        return;
    }
}
testParamFunction(string);



while (match = regex.exec(string)) {     
    brojeviStr.push(match[0]);                
}                                             
                                               

function myArrayMin(arr) {
    let len = arr.length
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    let integer = parseInt(min, 10);
    if (isNaN(integer) == false) {
        console.log(integer)
    } else {
        console.error('greska,nepostoji broj u stringu');
    }
}
myArrayMin(brojeviStr);
};


//  1.4  ``````````````````````````````````````````````



function concatStringsByLength(arrayOfStrings, type) {
        if (type === 0){
                arrayOfStrings.sort(function(a,b) {
                            return a.length-b.length;  
                            });
                            console.log(arrayOfStrings.join(""));
                        }
        else if (type === 1){
            arrayOfStrings.sort(function(a,b) {
                            return b.length-a.length; 
                            });
                            console.log(arrayOfStrings.join(""));}
        else {console.error('greska, unesite tip')};
};



module.exports.random = random;
module.exports.minIntegerFromArray = minIntegerFromArray;
module.exports.minIntegerFromString = minIntegerFromString;
module.exports.concatStringsByLength = concatStringsByLength;

