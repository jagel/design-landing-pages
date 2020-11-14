const http = require('http');
const express = require('express');
const path = require('path');
const reload = require('reload');

const app = express();

app.use(express.json());
app.use(express.static('src'));

app.use('/',function(req,res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

const server = http.createServer(app);
const port = 3000;

reload(app).then(function (reloadReturned) {
    server.listen(port, function () {
      console.log('Web server listening on port ' + port)
      console.log('http://localhost:' + port)
    })
  }).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
})


console.debug('Server listening on port ' + port);
console.debug('Opening http://localhost:' + port);

