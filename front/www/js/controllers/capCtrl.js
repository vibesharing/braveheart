function capCtrl($scope, $http, $state) {


	$scope.sendCap = function() {
		var data = $scope.cap;
		console.log(data);
		//$http.post('http://192.168.3.196:8000/caps', data);
		$http.post('http://localhost:8000/caps', data);
		$state.go($state.current, {}, {reload: true});

	};

	$scope.$on('$ionicView.enter', function() {
		$scope.cap = {};
	});


}
	