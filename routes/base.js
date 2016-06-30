var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res) {
  var fullPath = path.join(__dirname + "/../index.html");
  res.sendFile(fullPath);
});

module.exports = router;
