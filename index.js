const fun = require('./function');
const config = require('./config');

console.log(fun.random(config.min, config.max));
console.log(fun.minIntegerFromArray(config.array));
console.log(fun.minIntegerFromString(config.string));
console.log(fun.concatStringsByLength(config.arrayOfStrings, config.type));
