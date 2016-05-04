angular.module('starter.services', [])
.factory('global', function() {
    return {
        host : 'localhost',
        port: 8000
    };
  })
  .service('connectService',function($http, global){
  	return {
  		connect: function(data){
  			return $http.post('http://' + global.host + ':' + global.port + '/api/login', data);
  		},
  		disconnect: function(){
  			return $http.post('http://' + global.host + ':' + global.port + '/api/logout');
  		}
  	};
  })

  .service ('accountService',function($http, global) {
  	return {
          getById : function(id) {
  			return $http.get('http://' + global.host + ':' + global.port + '/api/users/' + id);
  		},
  		update : function(id, data){
  			return $http.put('http://' + global.host + ':' + global.port + '/api/users/' + id, data);
  		},
  		create : function(data) {
  			return $http.post('http://' + global.host + ':' + global.port + '/api/users', data);
  		},
  		delete : function(id) {
  			return $http.delete('http://' + global.host + ':' + global.port + '/api/users/' + id);
  		}
  	};
  })

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
