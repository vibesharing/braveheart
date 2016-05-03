listCtrl = function($scope, $state, $ngCordova, $http){
  $http.get('http://localhost:8000/profiles').then(function(res){
    $scope.list = res.data;
  });

};
