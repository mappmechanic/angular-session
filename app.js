'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.home',
  'myApp.forms',
  'myApp.users',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.run(['$rootScope',function($rootScope){
	var routeChangeSuccessHandler = function(event,newRoute,oldRoute){
		console.log('Route Change Success');
		console.log(newRoute);
		if(newRoute.loadedTemplateUrl === "users/usersList.html")
		{
			console.log('userViewLoaded event being broadcasted');
			//$rootScope.$broadcast('userVisit');
		}
	};

	$rootScope.welcomeMessage = "Testing";

	$rootScope.$on('$routeChangeSuccess',routeChangeSuccessHandler);

	$rootScope.$on('$routeChangeError',function(event,oldRoute,newRoute){
		console.log('Route Change Error');
	});

	$rootScope.login = function() {
		setTimeout(function() {
			$rootScope.$broadcast('loginSuccessful',
				{userId:23,sessionToken:'3432432423'});
		},1000);
	}


	$rootScope.$on('userVisit',function(event,data){
		console.log('User Visit event was handled :'+event);
		console.log(data);
	});

}]);