const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AirportSchema = new Schema({

    IATA_CODE: { type: String, required: false },
    AIRPORT: { type: String, required: false },
    CITY: { type: String, required: false },
    STATE: { type: String, required: false },
    COUNTRY: { type: String, required: false },
    LATITUDE: { type: String, required: false },
    LONGITUDE: { type: String, required: false }

});

module.exports = mongoose.model('Airport', AirportSchema);