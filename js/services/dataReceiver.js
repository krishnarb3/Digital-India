app.factory('dataReceiver', ['$http', function($http) {

  return $http.get('http://d536a2e8.ngrok.io/webapp/statistics.php') 
  				.success(function(data) {
    					return data;
  					})
  				.error(function(err) {
    					return err;
  					});
}]);
