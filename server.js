var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var moment = require('moment');

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.get('/:timestamp', function(req,res) {
  var date;
  if(!isNaN(parseInt(req.params.timestamp,10))) {
    date = moment(req.params.timestamp, "X");
  } else {
    date = moment(req.params.timestamp, "MMMM D, YYYY");
  }

  if(date.isValid()) {
    res.json({
      unix: date.format("X"),
      natural: date.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});