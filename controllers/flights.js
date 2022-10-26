const Flight = require('../model/flight');
const Ticket = require('../model/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights')
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: req.params.id}, function(err, tickets){
            res.render('flights/show', {title: 'Flight Detail', flight, tickets});
        });
    });
}