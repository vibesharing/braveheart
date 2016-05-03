var Cap = require('../models/cap.js');
module.exports 	= function(app) {
	app.get('/caps', Cap.findAll);
	app.post('/caps', Cap.create);
	app.put('/caps/:id', Cap.update);
	app.delete('/caps/:id', Cap.delete);

}
