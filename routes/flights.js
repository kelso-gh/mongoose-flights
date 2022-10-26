var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// All routes start with '/flights' 

// #11 GET /flights (index functionality)
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
// GET /flights/:id (this displays the details for a flight)
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

module.exports = router;
