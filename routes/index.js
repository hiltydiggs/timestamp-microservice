var express = require("express"),
    path = process.env.port || 3000,
    base = require("./base"),
    dateVar = require("./dateVar");

var app = express();

app.use("/", base);
app.use("/index.html", base);
app.use("/*", dateVar);

app.listen(path);

console.log("Running on port: " + path);
