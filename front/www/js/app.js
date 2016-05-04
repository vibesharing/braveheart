// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
//   .state('tabs.home', {
//     url: '/home',
//     views:{
//       'home-tab':{
//         templateUrl:'templates/home.html'
//       }
//     }
// })

  // Each tab has its own nav history stack:
  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      }
    }
  })

  .state('tab.new-account', {
    url: '/account/new',
    views: {
      'tab-new-account': {
        templateUrl: 'templates/new-account.html',
        controller: 'accountController'
      }
    }
  })
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  //===================================LIST====================>
  .state('tab.list', {
    url: '/list',
    views: {
      'tab-list': {
        templateUrl: 'templates/tab-list.html',
        controller: 'listCtrl'
      }
    }
  })
  .state('tab.detail-list', {
  url: '/list/:id',
  views:{
    'tab-list':{
      templateUrl:'templates/detail-list.html',
      controller: 'listCtrl'
    }
  }})
  .state('tab.detail-cap', {
  url: '/list/:id',
  views:{
    'tab-list':{
      templateUrl:'templates/detail-cap.html',
      controller: 'listCtrl'
    }
  }})
//===================================LIST END====================>
.state('tab.map', {
  url: '/map',
  views: {
    'tab-map': {
      templateUrl: 'templates/tab-map.html',
      controller: 'mapCtrl'
    }
  }
})

	.state('tab.cap', {
  url: '/cap',
  views: {
    'tab-cap': {
      templateUrl: 'templates/tab-caps.html',
      controller: 'capCtrl'
    }
  }
})


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

  $httpProvider.interceptors.push(function ($q, $location) {
       return {
           'request': function (config) {
               config.headers = config.headers || {};
               if (window.localStorage['token']) {
                   config.headers.authorization = window.localStorage['token'];
               }
               return config;
           },
           'responseError': function (response) {
               if (response.status === 401 || response.status === 403) {
                   $location.path('/login');
               }
               return $q.reject(response);
           }
       };
    });

});
