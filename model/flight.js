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
            return new Date().setFullYear(new Date().getFullYear() + 1)
        } 
    }
});

module.exports = mongoose.model('Flight', flightSchema);