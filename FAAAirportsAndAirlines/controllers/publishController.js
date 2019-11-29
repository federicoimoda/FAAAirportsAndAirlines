const http = require('http');
const Airport = require('../models/airport.model');
const Airline = require('../models/airline.model');
const Subscriptor = require('../models/subscriptor.model');
const generic = require("../util/generic");


exports.publish = async function () {

    while (true) {
      generic.log("Nueva iteracion en curso.");
  
      const subs = await Subscriptor.find();
  
      if (subs.length > 0) {
        for (each in subs) {
  
          //Inserto Data de Aerolineas
  
          var data = new Array();
          const airlines = await Airline.find();
  
          data = JSON.stringify(airlines);
          const options = {
            hostname: subs[each].URI,
            port: parseInt(subs[each].PORT, 10),
            path: '/api/Airlines',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            }
          }
  
          const req = http.request(options);
  
          req.on('error', error => {
            generic.log("Problemas con Subscriptor: " + subs[each].URI + ":" + subs[each].PORT);
          })
  
          req.write(data);
          req.end();
  
          //Inserto Data de Aeroports
  
          var data1 = new Array();
          const airports = await Airport.find();
  
          data1 = JSON.stringify(airports);
  
          const options1 = {
            hostname: subs[each].URI,
            port: parseInt(subs[each].PORT, 10),
            path: '/api/Airports',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          }
  
          const req1 = http.request(options1);
  
          req1.on('error', error => {
            generic.log("Problemas con Subscriptor: " + subs[each].URI + ":" + subs[each].PORT);
          })
  
          req1.write(data1);
          req1.end();
        }
  
      } else {
        generic.log("No hay Suscriptores para enviar datos.");
      }
  
      generic.log("Esperando para una nueva iteracion...");
      await generic.sleep(5000);
    }
  }