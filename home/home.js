'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.welcomeMessage = "Home Level Welcome";
    
    $scope.sectionsContent = [
        {
         name: 'Section 1 223',
         text: 'Text content for Section 1. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
        },
        {
         name: 'Section 2 3534',
         text: 'Text content for Section 2. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
        },
        {
         name: 'Section 3 4355',
         text: 'Text content for Section 3. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
        }
    ];
}])

.controller('SubHomeCtrl', ['$scope',function($scope) {
	$scope.welcomeMessage = "Sub Home Level Welcome";
}]);