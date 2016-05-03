function mapCtrl($scope, $state,$http, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      $http.get('http://192.168.3.196:8000/profiles').then(function(res){
        $scope.listProfile = res.data;
        for(var i =0; i < $scope.listProfile.length; i++){
          new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: $scope.listProfile[i].LatLng
          });
        }
      });

  }, function(error){
    console.log("Could not get location");
  });


});
}
