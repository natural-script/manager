const os = require('os');
const shell = require('shelljs');
const figlet = require('figlet');

figlet('JSTE MANAGER', function(err, data) {
console.log(data);
console.log(' Starting building Jste Manager ');
shell.rm('-rf', 'build/*');
shell.cd('src');
shell.exec('pkg . --out-path ../build');
console.log(' Jste Manager has been built properly ;) ');
});
