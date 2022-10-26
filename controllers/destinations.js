const Flight = require('../model/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            //redirect after mutating data
            res.redirect(`/flights/${flight._id}`);
        });
    });
}