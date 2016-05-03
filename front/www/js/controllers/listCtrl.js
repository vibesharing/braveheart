function listCtrl($scope, $state, $http){
  $http.get('http://localhost:8000/profiles').then(function(res){
    $scope.list = res.data;
  });

}
