var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// All routes start with '/flights' 

// #11 GET /flights (index functionality)
router.get('/', flightsCtrl.index);


module.exports = router;
