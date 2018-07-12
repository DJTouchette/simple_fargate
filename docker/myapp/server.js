var express = require('express');
var app = express();
const count = 200000;

app.get('/', function (req, res) {
  res.send('Hello Fargate! v2');
});

app.post('/test', function (req, res) {
  for(var i = 0; i < count; i ++) {
    console.log(i);
    new Date();
  }

  res.send(`counted to ${count}, at ${new Date()}`);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
