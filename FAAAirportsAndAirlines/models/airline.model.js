const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AirlineSchema = new Schema({

    IATA_CODE: { type: String, required: false},
    AIRLINE: { type: String, required: false}

});

module.exports = mongoose.model('Airline', AirlineSchema);