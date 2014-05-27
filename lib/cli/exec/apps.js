'use strict';
var config  = require('../infrastructure/config.js');
var Wercker = require('../../sdk/wercker.js');

module.exports = function () {
    config.read(function (settings) {
        if(!settings || !settings.token) {
            console.log('use "wercker login" to generate token for me');
            return;
        }
        var wercker = new Wercker({'token': settings.token});

        wercker.get_applications(function (err, data) {
            if (data.errorMessage) {
                console.log(data.errorMessage);
                return;
            }
            console.log('Your Applications:\n');
            data.forEach(function (item) {
                console.log(' ', item.name);
            });
        });
    });
};
