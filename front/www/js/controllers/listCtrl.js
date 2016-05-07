function listCtrl($scope, $state, $http, $stateParams, global, $cordovaGeolocation){

	$scope.$on('$ionicView.enter', function(){

		$http.get('http://localhost:8000/users').then(function(res){
			// $http.get('http://localhost:8000/profiles').then(function(res){
			$scope.listProfile = res.data;
		});

		$http.get('http://localhost:8000/caps').then(function(res){
			// $http.get('http://localhost:8000/profiles').then(function(res){
			$scope.listCap = res.data;
		});
	});

	$scope.goToDetailList = function(profile){
		$state.go('tab.detail-list', { id: profile._id});
	};

	$scope.myFilter = function (item) {
		$scope.profileId = $stateParams.id;
		console.log($stateParams.id);
		return item._id == $stateParams.id;

	};
	$scope.goToDetailCap = function(profile){
		$state.go('tab.detail-cap', { id: profile._id});

	};
	$scope.addcap = function(item){
		id = $scope.profileId;
		console.log(item);
	  data = {id_cap: item._id};
		$http.put('http://'+ global.host + ':' +global.port + '/users/addCap/' + id, data);

};




}
