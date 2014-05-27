'use strict';
var config  = require('../infrastructure/config.js');

module.exports = function () {
    config.remove(function () {
        console.log('Logout with success!');
    });
};
