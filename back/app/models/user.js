var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: String,
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

var User = {
    model: mongoose.model('User', userSchema),

    find: function(name, password, callback) {
        User.model.findOne({
            name: name,
            password: password
		}, {password: 0}, callback);
	},

  findAll: function(req, res) {
		User.model.find({}, {password: 0})
		.populate("Captodo")
		.populate("Capdone")
		.exec(function (err, users) {
			res.json(users);
		});
	},

	findById: function(req, res) {
		User.model.findById(req.params.id, {password: 0}, function (err, user) {
			 res.json(user);
		});
	},

	create: function(req, res) {
		User.model.create({
			name: req.body.name,
			password: req.body.password,
			Firstname: req.body.Firstname,
			Email: req.body.Email,
			Lastname: req.body.Lastname,
			Interest: req.body.Interest,
			Photo: req.body.Photo,
			Description: req.body.Description,
			LatLng: req.body.LatLng
		}, function(err, user) {
			res.sendStatus(200);
	    });
	},

	update: function(req, res) {
		User.model.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			password: req.body.password
		}, function(err, user) {
			res.sendStatus(200);
	    });
	},

	addCap: function(req, res){
		User.model.findById(req.params.id, function(err, user){
			user.Captodo.push(req.body.id_cap);
			user.save();

			User.findAll(req, res);

		});
	},

	addCapdone: function(req, res){
		User.model.findById(req.params.id, function(err, user){
			user.Capdone.push(req.body.id_cap);
			user.save();

			User.findAll(req, res);

		});
	},


	delete: function(req, res){
		User.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}


module.exports = User;
