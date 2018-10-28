const config = require('./config');
/*eslint-disable*/
min = config.min;
max = config.max;
array = config.array;
string = config.string;
arrayOfStrings = config.arrayOfStrings;
type = config.type;
/* eslint-enable */


// 1.1
function random(min, max) {
	if (Number.isInteger(min) === true && Number.isInteger(max) === true) {
		console.log(Math.floor(Math.random() * (max - min + 1)) + min);
	} else {
		console.error('Uneli ste pogresan parametar');
	}
}


//  1.2  ```````````````````````
function minIntegerFromArray(array) {
	const newArray = array.filter((value) => {
		if (Number.isInteger(value) === true) { return value; }
		return false;
	});
	console.log(Math.min(...newArray));
}


// 1.3  ``````````````````````````````````


function minIntegerFromString(string) {
	const regex = /[+-]?\d+(?:\.\d+)?/g;
	let match;
	const brojeviStr = [];

	function testParamFunction() {
		string.prop = typeof string === 'undefined' ? null : string;
		if (string === null) {
			console.error('Unesite ispravnu vrednost parametra');
		}
	}
	testParamFunction(string);

	while (match = regex.exec(string)) {
		brojeviStr.push(match[0]);
	}


	function myArrayMin(arr) {
		let len = arr.length;
		let min = Infinity;
		while (len--) {
			if (arr[len] < min) {
				min = arr[len];
			}
		}
		const integer = parseInt(min, 10);
		if (Number.isNaN(integer) === false) {
			console.log(integer);
		} else {
			console.error('greska,nepostoji broj u stringu');
		}
	}
	myArrayMin(brojeviStr);
}


//  1.4  ``````````````````````````````````````````````


function concatStringsByLength(arrayOfStrings, type) {
	if (type === 0) {
		arrayOfStrings.sort((a, b) => a.length - b.length);
		console.log(arrayOfStrings.join(''));
	} else if (type === 1) {
		arrayOfStrings.sort((a, b) => b.length - a.length);
		console.log(arrayOfStrings.join(''));
	} else { console.error('greska, unesite tip'); }
}


module.exports.random = random;
module.exports.minIntegerFromArray = minIntegerFromArray;
module.exports.minIntegerFromString = minIntegerFromString;
module.exports.concatStringsByLength = concatStringsByLength;
