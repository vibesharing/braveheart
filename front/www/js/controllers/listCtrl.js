function listCtrl($scope, $state, $http){
  $scope.$on('$ionicView.enter', function(){
  $http.get('http://192.168.3.196:8000/profiles').then(function(res){
    $scope.list = res.data;
  });
});
  $scope.whichdetail = $state.params.aId;

$scope.goToDetailList = function(){
$state.go('tab.detail-list/{{profile._id}}');
};
}
