const os = require('os');
const shell = require('./src/node_modules/shelljs');
const figlet = require('./src/node_modules/figlet');

figlet('JSTE MANAGER', function(err, data) {
console.log(data);
console.log(' Starting building Jste Manager ');
shell.rm('-rf', 'dist/*');
shell.cd('src');
shell.exec('pkg . --out-path ../dist');
console.log(' Jste Manager has been built properly ;) ');
});
