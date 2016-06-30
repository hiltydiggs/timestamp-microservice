var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  var dateVar = req.originalUrl;
  res.send(dateVar);
});

module.exports = router;
