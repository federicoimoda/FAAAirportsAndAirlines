

exports.publish = function() {
    initAirline();
    //initAirport();
}

async function initAirline(){
    publishAirline();
 }

 async function initAirport(){
    publishAirport();
 }

 async function publishAirline(){

    var i = 1;
    while (true) {
        console.log("Airline iteration: "+i);
        i++;

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";

        MongoClient.connect(url, function(err, db) {
          
            console.log("Airline iteration Error1: "+err);
            if (err) throw err;
            console.log("Airline iteration Error1 Pass: "+err);

          var dbo = db.db("FAAAirportsAndAirlinesDB");
          dbo.collection("SubsFAAAirportsAndAirlines").find({}).toArray(function(err, result) {
            
            console.log("Airline iteration Error2: "+err);
            if (err) throw err;
            console.log("Airline iteration Error2 Pass: "+err);

            result.forEach(function(sub){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";
                
                MongoClient.connect(url, function(err, db) {
                    console.log("Airline iteration Error3: "+err);
                    if (err) throw err;
                    console.log("Airline iteration Error3 Pass: "+err);

                    var dbo = db.db("FAAAirportsAndAirlinesDB");

                    dbo.collection("Airline").find({}).toArray(function(err, result) {

                    console.log("Airline iteration Error4: "+err);
                    if (err) throw err;
                    console.log("Airline iteration Error4 Pass: "+err);
                    
                        result.forEach(function(airline){
               
                            const http = require('http')
                            const data = JSON.stringify({
                                IATA_CODE: airline.IATA_CODE,
                                AIRLINE: airline.AIRLINE
                            });
                            const options = {
                              hostname: sub.uri,
                              port: sub.port,
                              path: '/api/Airlines',
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': data.length
                              }
                            }
                            const req = http.request(options, res => {
                              console.log(`statusCode: ${res.statusCode}`)
                            
                              res.on('data', d => {
                                process.stdout.write(d)
                              })
                            })
                            req.on('error', error => {
                              console.error(error)
                            })
                            console.log(data);
                            req.write(data)
                            req.end()

                            return new Promise(resolve=>{
                                setTimeout(resolve,100)
                            }); 
                        })
                    });
                    db.close();
                });
            });
            db.close();
          });
        });
        await sleep(5000);  
    }

 }

 async function publishAirport(){

    /*
    var i = 1;
    while (true) {
        console.log("Airport iteration: "+i);
        i++;

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";

        MongoClient.connect(url, function(err, db) {
            console.log("Airport iteration Error1: "+err);
            if (err) throw err;
            console.log("Airport iteration Error1 Pass: "+err);

          var dbo = db.db("FAAAirportsAndAirlinesDB");
          dbo.collection("SubsFAAAirportsAndAirlines").find({}).toArray(function(err, result) {
            
            console.log("Airport iteration Error2: "+err);
            if (err) throw err;
            console.log("Airport iteration Error2 Pass: "+err);

            result.forEach(function(sub){

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";
                
                MongoClient.connect(url, function(err, db) {
                    console.log("Airport iteration Error3: "+err);
                    if (err) throw err;
                    console.log("Airport iteration Error3 Pass: "+err);
                    var dbo = db.db("FAAAirportsAndAirlinesDB");
                    dbo.collection("Airport").find({}).toArray(function(err, result) {
                    
                    console.log("Airport iteration Error4: "+err);
                    if (err) throw err;
                    console.log("Airport iteration Error4 Pass: "+err);
                    
                        result.forEach(function(airport){
               
                            const http = require('http')
                            
                            const data = JSON.stringify({

                                IATA_CODE: airport.IATA_CODE,
                                AIRPORT: airport.AIRPORT,
                                CITY: airport.CITY,
                                STATE: airport.STATE,
                                COUNTRY: airport.COUNTRY,
                                LATITUDE: airport.LATITUDE,
                                LONGITUDE: airport.LONGITUDE
                            });
                            const options = {
                              hostname: sub.uri,
                              port: sub.port,
                              path: '/api/Airport',
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': data.length
                              }
                            }
                            const req = http.request(options, res => {
                              console.log(`statusCode: ${res.statusCode}`)
                            
                              res.on('data', d => {
                                process.stdout.write(d)
                              })
                            })
                            req.on('error', error => {
                              console.error(error)
                            })
                            req.write(data)
                            req.end()

                            return new Promise(resolve=>{
                                setTimeout(resolve,100)
                            }); 
                        })
            
                    });
                    db.close();
                });
            });
            db.close();
          });
        }); 
        await sleep(5000); 
    }
    */


   var i = 1;
   while (true) {
       console.log("Airport iteration: "+i);
       i++;

       var MongoClient = require('mongodb').MongoClient;
       var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";

       MongoClient.connect(url, function(err, db) {
         
           console.log("Airport iteration Error1: "+err);
           if (err) throw err;
           console.log("Airport iteration Error1 Pass: "+err);

         var dbo = db.db("FAAAirportsAndAirlinesDB");
         dbo.collection("SubsFAAAirportsAndAirlines").find({}).toArray(function(err, result) {
           
           console.log("Airport iteration Error2: "+err);
           if (err) throw err;
           console.log("Airport iteration Error2 Pass: "+err);

           result.forEach(function(sub){

               var MongoClient = require('mongodb').MongoClient;
               var url = "mongodb://localhost:27017/FAAAirportsAndAirlinesDB";
               
               MongoClient.connect(url, function(err, db) {
                   console.log("Airport iteration Error3: "+err);
                   if (err) throw err;
                   console.log("Airport iteration Error3 Pass: "+err);

                   console.log("db: " + db);
                   var dbo = db.db("FAAAirportsAndAirlinesDB");

                   console.log("dbo: " + dbo);

                   //console.log("collection Airports sin toArray: " + dbo.collection("Airport").find({}));

                   //console.log("collection Airports sin toArray: " + dbo.collection("Airport").find({"IATA_CODE":"ABE"}));

                   //console.log("collection Airports: " + dbo.collection("Airport").find({}).toArray);

                   //console.log("collection Airports: " + dbo.collection("Airport").find({"IATA_CODE":"ABE"}).toArray);



                   dbo.collection("Airport").find({}).toArray(function(err, result) {    


                   //dbo.collection("Airport", function(err, result) {

                    //dbo.collection("Airport").find({})(function(err, result) {
                    
                    //dbo.collection("Airport").find({},{},{ tailable: 1, awaitdata: 1 }).toArray(function(err, result) {
                    
                    console.log("result Airports: " + result); 


                   console.log("Airport iteration Error4: "+err);
                   if (err) throw err;
                   console.log("Airport iteration Error4 Pass: "+err);
                   
                       result.forEach(function(airport){
                        //result.ToArray.forEach(function(airport){
              
                           const http = require('http')
                           const data = JSON.stringify({
                                
                                IATA_CODE: airport.IATA_CODE,
                                AIRPORT: airport.AIRPORT,
                                CITY: airport.CITY,
                                STATE: airport.STATE,
                                COUNTRY: airport.COUNTRY,
                                LATITUDE: airport.LATITUDE,
                                LONGITUDE: airport.LONGITUDE
                           });
                           const options = {
                             hostname: sub.uri,
                             port: sub.port,
                             path: '/api/Airport',
                             method: 'POST',
                             headers: {
                               'Content-Type': 'application/json',
                               'Content-Length': data.length
                             }
                           }
                           const req = http.request(options, res => {
                             console.log(`statusCode: ${res.statusCode}`)
                           
                             res.on('data', d => {
                               process.stdout.write(d)
                             })
                           })
                           req.on('error', error => {
                             console.error(error)
                           })
                           req.write(data)
                           req.end()

                           return new Promise(resolve=>{
                               setTimeout(resolve,100)
                           }); 
                       })
                   });
                   db.close();
               });
           });
           db.close();
         });
       });
       await sleep(5000);  
   }

}



 function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    }); 
}