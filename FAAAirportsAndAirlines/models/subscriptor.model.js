const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SubscriptorSchema = new Schema({

    URI: { type: String, required: false},
    PORT: { type: String, required: false }
});

module.exports = mongoose.model('Subscriptor', SubscriptorSchema);