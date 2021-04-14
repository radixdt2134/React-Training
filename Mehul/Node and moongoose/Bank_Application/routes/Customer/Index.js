var express = require('express');
var router = express.Router();

const CustomerController = require('./customerController');
const CustTransController =  require('./custTranscationController');

router.use('/customer', CustomerController);
router.use('/Trans', CustTransController);


module.exports = router;