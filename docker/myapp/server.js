var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Fargate!');
});

app.post('/test', function (req, respons) => {
  for(var i = 0; i < 20000) {
    console.log(i);
  }

  res.send('counted to 20000');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
