const http = require('http');
const url = require('url');
const Subscriptor = require('../models/subscriptor.model');
const config = require("../config");
const generic = require("../util/generic");

exports.server_create = async function () {
    http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      var q = url.parse(req.url, true).query;
      var obj = { URI: q.uri, PORT: q.port }
  
      var subscriptor = new Subscriptor(obj);
      subscriptor.save();
      generic.log("Se ha ingresado un nuevo subscriptor.");
      res.end(JSON.stringify(obj));
    }).listen(config.port);
  };