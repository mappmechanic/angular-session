var userServiceFunc = function($http) {
	var baseUrl = 'http://localhost:3000';

	return { getUsers:getUsersData,
           findNoOfUsers:findNoOfUsers }

	function getUsersData(callback) {
      $http.get(baseUrl+'/users')
      .success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        callback(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        callback(false);
      });
    }

    function findNoOfUsers(usersList)
    {
      return usersList.length;
    }
}

userServiceFunc.$inject = ['$http'];

angular.module('myApp.users')
.factory('UserService',userServiceFunc);