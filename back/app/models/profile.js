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
	Email: String,
	LatLng: Object,
	Captodo:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'cap'
	}],
	Capdone:[{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'cap'
	}]
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
			Description: req.body.Description,
			LatLng: req.body.LatLng
		}, function(){
			res.sendStatus(200);
		});
	},
	findAll: function(req, res) {

		Profile.model.find({})
		.populate("Captodo")
		.populate("Capdone")
		.exec(function(err,profiles) {
      res.json(profiles);
		});
	},

	addCap: function(req, res){
		Profile.findById(req.params.id, function(profile){
			profile.Captodo.push(req.body.id_cap)
			profile.save();

			Profile.findAll(req, res);

		});
	},

	update: function(req, res){
		Profile.model.findByIdAndUpdate(req.params.id, {
			Firstname: req.body.Firstname,
			Email: req.body.Email,
			Lastname: req.body.Lastname,
			Interest: req.body.Interest,
			Photo: req.body.Photo,
			Description: req.body.Description,
			LatLng: req.body.LatLng
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
