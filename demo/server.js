var http = require("http"),
    express = require("express"),
    browserify  = require('browserify-middleware'),
    app = express();

browserify.settings({
    transform: ['reactify'],
    extensions: ['.js', '.jsx'],
    grep: /\.jsx?$/
});

// serve client code via browserify and reactify
app.get('/bundle.js', browserify(__dirname+'/boot.jsx'));

// html
app.get('*.html', function (req, res) {
    res.sendFile(__dirname+req.path);
});

// css
app.get('*.css', function (req, res) {
    res.sendFile(__dirname+req.path);
});

// Everything else
app.get('*', function (req, res) {
    console.log(req.path);
    res.sendFile(__dirname+"/index.html");
});


app.listen("8000",function(){
    console.log("Server running on port 8000");
});
