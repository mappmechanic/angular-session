
var usersCtrlFunction = function($scope,$http,config,UserService) {

    $scope.loadingContent = "<div><b>LOADING...</b></div>";

    var baseUrl = config.baseUrl;

   UserService.getUsers(function(response){
      if(!response) {
        $scope.error = {message:'Server error'};
      }else {
       $scope.users = response;
       $scope.no  = UserService.findNoOfUsers(response);
      }
     $scope.loading = false;
   });

    $scope.currentAction = 'Add';
    $scope.editUserIndex = -1;
    
    $scope.userForm = { username:'',location:''};
    
    $scope.editUser = editUser;
    $scope.removeUser = removeUser;
    $scope.submitForm = submitForm;
    $scope.addUserBtnClicked = addUserBtnClicked;

    $scope.$on('loginSuccessful',function(eventInfo,data){
      console.log('Login loginSuccessful event occurred');
      console.log(data);
      $scope.$emit('userVisit',{userId:24324});
    });
    
    function addUser(newUserObj) {
        $scope.loading = true;
        $http.post(baseUrl+'/users',newUserObj)
        .then(function(data) {
          $scope.users.push(newUserObj);
          $scope.loading = false;
        },function(data){
          alert("Could not add a new user !");
          $scope.loading = false;
        });
    }
    
    function addUserBtnClicked() {
      $scope.currentAction = 'Add';
      $scope.userForm = { username:'',location:''};
    }
    
    function removeUser(index) {
        $scope.loading = true;
        var id = $scope.users[index].id;
        $http.delete(baseUrl+'/users/'+id)
        .success(function(data) {
          $scope.users.splice(index,1); 
          $scope.loading = false;
        })
        .error(function(data){
          alert("Could not delete the user !");
          $scope.loading = false;
        });  
    }
    
    function updateUser(index,updatedUserObj) {
        var req = {
         method: 'PUT',
         url: baseUrl+'/users/'+updatedUserObj.id,
         data: updatedUserObj
        }
        $http(req)
        .success(function(data){
          $scope.users[index] = updatedUserObj;
        })
        .error(function(data){
          alert("Could not edit the user !");
          $scope.loading = false;
        });
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

usersCtrlFunction.$inject = ['$scope','$http','config','UserService'];

angular.module('myApp.users')
.controller('UsersCtrl',usersCtrlFunction);


