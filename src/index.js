var characterNames = require('./characters.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: characterNames,
  random: uniqueRandomArray(characterNames)
};
