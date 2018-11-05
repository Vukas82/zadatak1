const config = require('./config');

// 1.1
function random() {
	if (Number.isInteger(config.min) === true && Number.isInteger(config.max) === true) {
		console.log(Math.floor(Math.random() * (config.max - config.min + 1)) + config.min);
	} else {
		console.error('you entered the wrong parameter');
	}
}
//  1.2  ```````````````````````
function minIntegerFromArray() {
	const newArray = config.array.filter((value) => {
		if (Number.isInteger(value) === true) { return value; }
		return false;
	});
	console.log(Math.min(...newArray));
}
// 1.3  ``````````````````````````````````
function minIntegerFromString() {
	const numFromString = config.string.match(/\d+/g);// return the numbers from the string
	if (numFromString !== null || numFromString !== undefined) {
		console.log(Math.min(...numFromString.map(Number)));
	} else {
		console.log('Enter the correct parameters!');
	}
}
//  1.4  ``````````````````````````````````````````````
function concatStringsByLength() {
	if (config.type === 0) {
		config.arrayOfStrings.sort((a, b) => a.length - b.length);
		console.log(config.arrayOfStrings.join(''));
	} else if (config.type === 1) {
		config.arrayOfStrings.sort((a, b) => b.length - a.length);
		console.log(config.arrayOfStrings.join(''));
	} else { console.error('Error, enter a type'); }
}

module.exports.random = random;
module.exports.minIntegerFromArray = minIntegerFromArray;
module.exports.minIntegerFromString = minIntegerFromString;
module.exports.concatStringsByLength = concatStringsByLength;
