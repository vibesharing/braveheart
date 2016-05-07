function accountController($scope, accountService, $location, $cordovaFile, $cordovaGeolocation){
    $scope.account = {};
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    	$scope.account.LatLng = {lat:position.coords.latitude, lng:position.coords.longitude};
    });
    $scope.save = function(){
        accountService.create($scope.$$childTail.account).then(function(){
            $location.path('/');
        })
    }
}
