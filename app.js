'use strict';
//To check git changes
//Changed the file
// diff id
// conflict
// revert after commit
//Another conflict

var innoCricket = angular.module('innoCricket', []);
//my ofc desktop
// anuradha
//Routing starts here
  innoCricket.config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'views/update.html', controller:'HomeController'})
    .when ('/profiles',{templateUrl:'views/profiles.html', controller:'ProfilesController'})
    .when ('/gallery',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when ('/previous',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when('/player/:playerId', {templateUrl:'views/player-Info.html', controller:'PlayerDetailsController'})

  });
//all conflicts
