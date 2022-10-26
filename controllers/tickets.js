const Flight = require('../model/flight');
const Ticket = require('../model/ticket');

module.exports = {
    create,
    new: newTicket
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket){
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    res.render('tickets/new', {title: 'Add Ticket', flightId: req.params.id});
}