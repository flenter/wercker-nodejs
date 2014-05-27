'use strict';
var program = require('commander');
var pkg     = require('../../package.json');
program.version(pkg.version);

program
   .command('help')
   .description('output usage information')
   .action(function () {
       program.help();
   });

program
   .command('login')
   .description('generate a token to use this cli')
   .action(function () {
       require('./exec/login.js')();
   });

program
   .command('logout')
   .description('remove token from this computer')
   .action(function () {
       require('./exec/logout.js')();
   });

program
   .command('apps')
   .description('get list apps')
   .action(function () {
       require('./exec/apps.js')();
   });

program
   .command('builds <project_name>')
   .description('get builds for app')
   .action(function (project_name) {
       require('./exec/builds.js')(project_name);
   });

if (process.argv.length === 2) {
    console.log('Use "wercker help" to see help');
}

program.parse(process.argv);
