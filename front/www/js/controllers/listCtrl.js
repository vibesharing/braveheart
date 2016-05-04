function listCtrl($scope, $state, $http, $stateParams){

	$scope.$on('$ionicView.enter', function(){

		$http.get('http://localhost:8000/profiles').then(function(res){
			// $http.get('http://192.168.3.196:8000/profiles').then(function(res){
			$scope.listProfile = res.data;
		});
		
		$http.get('http://localhost:8000/caps').then(function(res){
			// $http.get('http://192.168.3.196:8000/profiles').then(function(res){
			$scope.listCap = res.data;
		});
	});

	$scope.goToDetailList = function(profile){
		$state.go('tab.detail-list', { id: profile._id});
	};

	$scope.myFilter = function (item) {
		return item._id == $stateParams.id;
	};
	$scope.goToDetailCap = function(profile){
		$state.go('tab.detail-cap', { id: profile._id});
	};
//	$scope.addcap = function(){
//		id = id du user
//	  data = {id_cap: '1K2L3KL2L1L21L2131L3KJ'}
//		$http.put('http://'+ global.host + ':' +global.port + '/users/addCap/' + id, data);
//		
		
	

	console.log($stateParams.id);


}
