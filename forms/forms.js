'use strict';

angular.module('myApp.forms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forms', {
    templateUrl: 'forms/forms.html',
    controller: 'FormsController'
  });
}])

.controller('FormsController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        if($scope.form.$valid) {
          $scope.master = angular.copy(user);
        }
      };

      $scope.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        $scope.user = angular.copy({});
        $scope.master = angular.copy({});
      };


      $scope.typeSelected = function() {
        alert('New Type Selected');
      }

      $scope.reset();
}]);