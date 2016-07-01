var express = require("express");
var router = express.Router();
var moment = require("moment");

router.get("/", function(req, res) {
  var dateVar = req.originalUrl,
      naturalTime,
      unixTime;

  dateVar = decodeURIComponent(dateVar);
  dateVar = dateVar.replace(/\//, "");

  if (dateVar.match(/^-?\d+$/)) {
    unixTime = dateVar;
    naturalTime = moment.unix(dateVar).format("LL");
  } else {
    unixTime = moment(dateVar).format("x");
    unixTime = parseInt(unixTime);
    naturalTime = moment(dateVar).format("LL");
  }

  var resObj = {
    "unix": parseInt(unixTime),
    "natural": naturalTime
  };

  if (resObj.unix === null || resObj.natural === "Invalid date") {
    res.send("Not a valid date string/integer");
  } else {
    res.send(resObj);
  }
});

module.exports = router;
