var fs = require('fs');
var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
var root = path.join(__dirname, 'assets');

app.get('/', function (req, res) {
  res.sendFile(root + '/index.html')
});

var server = app.listen(5050, function () {
});
