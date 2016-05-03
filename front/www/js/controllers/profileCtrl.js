function ProfileCtrl($scope, $http, $state, $cordovaCamera, $cordovaFile, $cordovaGeolocation) {
$scope.profile = {};
var options = {timeout: 10000, enableHighAccuracy: true};
$cordovaGeolocation.getCurrentPosition(options).then(function(position){
	$scope.profile.LatLng = {lat:position.coords.latitude, lng:position.coords.longitude};
});

	$scope.sendProfile = function() {
		var data = $scope.profile;
		console.log(data);
		//$http.post('http://192.168.3.196:8000/profiles', data);
		$http.post('http://localhost:8000/profiles', data);
		$state.go($state.current, {}, {reload: true});

	};

	$scope.$on('$ionicView.enter', function() {
		$scope.profile = {};
	});


}
