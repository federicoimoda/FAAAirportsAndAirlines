exports.create = function () {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("FAAAirportsAndAirlinesDB");
    dbo.createCollection("SubsFAAAirportsAndAirlines", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
};

exports.save = function (obj) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/FAAAirportsAndAirlines";

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("FAAAirportsAndAirlinesDB");

  dbo.collection("SubsFAAAirportsAndAirlines").insertOne(obj, function(err, res) {
      if (err) throw err;
      console.log("1 uri registered");
      db.close();
  });
  });
};


exports.drop = function () {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("FAAAirportsAndAirlinesDB");
    dbo.collection("SubsFAAAirportsAndAirlines").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });
};