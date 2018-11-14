const os = require('os');
const shell = require('shelljs');
const figlet = require('figlet');

figlet('JSTE MANAGER', function(err, data) {
console.log(data);
console.log(' Starting building Jste Manager ');
shell.rm('-rf', 'build/*');
shell.cd('src');
shell.exec('npx pkg index.js --out-path ../build -c ../package.json');
console.log(' Jste Manager has been built properly ;) ');
});
