
const express = require("express");
const http = require('http')
const path = require('path');
const app = express();
const router = express.Router();
const port = 8080;

var player = require('play-sound')({});


app.use(express.static('public'));

router.get("/", function(request, response){
  response.sendFile(path.join(__dirname, "/public/index.html"));
});


app.listen(port, function(request, response){
   console.log("Listen port 3000");
});

module.exports = router;