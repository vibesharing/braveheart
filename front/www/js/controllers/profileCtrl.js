function ProfileCtrl($scope, $http, $state) {
	$scope.$on('$ionicView.enter', function() {
		$scope.date = {};

		$http.get('http://localhost:8000/todos').then(function(res){
			$scope.list = res.data;
		});
	});


	$scope.cross = function() {
		var data = $scope.date;
		console.log(data);
		$http.post('http://localhost:8000/todos', data);
		$http.get('http://localhost:8000/todos').then(function(res){
			$scope.list = res.data;
		});
		//$state.cross($state.current, {}, {reload: true});
	};
}