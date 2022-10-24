const mongoose = require('mongoose');


const flightSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'JFK'],
        default: 'LAX'
    },
    airline: {
        type: String,
        enum: ['American', 'Alaska', 'JetBlue']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getDate();
        } //How do you implement one year from date created?
    }
});