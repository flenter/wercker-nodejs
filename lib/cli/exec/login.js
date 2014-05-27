'use strict';
var prompt  = require('prompt');
var config  = require('../infrastructure/config.js');
var Wercker = require('../../sdk/wercker.js');
var wercker = new Wercker();

module.exports = function () {
    prompt.start();
    var schema = {
        'properties': {
            'login': {
                'description': 'Enter your login',
                'required': true
            },
            'password': {
                'description': 'Enter your password',
                'required': true,
                'hidden': true
            }
        }
    };
    prompt.message = 'wercker-cli'.green.bold;
    prompt.get(schema, function (err, user) {
        if (!user || !user.login || !user.password) {
            console.log('\nLogin or password is null, aborted!'.red);
            return;
        }
        wercker.request_oauth_token(user.login, user.password, function (err, result) {
            if (result.errorMessage) {
                console.log(result.errorMessage);
                return;
            }
            var settings = {
                "token": result.result.token
            };
            config.write(settings, function () {
                console.log('Login with success'.green);
            });
        });
    });

};
