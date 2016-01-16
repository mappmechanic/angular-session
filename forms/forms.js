'use strict';

angular.module('myApp.forms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forms/:model/:id?', {
    templateUrl: 'forms/forms.html',
    controller: 'FormsController'
  });
}])

.controller('FormsController', ['$scope','$routeParams', function($scope,$routeParams) {
  $scope.model = $routeParams['model'] ? $routeParams['model'] : '' ;
 
  $scope.id = $routeParams['id'] ? $routeParams['id'] : 0;
 
  $scope.action = $routeParams['action'] ? $routeParams['action'] : 'add';

}]);

// angular.module('myApp')
// .filter('reverse', function() {
//   return function(input, uppercase) {
//     input = input || '';
//     var out = "";
//     for (var i = 0; i < input.length; i++) {
//       out = input.charAt(i) + out;
//     }
//     // conditional based on optional argument
//     if (uppercase) {
//       out = out.toUpperCase();
//     }
//     return out;
//   };
// })

// var app = angular.module('myApp');

// var INTEGER_REGEXP = /^\-?\d+$/;
// app.directive('integer', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$validators.integer = function(modelValue, viewValue) {
//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty models to be valid
//           return true;
//         }

//         if (INTEGER_REGEXP.test(viewValue)) {
//           // it is valid
//           return true;
//         }

//         // it is invalid
//         return false;
//       };
//     }
//   };
// });

// app.directive('username', function($q,$timeout) {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//     var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

//       ctrl.$asyncValidators.username = function(modelValue, viewValue) {

//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty model valid
//           return $q.when();
//         }

//         var def = $q.defer();
//         usernames = usernames.map(function(username){ return username.toLowerCase(); });
//         $timeout(function() {
//           // Mock a delayed response
//           if (usernames.indexOf(modelValue) === -1) {
//             // The username is available
//             def.resolve();
//           } else {
//             def.reject();
//           }

//         }, 2000);

//         return def.promise;
//       };
//     }
//   };
// });