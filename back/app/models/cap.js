// MODEL TODO
var mongoose = require('mongoose');
var capSchema = new mongoose.Schema({
	Capname: String,
	Capdescription: String,
	Cappoints: Number
});
var cap = {

	model: mongoose.model('cap', capSchema),

	create: function(req, res) {
		cap.model.create({
			Capname: req.body.Capname,
			Capdescription: req.body.Capdescription,
			Cappoints: req.body.Cappoints
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		cap.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		cap.model.findByIdAndUpdate(req.params.id, {
			Capname: req.body.Capname,
			Capdescription: req.body.Capdescription,
			Cappoints: req.body.Cappoints
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		cap.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = cap;
