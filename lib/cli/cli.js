'use strict';
var program = require('commander');

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
   .command('builds')
   .description('get builds for app')
   .action(function (project_name) {
       require('./exec/builds.js')(project_name);
   });


program.parse(process.argv);
