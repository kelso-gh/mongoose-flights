const Flight = require('../model/flight');

module.exports = {
    index,
    show,
   new: newFlight,
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {title: 'Flight Detail', flight});
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}