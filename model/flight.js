const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'JFK']
    },
    arrival: {
        type: Date
    }
}); 

const flightSchema = new Schema({
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
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);