'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/usersList.html',
    controller: 'UsersCtrl'
  });
}])

.constant('config',{
  baseUrl:'http://localhost:3000'
})

.value('usersData',[
    {
      username:'john',
      location:'Los Angeles'
    },
    {
      username:'madison',
      location:'New York'
    },
    {
      username:'vivek',
      location:'New Delhi'
    },
    {
      username:'alice',
      location:'London'
    },
    {
      username:'sherlock',
      location:'Southampton'
    },
    {
      username:'rahul',
      location:'Bangalore'
    },
]);