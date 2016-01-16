(function() {

  var app = angular.module('directivesModule',[]);

  app.directive('domDirective', function () {
      return {
          restrict: 'A',
          scope: {
            hoverColor:'@'
          },
          link: function ($scope, element, attrs) {

              element.on('click', function () {
                  element.html('You clicked me!');
              });
              element.on('mouseenter', function () {
                  element.css('background-color', $scope.hoverColor);
              });
              element.on('mouseleave', function () {
                  element.css('background-color', 'white');
              });
          }
      };
  });

  app.directive('isolateScopeWithController', function () {
      
    var controller = ['$scope', function ($scope) {

          function init() {
              $scope.items = angular.copy($scope.datasource);
          }

          init();

          $scope.addItem = function () {
              $scope.add({itemno:$scope.items.length+1});

              //Add new customer to directive scope
              $scope.items.push({
                  name: 'New Directive Controller Item'
              });
          };
      }],
        
      template = '<button ng-click="addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in items">{{ ::item.name }}</li></ul>';
      
      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          template: template
      };
  });


}());