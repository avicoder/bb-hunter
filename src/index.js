'use strict';

var uniqueRandomArray = require('unique-random-array');
var bbHunter = require('./bb-hunter.json');

module.exports = {

    all: bbHunter,
    random: uniqueRandomArray(bbHunter)
};
