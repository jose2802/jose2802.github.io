'use strict';

/**
 * @ngdoc function
 * @name cuboApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cuboApp
 */
angular.module('cuboApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
