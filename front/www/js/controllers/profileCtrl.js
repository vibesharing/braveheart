function ProfileCtrl($scope, $http, $state) {
	$scope.profile = {};

	$scope.sendProfile = function() {
		var data = $scope.profile;
		console.log(data);
		$http.post('http://localhost:8000/profiles', data);
	};
};
