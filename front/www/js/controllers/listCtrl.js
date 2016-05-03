function listCtrl($scope, $state, $http, $stateParams){

  $scope.$on('$ionicView.enter', function(){
    $http.get('http://192.168.3.196:8000/profiles').then(function(res){
      $scope.list = res.data;
    });
  });

  $scope.goToDetailList = function(profile){
    $state.go('tab.detail-list', { id: profile._id});
  };

  $scope.myFilter = function (item) {
    return item._id == $stateParams.id;
  }
}
