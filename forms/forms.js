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

      $scope.names = [
        {name:'Jani',location:'Norway'},
        {name:'Hege',location:'Sweden'},
        {name:'Kai',location:'Denmark'},
        {name:'User1',location:'Delhi'},
        {name:'User2',location:'North America'},
        {name:'User3',location:'South America'}
    ];


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
}])


var app = angular.module('myApp');

var INTEGER_REGEXP = /^\-?\d+$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

app.directive('username', function($q,$timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
    var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.username = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();
        usernames = usernames.map(function(username){ return username.toLowerCase(); });
        $timeout(function() {
          // Mock a delayed response
          if (usernames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});