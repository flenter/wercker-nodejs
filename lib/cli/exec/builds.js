'use strict';
var _       = require('lodash');
var moment  = require('moment');
var format  = require('util').format;
var config  = require('../infrastructure/config.js');
var Wercker = require('../../sdk/wercker.js');

module.exports = function (project_name) {
    config.read(function (settings) {
        if(!settings || !settings.token) {
            console.log('use "wercker login" to generate token for me');
            return;
        }
        var wercker = new Wercker({'token': settings.token});

        wercker.get_applications(function (err, apps) {
            var app = _.first(_.where(apps, {'name': project_name}));
            if (!app) {
                console.log('App not found');
                return;
            }

            wercker.get_builds(app.id, function (err, builds) {
                if (builds.errorMessage) {
                    console.log(builds.errorMessage);
                    return;
                }
                var model = " Commit : %s\n Result : %s\n Status : %s\n Date   : %s\n";
                console.log('Builds:\n');
                builds.reverse().forEach(function (item) {
                    var msg = format(model,
                        item.commitMessage,
                        item.result.toUpperCase(),
                        item.status.toUpperCase(),
                        moment(item.creationDate).calendar());
                    console.log(msg);
                });
            });
        });
    });
};
