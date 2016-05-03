// ROUTES TODOS
var Profile = require('../models/profile.js');
module.exports 	= function(app) {
	app.get('/profiles', Profile.findAll);
	app.post('/profiles', Profile.create);
	app.put('/profiles/:id', Profile.update);
	app.delete('/profiles/:id', Profile.delete);
}
