var express = require('express');
var optimus = require('connect-image-optimus');
var app = express();
var staticPath = __dirname + '/public';

app.use(optimus(staticPath));
app.use(express.static(staticPath));

app.listen(9999);
console.log('The server is listening on port 9999');
