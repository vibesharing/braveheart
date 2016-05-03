// MODEL TODO
var mongoose = require('mongoose');
var profileSchema = new mongoose.Schema({
  Firstname: String,
	Lastname: String,
	Interest: Array,
	Photo: String,
	Description: String,
	Geolocation: String,
	Challenges: Object,
  Email: String

});
var Profile = {

    model: mongoose.model('Profile', profileSchema),

    create: function(req, res) {
		Profile.model.create({
			Firstname: req.body.Firstname,
      Email: req.body.Email,
			Lastname: req.body.Lastname,
			Interest: req.body.Interest,
			Photo: req.body.Photo,
			Description: req.body.Description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Profile.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Profile.model.findByIdAndUpdate(req.params.id, {
			Firstname: req.body.Firstname,
			Email: req.body.Email,
			Lastname: req.body.Lastname,
			Interest: req.body.Interest,
			Photo: req.body.Photo,
			Description: req.body.Description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Profile.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Profile;
