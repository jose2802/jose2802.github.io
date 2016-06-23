'use strict';

/**
 * @ngdoc function
 * @name cuboApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cuboApp
 */
angular.module('cuboApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
