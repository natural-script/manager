const commandLineArgs = require('command-line-args')
const os = require('os');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const express = require('express');
const staticGzip = require('http-static-gzip-regexp');
const cors = require('cors');
const cors_proxy = require('cors-anywhere');
const app = express();
app.use(cors())
const currentPlatform = os.platform();
const currentArch = os.arch();
const root = path.join(__dirname, 'assets');
const binPath = process.execPath;
const optionDefinitions = [
  { name: 'install', alias: 'i', type: Boolean }
];
const options = commandLineArgs(optionDefinitions);

if (options.install) {
console.log("");
console.log("");
console.log("");
console.log(" Installing Jste Manager for " + currentPlatform + " " + currentArch);
console.log("");
console.log("");
console.log("");
console.log(" Copying Jste Files ");
if (currentPlatform == 'linux') {
shell.cp('-R', 'JsteManager', '/etc/init.d/');
console.log("");
console.log("");
console.log("");
console.log(" Registering Jste Manager script to init.d ");
shell.chmod('ugo+x', '/etc/init.d/JsteManager');
shell.exec('update-rc.d JsteManager defaults');
console.log("");
console.log("");
console.log("");
console.log(" Launching Jste Manager ");
shell.exec('/etc/init.d/JsteManager &');
console.log("");
console.log("");
console.log("");
console.log("");
console.log("================================================");
console.log(" Jste Manager has been installed successfuly ;) ");
console.log("================================================");
console.log("");

} else if (currentPlatform == 'freebsd') {
shell.cp('-R', 'JsteManager', '/etc/init.d/');
console.log("");
console.log("");
console.log("");
console.log(" Registering Jste Manager script to init.d ");
shell.chmod('ugo+x', '/etc/init.d/JsteManager');
shell.exec('update-rc.d JsteManager defaults');
console.log("");
console.log("");
console.log("");
console.log(" Launching Jste Manager ");
shell.exec('/etc/init.d/JsteManager &');
console.log("");
console.log("");
console.log("");
console.log("");
console.log("================================================");
console.log(" Jste Manager has been installed successfuly ;) ");
console.log("================================================");
console.log("");
} else if (currentPlatform == 'win32') {
shell.cp('-R', 'JsteManager.exe', '/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp');
console.log("");
console.log("");
console.log("");
console.log(" Launching Jste Manager ");
shell.exec('start "" "/ProgramData/Microsoft/Windows/Start Menu/Programs/Startup/JsteManager.exe"');
console.log("");
console.log("");
console.log("");
console.log("");
console.log("================================================");
console.log(" Jste Manager has been installed successfuly ;) ");
console.log("================================================");
console.log("");
}
}else {

app.use(staticGzip(/(framework\.min\.html|\.js|\.css)$/));  

app.use(express.static(root));

var server = app.listen(5050, function () {
});

var localAddress = '0.0.0.0' || 'localhost'; 
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    setHeaders: {"Access-Control-Expose-Headers": "Content-Length"},
    removeHeaders: ['cookie', 'cookie2']
}).listen(6060, localAddress, function() {
});
}
