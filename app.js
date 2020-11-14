const http = require('http');
const express = require('express');
const path = require('path');
const reload = require('reload');
const open = require('open');

const app = express();

app.use(express.json());
app.use(express.static('src'));

app.use('/',function(req,res){
    res.sendFile(path.join(__dirname + '/src/index.htm'));
});

const server = http.createServer(app);
const port = 3000;

server.listen(port);


console.debug('Server listening on port ' + port);
console.debug('Opening http://localhost:' + port);
