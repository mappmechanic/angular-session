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

}());