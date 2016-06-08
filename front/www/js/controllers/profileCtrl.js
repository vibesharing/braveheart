function ProfileCtrl($scope, $http, $state, $cordovaCamera, $cordovaFile, $cordovaGeolocation) {
	$http.get('http://192.168.3.196:8000/users').then(function(res){
		// $http.get('http://192.168.3.196:8000/profiles').then(function(res){
		$scope.listProfile = res.data;

		$scope.profile1 = $scope.listProfile[0];

	});
	$scope.sendProfile = function() {
		var data = $scope.profile;
		//$http.post('http://192.168.3.196:8000/profiles', data);
		$http.post('http://192.168.3.196:8000/profiles', data);
		$state.go($state.current, {}, {reload: true});

	};

	$scope.$on('$ionicView.enter', function() {
		$scope.profile = {};
	});


}
