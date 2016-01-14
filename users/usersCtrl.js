
var usersCtrlFunction = function($scope,$http,config) {

    $scope.loading = false;
    var baseUrl = config.baseUrl;

    getUsersData(function(response){
      $scope.users = response;
      $scope.loading = false;
    });

    $scope.currentAction = 'Add';
    $scope.editUserIndex = -1;
    
    $scope.userForm = { username:'',location:''};
    
    $scope.editUser = editUser;
    $scope.removeUser = removeUser;
    $scope.submitForm = submitForm;
    $scope.addUserBtnClicked = addUserBtnClicked;

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
    
    function addUser(newUserObj) {
        $scope.users.push(newUserObj);
    }
    
    function addUserBtnClicked() {
      $scope.currentAction = 'Add';
      $scope.userForm = { username:'',location:''};
    }
    
    function removeUser(index) {
        $scope.users.splice(index,1);   
    }
    
    function updateUser(index,updatedUserObj) {
        $scope.users[index] = updatedUserObj;
    }
    
    function editUser(index) {
        $scope.currentAction = 'Edit';
        $scope.editUserIndex = index;
        $scope.userForm = $scope.users[index];
    }
    
    function submitForm() {
     if($scope.currentAction === 'Add') {
       addUser($scope.userForm);   
     }else if($scope.currentAction === 'Edit')
     {
       updateUser($scope.editUserIndex,$scope.userForm);
     }
     $scope.userForm = { username:'',location:''};
    }
};

usersCtrlFunction.$inject = ['$scope','$http','config'];

angular.module('myApp.users')
.controller('UsersCtrl',usersCtrlFunction);


