var express = require('express');
var app = express();
//express本身没有提供html页面渲染，需要ejs模板提供，故而要用npm安装ejs，并且这里需要添加以下内容
app.use(express.static(__dirname +'/public'));
app.engine('html',require('ejs').renderFile);
app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
