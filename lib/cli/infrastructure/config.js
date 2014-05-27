'use strict';
var fs           = require('fs');
var _            = require('lodash');
var config_file  = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
config_file     += (process.platform == 'win32') ? '\\.wercker_cli' : '/.wercker_cli';

function read(cb) {
    fs.readFile(config_file, 'utf-8', function (err, data) {
        var config;

        try {
            config = JSON.parse(data);
        } catch (e) {
            config = {};
        }

        cb(config);
    });
}

function write(config, cb) {
    read(function (old_config) {
        config = _.extend({}, old_config, config);
        config = JSON.stringify(config);

        fs.writeFile(config_file, config, function (err) {
            if (err) throw err;
            cb();
        });
    });
}

function remove(cb) {
    fs.unlink(config_file, function (err) {
        cb();
    });
}

exports.read   = read;
exports.write  = write;
exports.remove = remove;
