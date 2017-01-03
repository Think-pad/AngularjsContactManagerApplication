var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/public/index.html');
});

app.use(express.static(__dirname + '/client'));//here client is main or root file for server.js..so we can't use / for calling it.

app.listen(3000);
console.log("Running speed is 3000 ");


