var express = require('express');
var router = express.Router();
var winston = require('winston');

// route middleware to verify a token
router.use(function(req, res, next) {
	//Do anything here

	next();
});

router.get("/", function(req, res){
	winston.info("Calling Get Method from Log Router");
	res.json({ message: "Welcome to Log Section"});
})

router.route('/:log_id')
.get(function(req, res){
	winston.info("Calling Get Method from Log Router with Parameter");
	//Do Something Here
	res.json({ param: req.params.log_id });
})
.post(function(req, res){
	//Do Something Here
	res.json({ param: req.params.log_id });
});

module.exports = router;