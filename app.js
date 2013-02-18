'use strict';
//Remove all comments

var innoCricket = angular.module('innoCricket', []);

  innoCricket.config(function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'views/update.html', controller:'HomeController'})
    .when ('/profiles',{templateUrl:'views/profiles.html', controller:'ProfilesController'})
    .when ('/gallery',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when ('/previous',{templateUrl:'views/update.html', controller:'ProfilesController'})
    .when('/player/:playerId', {templateUrl:'views/player-Info.html', controller:'PlayerDetailsController'})

  });
// added new comment
