const uniqueRandomArray = require('unique-random-array');
const bbHunter = require('./bb-hunter.json');

module.exports = {

    all: bbHunter,
    random: uniqueRandomArray(bbHunter)
};
