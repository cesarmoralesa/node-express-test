// Library consfiguration block
var express =  require("express");
var app = express();
var path    = require('path');


// Engine configuration block
app.set('view engine', 'html');
// app.use( express.static(path.join(__dirname, 'public')));
app.use(express.static(process.cwd()+"/"));


// Server configuration block
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at port', port);
});

app.get('/', function(req, res){
  res.render('index.html');
});
