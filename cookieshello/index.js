var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;
app.use(cookieParser());
app.get('/', function (req, res) {
    if(req.cookies.helloSent == "true")
        res.send("I already said hello to you!");
    else
        res.cookie("helloSent","true").send('Hello World!');
});

app.listen(port, function () {
    console.log('Example app listening on port' + port);
});
