var express = require("express"),
    port = process.env.port || 3000,
    path = require("path"),
    dateVar = require("./dateVar");

var app = express();

app.use(express.static(path.join(__dirname + "/../")));
app.use("/*", dateVar);

app.listen(port);

console.log("Running on port: " + port);
